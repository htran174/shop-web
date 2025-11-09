// Builds the pedicure menu from menu-pedicure.data.js (ES module)
import { PEDICURE_MENU } from "/assets/js/menu-pedicure.data.js";

/* ---------- Utilities ---------- */
function formatPrice(p) {
  if (typeof p === "number") return `$${p.toFixed(2)}`;
  const s = String(p).trim();
  return /^\$/.test(s) ? s : `$${s}`;
}

// If a price/bullet was appended to name, strip it (fixes “A Quick Pedicure $40.00”)
function cleanName(name) {
  return String(name)
    .replace(/\s*[·•\-–—]?\s*\$?\d[\d,]*(\.\d{2})?\s*$/, "")
    .trim();
}

/* ---------- Render ---------- */
function renderRow(item) {
  const li = document.createElement("li");
  li.className = "menu-item";
  // keep for potential future highlighting; currently unused
  if (item.isSignature === true) li.dataset.signature = "true";

  const name = cleanName(item.name);
  const price = formatPrice(item.price);

  li.innerHTML = `
    <div class="row">
      <span class="num">#${item.number}</span>
      <h3 class="name">${name}</h3>
      <span class="leaders" aria-hidden="true"></span>
      <span class="price">${price}</span>
    </div>
    <p class="desc">${item.description}</p>
  `;
  return li;
}

function mountList(selector, items) {
  const el = document.querySelector(selector);
  el.innerHTML = "";
  items.forEach(i => el.appendChild(renderRow(i)));
}

/* ---------- Scroll reveal (subtle) ---------- */
function initScrollReveal(root = document.body) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const els = root.querySelectorAll(".menu-item");
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.style.animationDelay = "0s";
        e.target.style.animationPlayState = "running";
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const active = PEDICURE_MENU.filter(x => x.isActive === true);
  const core = active.filter(x => x.sortGroup === "core").sort((a,b)=>a.number-b.number);
  const signature = active.filter(x => x.sortGroup === "signature").sort((a,b)=>a.number-b.number);

  mountList("#pedicure-core", core);
  mountList("#pedicure-signature", signature);

  // Explicitly ensure Herbal Detox has no special styling
  document.querySelectorAll("#pedicure-signature .menu-item").forEach(li => {
    const n = (li.querySelector(".name")?.textContent || "").toLowerCase();
    if (n.includes("herbal detox")) {
      li.removeAttribute("data-signature");
      li.classList.remove("sig-tint");
      li.querySelector(".leaders")?.classList.remove("leaders--gold");
      li.querySelector(".badge-signature")?.remove();
    }
  });

  initScrollReveal(document.querySelector("section"));
});
