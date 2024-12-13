import '../style.css';
import { renderNavigation } from './components/Navigation';
import { renderFooter } from './components/Footer';
import { renderOrderItem } from './components/OrderItem';
import { renderOrderSummary } from './components/OrderSummary';
import { menuItems } from './data/menu-items';
import { customizationOptions } from './data/customization-options';
import { updateCart, updateOrderSummary } from './utils/cart';
import { setupMobileMenu,initializeNavigation } from './utils/navigation';

// Call the render function when the page loads
renderOrderPage();
initializeNavigation();
function renderOrderPage() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${renderNavigation()}
    <main class="pt-20 pb-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="section-title text-center mb-8">Create Your Order</h1>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Menu Items -->
          <div class="lg:col-span-2 space-y-4">
            <h2 class="font-display text-xl text-primary mb-4">Select Your Items</h2>
            ${menuItems.map(item => renderOrderItem(item, customizationOptions)).join('')}
          </div>

          <!-- Order Summary -->
          <div class="lg:sticky lg:top-24 h-fit">
            ${renderOrderSummary()}
          </div>
        </div>
      </div>
    </main>
    ${renderFooter()}
  `;

  setupEventListeners();
  setupMobileMenu();
}

function setupEventListeners() {
  // Add to cart functionality
  window.addToCart = (itemId) => {
    const item = menuItems.find(i => i.id === itemId);
    const itemElement = document.querySelector(`[data-item-id="${itemId}"]`);
    const customizations = {};
    
    item.customizations.forEach(type => {
      const select = itemElement.querySelector(`[data-customization="${type}"]`);
      const selectedOption = select.options[select.selectedIndex];
      customizations[type] = {
        id: select.value,
        name: selectedOption.text,
        price: parseFloat(selectedOption.dataset.price || 0)
      };
    });

    const totalPrice = item.price + Object.values(customizations)
      .reduce((sum, option) => sum + option.price, 0);

    updateCart(item, customizations, totalPrice);
    updateOrderSummary();
  };
}