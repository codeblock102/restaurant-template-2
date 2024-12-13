export function setupMobileMenu() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      setTimeout(() => {
        mobileMenu.classList.toggle('opacity-0');
        mobileMenu.classList.toggle('scale-95');
      }, 10);
    });
  }
}

export function initializeNavigation() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMobileMenu);
  } else {
    setupMobileMenu();
  }
}