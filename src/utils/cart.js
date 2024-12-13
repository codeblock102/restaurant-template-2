import { formatPrice } from './price';

export function updateCart(item, customizations, totalPrice) {
  const cartItems = document.getElementById('cart-items');
  if (cartItems.querySelector('.text-center')) {
    cartItems.innerHTML = '';
  }
  
  const cartItem = document.createElement('div');
  cartItem.className = 'flex justify-between items-start text-sm';
  cartItem.innerHTML = `
    <div>
      <h4 class="font-medium">${item.name}</h4>
      <div class="text-xs text-gray-600">
        ${Object.values(customizations)
          .filter(c => c.id)
          .map(c => c.name)
          .join(', ')}
      </div>
    </div>
    <span class="font-medium">${formatPrice(totalPrice)}</span>
  `;
  cartItems.appendChild(cartItem);
}

export function updateOrderSummary() {
  const cartItems = document.getElementById('cart-items');
  const items = Array.from(cartItems.children);
  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.querySelector('span').textContent.replace(/[^0-9.-]+/g, ''));
    return sum + price;
  }, 0);

  const tax = subtotal * 0.0825; // 8.25% tax rate
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = formatPrice(subtotal);
  document.getElementById('tax').textContent = formatPrice(tax);
  document.getElementById('total').textContent = formatPrice(total);
}