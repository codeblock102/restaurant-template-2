export function renderHero() {
  return `
    <section id="home" class="pt-24 pb-16 px-4 flex items-center">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" class="max-w-xl">
            <h1 class="font-display text-5xl md:text-6xl lg:text-7xl text-primary mb-6">
              Fresh Food for<br>Busy People
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Delicious, nutritious meals made with organic ingredients.
              Fast service without compromising quality.
            </p>
            <a href="/order.html" class="btn-primary inline-block text-center">Start Your Order</a>
          </div>
          <div data-aos="fade-left" class="relative">
            <img 
              src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800"
              alt="Fresh ingredients"
              class="rounded-2xl shadow-2xl w-full h-auto md:max-w-lg lg:max-w-xl mx-auto"
            >
          </div>
        </div>
      </div>
    </section>
  `;
}