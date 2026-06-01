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
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-featured-inner').forEach(el => {
    el.style.cssText += 'opacity:0; transform:translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
    heroObserver.observe(el);
  });
});

const menuItems = [
  {
    name: "Ossobuco Alla Milan",
    desc: "Daging betis sapi muda yang dimasak perlahan hingga lembut, disajikan dengan risotto saffron khas Milan yang creamy dan aromatik. Kaya rasa, hangat, dan elegan.",
    price: "Rp. 150.000,00",
    img: "pict/Ossobuco alla Milanese.jfif"
  },
  {
    name: "Ribollita",
    desc: "Sup tradisional khas Toscana dengan roti rustic, kacang cannellini, kale, dan sayuran pilihan. Hangat, gurih, dan menenangkan cita rasa Italia rumahan.",
    price: "Rp. 150.000,00",
    img: "pict/Ribollita toscana, ricetta originale.jfif"
  },
  {
    name: "Pesto alla Genovese",
    desc: "Pasta dengan pesto basil segar, parmesan, kacang pinus, dan minyak zaitun Italia. Ringan, renyah, dan segar sebagai pembuka khas Italia.",
    price: "Rp. 150.000,00",
    img: "pict/pesto.png"
  },
  {
    name: "Bruschetta al Pomodoro",
    desc: "Roti panggang rustic dengan tomat segar, bawang putih, dan minyak zaitun Italia. Ringan, renyah, dan segar sebagai pembuka khas Italia.",
    price: "Rp. 75.000,00",
    img: "pict/pomodoro.png"
  },
  {
    name: "Spaghetti alle Vongole",
    desc: "Spaghetti dengan kerang segar, bawang putih, olive oil, dan parsley. Ringan, aromatik, dan menenangkan dengan cita rasa laut khas Italia.",
    price: "Rp. 125.000,00",
    img: "pict/spageti.png"
  },
  {
    name: "Saltimbocca alla Romana",
    desc: "Daging sapi muda lembut dengan prosciutto dan sage, dimasak dalam saus butter aromatik khas Roma. Gurih, elegan, dan cocok sebagai hidangan utama premium.",
    price: "Rp. 150.000,00",
    img: "pict/satimboca.png"
  },
  {
    name: "Pollo alla Parmigiana",
    desc: "Ayam crispy berlapis saus tomat Italia, mozzarella leleh, basil segar, dan parmesan. Gurih, creamy, dan cocok untuk pelanggan yang suka menu hangat klasik Italia.",
    price: "Rp. 125.000,00",
    img: "pict/pollo.png"
  },
  {
    name: "Bistecca alla Fiorentina",
    desc: "Steak khas Firenze dengan potongan daging tebal, dipanggang sederhana menggunakan olive oil, garam laut, lada hitam, dan herbs Italia. Juicy, smoky, dan premium.",
    price: "Rp. 125.000,00",
    img: "pict/Bistecca Fiorentina.jfif"
  },
  {
    name: "Parmigiana di Melanzane",
    desc: "Terong panggang berlapis saus tomat, mozzarella leleh, basil segar, dan parmesan. Rasanya creamy, hangat, dan cocok sebagai main course vegetarian yang tetap premium.",
    price: "Rp. 150.000,00",
    img: "pict/Parmigiana di melanzane - la ricetta di Cuoche ma buone.jfif"
  },
  {
    name: "Branzino al Limone",
    desc: "Ikan sea bass panggang dengan lemon, olive oil, bawang putih, dan herbs Italia. Rasanya ringan, segar, gurih, dan cocok untuk pelanggan yang mau main course elegan.",
    price: "Rp. 100.000,00",
    img: "pict/Seared Branzino with Lemon-Herb Drizzle.jfif"
  },
  {
    name: "Costolette d'Agnello",
    desc: "Iga domba panggang dengan rosemary, bawang putih, olive oil, dan herbs Italia. Juicy, aromatik, dan punya rasa premium yang cocok untuk menu utama.",
    price: "Rp. 125.000,00",
    img: "pict/Carré di agnello in crosta di pistacchi con yogurt al lime – Ricetta gourmet.jfif"
  },
  {
    name: "Brasato al Barolo",
    desc: "Daging sapi dimasak perlahan dengan red wine Barolo, herbs Italia, dan saus yang kaya rasa. Teksturnya lembut, aromanya mewah, dan cocok untuk menu utama premium.",
    price: "Rp. 150.000,00",
    img: "pict/Authentic Brasato al Barolo Recipe from Italy_ A Family Tradition.jfif"
  },
  {
    name: "Involtini al Limone",
    desc: "Irisan daging sapi muda yang dimasak lembut dengan saus lemon, butter, dan herb Italia. Rasanya ringan, creamy, segar, dan elegan.",
    price: "Rp. 120.000,00",
    img: "pict/Pan-Seared Scaloppine Al Limone, Glazed with a Citrus Sauce and Garnished with Lemon Slices.jfif"
  },
  {
    name: "Cotoletta alla Milanese",
    desc: "Daging sapi muda berbalut tepung roti, digoreng hingga renyah keemasan, lalu disajikan dengan lemon dan herbs Italia. Crispy di luar, lembut di dalam, dan klasik khas Milan.",
    price: "Rp. 125.000,00",
    img: "pict/Bone-In Veal Milanese Recipe (Cotoletta alla Milanese) - Happy Muncher.jfif"
  },
  {
    name: "Involtini di Vitello",
    desc: "Gulungan daging sapi muda berisi prosciutto, keju, herbs Italia, dimasak perlahan dengan white wine sauce. Lembut, gurih, dan terasa elegan sebagai main course klasik Italia.",
    price: "Rp. 120.000,00",
    img: "pict/Involtini di Carne al Vino Bianco_ Il Secondo Tenero e Succulento.jfif"
  },
];

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  menuItems.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.transitionDelay = `${(i % 3) * 0.07}s`;
    card.innerHTML = `
      <div class="menu-card-img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <button class="btn-order-sm" onclick="handleOrder('${item.name}')">Order Now</button>
          <span class="menu-card-price">${item.price}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.menu-card').forEach(card => observer.observe(card));
}

document.addEventListener('DOMContentLoaded', renderMenu);