"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "auth-callback.js"), "utf8");
const receiver = "chrome-extension://fpikkglicmmlhkcmnobecnkpomfnnclh/auth-receiver.html";

async function run({ hash = "", search = "", hostname = "getcompr.nl", protocol = "https:", port = "" } = {}) {
  const listeners = new Map();
  const status = { textContent: "" };
  const link = {
    hidden: true, href: "", rel: "",
    addEventListener(type, listener) { listeners.set(type, listener); }
  };
  const navigations = [];
  const logs = [];
  const location = {
    hash, search, hostname, protocol, port, pathname: "/auth-callback.html",
    replace(value) { navigations.push(value); }
  };
  const context = vm.createContext({
    URLSearchParams, Date, JSON,
    document: { getElementById: id => id === "status" ? status : link },
    location,
    history: { replaceState(_state, _title, value) { location.hash = ""; location.search = ""; location.visible = value; } },
    localStorage: { getItem: () => null, removeItem() {} },
    fetch: async () => { throw new Error("unexpected fetch"); },
    console: { log: (...args) => logs.push(args), error: (...args) => logs.push(args), warn: (...args) => logs.push(args) }
  });
  vm.runInContext(source, context);
  await new Promise(resolve => setImmediate(resolve));
  return { status, link, location, navigations, logs, click: listeners.get("click") };
}

function validHash(extra = "") {
  return `#access_token=access-secret&refresh_token=refresh-secret&expires_in=3600&token_type=bearer&type=magiclink${extra}`;
}

test("valid callback clears the visible URL and keeps tokens out of DOM and logs", async () => {
  const result = await run({ hash: validHash() });
  assert.equal(result.location.visible, "/auth-callback.html");
  assert.equal(result.link.href, receiver);
  assert.equal(result.link.hidden, false);
  assert.doesNotMatch(JSON.stringify(result.link), /access-secret|refresh-secret/);
  assert.doesNotMatch(JSON.stringify(result.logs), /access-secret|refresh-secret/);
  result.click({ preventDefault() {} });
  assert.match(result.navigations[0], new RegExp(`^${receiver.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}#`));
  assert.match(result.navigations[0], /access_token=access-secret/);
});

for (const [name, options] of [
  ["missing parameters", {}],
  ["next URL", { hash: validHash(), search: "?next=https://evil.example" }],
  ["protocol-relative redirect", { hash: `${validHash()}&next=%2F%2Fevil.example` }],
  ["encoded redirect", { hash: `${validHash()}&next=https%3A%2F%2Fevil.example` }],
  ["double-encoded redirect", { hash: `${validHash()}&next=https%253A%252F%252Fevil.example` }],
  ["javascript redirect", { hash: `${validHash()}&next=javascript%3Aalert(1)` }],
  ["data redirect", { hash: `${validHash()}&next=data%3Atext%2Fhtml%2Cbad` }],
  ["unexpected auth type", { hash: validHash().replace("type=magiclink", "type=recovery") }],
  ["unexpected token type", { hash: validHash().replace("token_type=bearer", "token_type=mac") }],
  ["wrong website origin", { hash: validHash(), hostname: "evil.example" }]
]) {
  test(`${name} fails closed without a Continue action`, async () => {
    const result = await run(options);
    assert.equal(result.link.hidden, true);
    assert.equal(result.link.href, "");
    assert.equal(result.click, undefined);
    assert.equal(result.navigations.length, 0);
  });
}

test("receiver identity is fixed and cannot be supplied by callback input", async () => {
  const result = await run({ hash: `${validHash()}&extension_id=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa` });
  assert.equal(result.link.hidden, true);
  assert.equal(result.link.href, "");
  assert.equal(source.match(/fpikkglicmmlhkcmnobecnkpomfnnclh/g)?.length, 1);
});
