import { formatPrice } from '../utils/price';

export function renderOrderSummary() {
  return `
    <div class="card p-4">
      <h2 class="font-display text-xl text-primary mb-4">Order Summary</h2>
      <div id="cart-items" class="space-y-3 mb-4">
        <p class="text-gray-600 text-center text-sm">Your cart is empty</p>
      </div>
      <div class="border-t pt-4">
        <div class="flex justify-between mb-2 text-sm">
          <span>Subtotal</span>
          <span id="subtotal">${formatPrice(0)}</span>
        </div>
        <div class="flex justify-between mb-3 text-sm">
          <span>Tax</span>
          <span id="tax">${formatPrice(0)}</span>
        </div>
        <div class="flex justify-between font-semibold">
          <span>Total</span>
          <span id="total">${formatPrice(0)}</span>
        </div>
        <button class="btn-primary w-full mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  `;
}