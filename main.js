/* Official store links. Update contact when a public address is available. */
const COMPR_LINKS = {
  chrome: "https://chromewebstore.google.com/detail/compr/opgdgckljdepjokbbdgahhbocdlkggkj",
  edge: "https://microsoftedge.microsoft.com/addons/detail/hiioneifjfpbgbnmmhjbhcnbbkpddnle",
  contact: "" // Example: mailto:hello@example.com
};

document.querySelectorAll("[data-store]").forEach(link => {
  const url = COMPR_LINKS[link.dataset.store];
  if (url) {
    link.href = url;
    return;
  }

  link.addEventListener("click", event => {
    event.preventDefault();
    const status = document.querySelector("[data-store-status]");
    if (status) status.textContent = "Store link coming soon.";
    document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll("[data-contact-link]").forEach(link => {
  if (COMPR_LINKS.contact) link.href = COMPR_LINKS.contact;
  else link.addEventListener("click", event => event.preventDefault());
});

document.querySelectorAll("[data-year]").forEach(node => {
  node.textContent = new Date().getFullYear();
});

const browserPicker = document.querySelector("[data-browser-picker]");
const browserTrigger = document.querySelector("[data-browser-trigger]");
const browserCloseButtons = document.querySelectorAll("[data-browser-close]");
let pickerReturnTarget = null;

function openBrowserPicker() {
  if (!browserPicker) return;
  pickerReturnTarget = document.activeElement;
  browserPicker.hidden = false;
  document.body.classList.add("modal-open");
  browserPicker.querySelector(".browser-option")?.focus();
}

function closeBrowserPicker() {
  if (!browserPicker || browserPicker.hidden) return;
  browserPicker.hidden = true;
  document.body.classList.remove("modal-open");
  pickerReturnTarget?.focus();
}

browserTrigger?.addEventListener("click", openBrowserPicker);
browserCloseButtons.forEach(button => button.addEventListener("click", closeBrowserPicker));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeBrowserPicker();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach(item => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}
