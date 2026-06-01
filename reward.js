// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});

// ── SCROLL FADE-IN ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.addEventListener('DOMContentLoaded', () => {

  // Animasi baris tabel satu per satu
  document.querySelectorAll('.rewards-table tbody tr').forEach((row, i) => {
    row.style.cssText += `
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s;
    `;
    observer.observe(row);
  });

  // Animasi judul hero
  document.querySelectorAll('.rewards-hero-titles, .rewards-hero-badge, .rewards-hero-img').forEach((el, i) => {
    el.style.cssText += `
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s;
    `;
    observer.observe(el);
  });

});