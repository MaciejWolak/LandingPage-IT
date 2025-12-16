const FooterComponent = {
  template: `
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">TechSolutions</h3>
            <p class="text-gray-400">
              Twój partner w transformacji cyfrowej. 
              Tworzymy przyszłość biznesu już dziś.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Usługi</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">Rozwój aplikacji</a></li>
              <li><a href="#" class="hover:text-white transition">Cloud Computing</a></li>
              <li><a href="#" class="hover:text-white transition">Cyberbezpieczeństwo</a></li>
              <li><a href="#" class="hover:text-white transition">Konsultacje IT</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Firma</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition">O nas</a></li>
              <li><a href="#" class="hover:text-white transition">Kariera</a></li>
              <li><a href="#" class="hover:text-white transition">Blog</a></li>
              <li><a href="#" class="hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Śledź nas</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition text-2xl">📘</a>
              <a href="#" class="text-gray-400 hover:text-white transition text-2xl">🐦</a>
              <a href="#" class="text-gray-400 hover:text-white transition text-2xl">💼</a>
              <a href="#" class="text-gray-400 hover:text-white transition text-2xl">📷</a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TechSolutions. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  `,
};
