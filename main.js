/* Replace these three placeholders before publishing the website. */
const COMPR_LINKS = {
  chrome: "", // Example: https://chromewebstore.google.com/detail/your-extension-id
  edge: "", // Example: https://microsoftedge.microsoft.com/addons/detail/your-extension-id
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
