(() => {
  "use strict";
  const COMPR_EXTENSION_ID = "fpikkglicmmlhkcmnobecnkpomfnnclh";
  const status = document.getElementById("status");
  const params = new URLSearchParams(location.hash.slice(1));
  history.replaceState(null, "", location.pathname);
  const expiresIn = Number(params.get("expires_in"));
  const session = {
    access_token: params.get("access_token"),
    refresh_token: params.get("refresh_token"),
    expires_at: Math.floor(Date.now() / 1000) + (Number.isFinite(expiresIn) ? expiresIn : 3600)
  };
  if (!globalThis.chrome?.runtime?.sendMessage) {
    status.textContent = "COMPR kon niet worden bereikt. Controleer of de extensie is geïnstalleerd en actief.";
    return;
  }
  if (params.get("error") || !session.access_token || !session.refresh_token) {
    chrome.runtime.sendMessage(COMPR_EXTENSION_ID, { type: "COMPR_AUTH_PING" }, response => {
      status.textContent = !chrome.runtime.lastError && response?.ok
        ? "COMPR is bereikbaar. Vraag vanuit de extensie een nieuwe loginlink aan."
        : "COMPR kon niet worden bereikt. Controleer of de extensie is geïnstalleerd en actief.";
    });
    return;
  }
  chrome.runtime.sendMessage(COMPR_EXTENSION_ID, { type: "COMPR_AUTH_SESSION", session }, response => {
    if (chrome.runtime.lastError || !response?.ok) {
      status.textContent = "COMPR kon niet worden bereikt. Controleer of de extensie is geïnstalleerd en actief.";
      return;
    }
    status.textContent = "Je bent ingelogd bij COMPR. Je kunt dit tabblad nu sluiten.";
  });
})();
