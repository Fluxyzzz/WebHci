// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});

// ── UTENSIL CHECKBOX (yes/no mutual) ──
const utensilYes = document.getElementById('utensilYes');
const utensilNo  = document.getElementById('utensilNo');
if (utensilYes && utensilNo) {
  utensilYes.addEventListener('change', () => { if (utensilYes.checked) utensilNo.checked = false; });
  utensilNo.addEventListener('change',  () => { if (utensilNo.checked)  utensilYes.checked = false; });
}

// ── CART STATE ──
let cartOrder = null;

function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function updateCart() {
  const cartEmpty  = document.getElementById('cartEmpty');
  const cartFilled = document.getElementById('cartFilled');
  const cartItems  = document.getElementById('cartItems');
  const cartCard   = document.getElementById('cartCard');

  if (!cartOrder) {
    cartEmpty.style.display  = 'flex';
    cartFilled.style.display = 'none';
    cartCard.style.alignItems = 'center';
    cartCard.style.justifyContent = 'center';
    return;
  }

  cartEmpty.style.display  = 'none';
  cartFilled.style.display = 'block';
  cartCard.style.alignItems = 'flex-start';
  cartCard.style.justifyContent = 'flex-start';

  // Build items HTML
  const toppings = cartOrder.toppings.length ? cartOrder.toppings.join(', ') : null;
  const service  = cartOrder.service === 'dine-in' ? 'Dine In' : 'Take Away';
  const shipping = cartOrder.service === 'takeaway' ? 15000 : 0;

  cartItems.innerHTML = `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${cartOrder.menuName}</div>
        <div class="cart-item-meta">
          ${service}
          ${toppings ? ' · ' + toppings : ''}
          ${cartOrder.utensil ? ' · Utensils' : ''}
        </div>
      </div>
      <div class="cart-item-price">${formatRupiah(cartOrder.menuPrice)}</div>
    </div>
    ${toppings ? `<div class="cart-item"><div class="cart-item-name" style="font-weight:400;color:var(--text-muted)">Extra Toppings</div><div class="cart-item-price" style="color:var(--text-muted)">Rp 0</div></div>` : ''}
  `;

  const subtotal = cartOrder.menuPrice;
  const total    = subtotal + shipping;

  document.getElementById('cartSubtotal').textContent = formatRupiah(subtotal);
  document.getElementById('cartShipping').textContent = shipping > 0 ? formatRupiah(shipping) : 'Gratis';
  document.getElementById('cartTotal').textContent    = formatRupiah(total);
}

// ── PLACE ORDER ──
document.getElementById('btnPlaceOrder').addEventListener('click', () => {
  const fullName = document.getElementById('fullName').value.trim();
  const phone    = document.getElementById('phone').value.trim();
  const menuSel  = document.getElementById('menuSelect').value;
  const payment  = document.getElementById('paymentMethod').value;
  const service  = document.querySelector('input[name="service"]:checked')?.value;
  

  // Validation
  if (!fullName) return showError('Nama lengkap wajib diisi.');
  if (!phone)    return showError('Nomor telepon wajib diisi.');
  if (!menuSel)  return showError('Pilih menu terlebih dahulu.');
  if (!payment)  return showError('Pilih metode pembayaran.');

  const [menuName, menuPriceStr] = menuSel.split('|');
  const menuPrice = parseInt(menuPriceStr);

  // Toppings
  const toppings = [...document.querySelectorAll('.checkbox-option input[type="checkbox"]:checked')]
    .filter(cb => cb.id !== 'utensilYes' && cb.id !== 'utensilNo')
    .map(cb => cb.value);

  const utensil = document.getElementById('utensilYes').checked;
  const notes   = document.getElementById('notes').value.trim();

  cartOrder = { fullName, phone, menuName, menuPrice, service, toppings, utensil, payment, notes };
  updateCart();

  // Toast
  const toast = document.getElementById('toast');
  toast.textContent = `✅  Pesanan "${menuName}" berhasil ditambahkan!`;
  toast.style.transform = 'translateX(-50%) translateY(0)';
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
    toast.style.opacity = '0';
  }, 2800);
});

function showError(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = `⚠️  ${msg}`;
  toast.style.background = 'var(--red-accent)';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
    toast.style.opacity = '0';
    setTimeout(() => { toast.style.background = ''; }, 400);
  }, 2800);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  updateCart();

  // Animate form card on load
  const formCard = document.querySelector('.order-form-card');
  const cartCard = document.querySelector('.order-cart-card');
  [formCard, cartCard].forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
});