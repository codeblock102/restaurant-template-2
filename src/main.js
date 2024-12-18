import { renderHomePage } from './home';
import { renderOrderPage } from './order';
import { initializeNavigation } from './utils/navigation';

// Route handler function
function handleRoute() {
  const path = window.location.pathname;
  
  if (path === '/order') {
    renderOrderPage();
  } else {
    renderHomePage();
  }
  
  initializeNavigation();
}

// Handle initial load
handleRoute();

// Handle browser back/forward buttons
window.addEventListener('popstate', handleRoute); 