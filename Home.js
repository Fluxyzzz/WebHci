// ── ORDER TOAST ──
function handleOrder(name) {
  const toast = document.getElementById('toast');
  toast.textContent = `✅  "${name}" ditambahkan ke keranjang!`;
  toast.style.transform = 'translateX(-50%) translateY(0)';
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
    toast.style.opacity = '0';
  }, 2800);
}

// ── SMOOTH SCROLL (prevent default # links) ──
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});

// ── INTERSECTION OBSERVER (scroll fade-in) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.featured, .chef-card, .chef-recs').forEach(el => {
  el.style.cssText += 'opacity:0; transform:translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  observer.observe(el);
});