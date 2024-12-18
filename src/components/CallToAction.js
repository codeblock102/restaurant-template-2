export function renderCallToAction() {
  return `
    <section id="order" class="py-16 px-4 bg-primary text-white">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="font-display text-4xl md:text-5xl mb-6">Ready to Order?</h2>
        <p class="text-lg mb-8 text-natural">
          Fresh, delicious meals are just a few clicks away.
        </p>
        <a href="#" onclick="handleOrderClick(event)" class="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg inline-block transition-colors duration-200">
          Order Online
        </a>
      </div>
    </section>
  `;
}

function handleOrderClick(event) {
  event.preventDefault();
  document.getElementById('main-content').innerHTML = renderOrderPage();
  history.pushState({}, '', '/order');
}