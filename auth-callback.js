(() => {
  "use strict";
  const COMPR_EXTENSION_ID = "fpikkglicmmlhkcmnobecnkpomfnnclh";
  const status = document.getElementById("status");
  const continueLink = document.getElementById("continue");
  const params = new URLSearchParams(location.hash.slice(1));
  const originalHash = location.hash;
  history.replaceState(null, "", location.pathname);
  const expiresIn = Number(params.get("expires_in"));
  const session = {
    access_token: params.get("access_token"),
    refresh_token: params.get("refresh_token"),
    expires_at: Math.floor(Date.now() / 1000) + (Number.isFinite(expiresIn) ? expiresIn : 3600)
  };
  if (params.get("error") || !session.access_token || !session.refresh_token) {
    status.textContent = "De loginlink is ongeldig of verlopen. Vraag vanuit COMPR een nieuwe link aan.";
    return;
  }
  continueLink.href = `chrome-extension://${COMPR_EXTENSION_ID}/auth-receiver.html${originalHash}`;
  continueLink.hidden = false;
  status.textContent = "Je e-mailadres is bevestigd. Rond de login af in COMPR.";
})();
