export function renderFooter() {
  return `
    <footer class="bg-gray-900 text-gray-300 py-12 px-4">
      <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-display text-xl text-white mb-4">Fresh & Natural</h3>
          <p class="text-sm">Making healthy food accessible to everyone.</p>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-4">Menu</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Bowls</a></li>
            <li><a href="#" class="hover:text-white">Salads</a></li>
            <li><a href="#" class="hover:text-white">Drinks</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">About Us</a></li>
            <li><a href="#" class="hover:text-white">Careers</a></li>
            <li><a href="#" class="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-4">Connect</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Instagram</a></li>
            <li><a href="#" class="hover:text-white">Facebook</a></li>
            <li><a href="#" class="hover:text-white">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}