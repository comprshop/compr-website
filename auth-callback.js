(async () => {
  "use strict";
  const COMPR_EXTENSION_ID = "opgdgckljdepjokbbdgahhbocdlkggkj";
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
  try {
    const saved = JSON.parse(localStorage.getItem("compr-founding-interest") || "null");
    if (saved && ["pro", "ultimate"].includes(saved.plan)) {
      const response = await fetch("https://taosgvfdnblnopaywimf.supabase.co/rest/v1/rpc/compr_register_founding_interest", {
        method: "POST",
        headers: {
          apikey: "sb_publishable_cZtYQI3ApFTw8kU2a2AoBQ_nGdlSw1W",
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ p_plan: saved.plan, p_source: saved.source || "website" })
      });
      if (!response.ok) throw new Error("interest_registration_failed");
      localStorage.removeItem("compr-founding-interest");
      status.textContent = "Je e-mailadres en Founding Access-interesse zijn bevestigd. Rond de login af in COMPR.";
      return;
    }
  } catch {
    status.textContent = "Je e-mailadres is bevestigd. Je Founding Access-interesse kon nog niet worden opgeslagen; probeer het formulier later opnieuw.";
    return;
  }
  status.textContent = "Je e-mailadres is bevestigd. Rond de login af in COMPR.";
})();
