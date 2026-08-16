/* Official store links. */
const COMPR_LINKS = {
  chrome: "https://chromewebstore.google.com/detail/compr/opgdgckljdepjokbbdgahhbocdlkggkj",
  edge: "https://microsoftedge.microsoft.com/addons/detail/hiioneifjfpbgbnmmhjbhcnbbkpddnle"
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

document.querySelectorAll("[data-year]").forEach(node => {
  node.textContent = new Date().getFullYear();
});

document.querySelectorAll(".faq-list button").forEach(button => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const answer = button.closest("article")?.querySelector(".faq-answer");
    button.setAttribute("aria-expanded", String(!expanded));
    if (answer) answer.hidden = expanded;
  });
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
