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