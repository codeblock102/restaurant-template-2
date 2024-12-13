export function renderNavigation() {
  return `
    <nav class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div class=" mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <a href="/" class="font-display text-2xl text-primary">Fresh & Natural</a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="flex items-center md:hidden">
            <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <!-- Desktop menu -->
          <div class="hidden md:flex md:items-center md:space-x-12">
            <a href="/" class="nav-link">Home</a>
            <a href="#menu" class="nav-link">Menu</a>
            <a href="/order.html" class="btn-primary">Order Now</a>
          </div>
        </div>

        <!-- Mobile menu panel -->
        <div class="mobile-menu hidden md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="/" class="nav-link block px-3 py-2">Home</a>
            <a href="#menu" class="nav-link block px-3 py-2">Menu</a>
            <a href="#locations" class="nav-link block px-3 py-2">Locations</a>
            <a href="/order.html" class="btn-primary block text-center mt-4">Order Now</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}