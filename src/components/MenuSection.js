import { menuItems } from '../data/menu-items';
import { formatPrice } from '../utils/price';

export function renderMenuSection() {
  return `
    <section id="menu" class="py-16 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="section-title text-center">Our Menu</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          ${menuItems.map(item => renderMenuItem(item)).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderMenuItem(item) {
  return `
    <div class="card" data-aos="fade-up">
      <img src="${item.image}" alt="${item.name}" class="w-full h-48 md:h-56 object-cover">
      <div class="p-6 flex flex-col flex-1">
        <div class="flex justify-between items-center mb-2">
          <h3 class="font-display text-xl">${item.name}</h3>
          <span class="text-accent font-semibold">${formatPrice(item.price)}</span>
        </div>
        <p class="text-gray-600 flex-1">${item.description}</p>
        <button class="btn-primary mt-4 w-full md:w-auto md:self-end">Add to Order</button>
      </div>
    </div>
  `;
}