const NavComponent = {
  props: ["isMobileMenuOpen"],
  emits: ["toggle-menu"],
  template: `
    <nav class="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-lg shadow-2xl fixed w-full z-50 border-b border-blue-500/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <!-- Logo Section -->
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-lg">T</span>
              </div>
              <div class="flex flex-col">
                <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TechSolutions
                </span>
                <span class="text-xs text-blue-300 tracking-wider">INNOVATION FIRST</span>
              </div>
            </div>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="#home" class="relative px-4 py-2 text-blue-100 hover:text-white transition-all duration-300 group">
              <span class="relative z-10">Strona główna</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
            <a href="#services" class="relative px-4 py-2 text-blue-100 hover:text-white transition-all duration-300 group">
              <span class="relative z-10">Usługi</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
            <a href="#about" class="relative px-4 py-2 text-blue-100 hover:text-white transition-all duration-300 group">
              <span class="relative z-10">O nas</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
            <a href="#team" class="relative px-4 py-2 text-blue-100 hover:text-white transition-all duration-300 group">
              <span class="relative z-10">Zespół</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
            <a href="#contact" class="relative px-4 py-2 text-blue-100 hover:text-white transition-all duration-300 group">
              <span class="relative z-10">Kontakt</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
            
            <!-- CTA Button -->
            <div class="ml-6">
              <button class="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/30">
                <span class="relative z-10 flex items-center space-x-2">
                  <span>💬</span>
                  <span>Bezpłatna konsultacja</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button @click="$emit('toggle-menu')" 
                    class="p-2 text-blue-200 hover:text-white hover:bg-blue-800/30 rounded-lg transition-all duration-300">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-b from-slate-900 to-blue-900 border-t border-blue-500/20 shadow-2xl">
          <a href="#home" class="block px-4 py-3 text-blue-100 hover:text-white hover:bg-blue-800/30 rounded-lg transition-all duration-300 transform hover:translate-x-2">
            <span class="flex items-center space-x-3">
              <span>🏠</span>
              <span>Strona główna</span>
            </span>
          </a>
          <a href="#services" class="block px-4 py-3 text-blue-100 hover:text-white hover:bg-blue-800/30 rounded-lg transition-all duration-300 transform hover:translate-x-2">
            <span class="flex items-center space-x-3">
              <span>⚙️</span>
              <span>Usługi</span>
            </span>
          </a>
          <a href="#about" class="block px-4 py-3 text-blue-100 hover:text-white hover:bg-blue-800/30 rounded-lg transition-all duration-300 transform hover:translate-x-2">
            <span class="flex items-center space-x-3">
              <span>📋</span>
              <span>O nas</span>
            </span>
          </a>
          <a href="#team" class="block px-4 py-3 text-blue-100 hover:text-white hover:bg-blue-800/30 rounded-lg transition-all duration-300 transform hover:translate-x-2">
            <span class="flex items-center space-x-3">
              <span>👥</span>
              <span>Zespół</span>
            </span>
          </a>
          <a href="#contact" class="block px-4 py-3 text-blue-100 hover:text-white hover:bg-blue-800/30 rounded-lg transition-all duration-300 transform hover:translate-x-2">
            <span class="flex items-center space-x-3">
              <span>📞</span>
              <span>Kontakt</span>
            </span>
          </a>
          
          <!-- Mobile CTA Button -->
          <div class="pt-4 border-t border-blue-500/20">
            <button class="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg">
              <span class="flex items-center justify-center space-x-2">
                <span>💬</span>
                <span>Bezpłatna konsultacja</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
};
