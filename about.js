// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Hero content animasi saat load
  const heroContent = document.querySelector('.about-hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(24px)';
    heroContent.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }

  // Image blocks: slide dari sisi yang berlawanan
  document.querySelectorAll('.about-block-left .about-block-img').forEach(el => {
    el.style.cssText += 'opacity:0; transform:translateX(32px); transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;';
  });
  document.querySelectorAll('.about-block-right .about-block-img').forEach(el => {
    el.style.cssText += 'opacity:0; transform:translateX(-32px); transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;';
  });

  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateX(0)';
        imgObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.about-block-img').forEach(el => imgObserver.observe(el));

  // Values strip: tiap item muncul berurutan
  document.querySelectorAll('.about-value').forEach((el, i) => {
    el.style.cssText += `opacity:0; transform:translateY(20px); transition: opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s;`;
  });

  const valObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.about-value').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
        valObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const valStrip = document.querySelector('.about-values');
  if (valStrip) valObserver.observe(valStrip);
});