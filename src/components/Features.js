export function renderFeatures() {
  const features = [
    {
      icon: '🌱',
      title: 'Organic Ingredients',
      description: 'Locally sourced, always fresh'
    },
    {
      icon: '⚡',
      title: 'Quick Service',
      description: 'Ready in minutes'
    },
    {
      icon: '♻️',
      title: 'Eco-Friendly',
      description: 'Sustainable packaging'
    }
  ];

  return `
    <section class="py-16 px-4 bg-natural">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          ${features.map((feature, index) => `
            <div class="text-center" data-aos="fade-up" data-aos-delay="${index * 100}">
              <div class="text-4xl mb-4">${feature.icon}</div>
              <h3 class="font-display text-xl mb-2">${feature.title}</h3>
              <p class="text-gray-600">${feature.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}