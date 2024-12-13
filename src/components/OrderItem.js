import { formatPrice } from '../utils/price';

export function renderOrderItem(item, customizationOptions) {
  return `
    <div class="card p-4" data-item-id="${item.id}">
      <div class="flex flex-col md:flex-row gap-4">
        <img src="${item.image}" alt="${item.name}" 
          class="w-full md:w-32 h-32 object-cover rounded-lg flex-shrink-0">
        <div class="flex-1">
          <div class="flex justify-between items-start">
            <h3 class="font-display text-lg">${item.name}</h3>
            <span class="text-accent font-semibold">${formatPrice(item.price)}</span>
          </div>
          <p class="text-gray-600 text-sm mt-1">${item.description}</p>
          
          <div class="mt-3 space-y-3">
            ${item.customizations.map(type => renderCustomizationSelect(type, customizationOptions[type])).join('')}
          </div>
          
          <button 
            class="btn-primary btn-sm mt-4 w-full md:w-auto"
            onclick="addToCart(${item.id})"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderCustomizationSelect(type, options) {
  return `
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Choose your ${type}:
      </label>
      <select 
        class="form-select text-sm w-full"
        data-customization="${type}"
      >
        <option value="">Select ${type}</option>
        ${options.map(option => `
          <option value="${option.id}" data-price="${option.price}">
            ${option.name} ${option.price > 0 ? `(+${formatPrice(option.price)})` : ''}
          </option>
        `).join('')}
      </select>
    </div>
  `;
}