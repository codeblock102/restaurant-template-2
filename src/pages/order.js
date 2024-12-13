import { initializeNavigation } from '../utils/navigation.js';
import { renderNavigation } from '../components/Navigation';

document.querySelector('#app').innerHTML = `
  ${renderNavigation()}
`;

initializeNavigation();