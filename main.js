import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { renderNavigation } from './src/components/Navigation';
import { renderFooter } from './src/components/Footer';
import { renderHero } from './src/components/Hero';
import { renderMenuSection } from './src/components/MenuSection';
import { renderFeatures } from './src/components/Features';
import { renderCallToAction } from './src/components/CallToAction';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

window.handleOrder = (e) => {
  e.preventDefault();
  // Clear current content
  document.querySelector('main').innerHTML = `
    <section class="pt-24 pb-16 px-4">
      <div class="max-w-7xl mx-auto">
        <h1 class="font-display text-4xl md:text-5xl text-primary mb-6">Place Your Order</h1>
        <!-- Add your order form or content here -->
      </div>
    </section>
  `;
};

document.querySelector('#app').innerHTML = `
  ${renderNavigation()}
  <main>
    ${renderHero()}
    ${renderMenuSection()}
    ${renderFeatures()}
    ${renderCallToAction()}
    ${renderFooter()}
  </main>
`;