const AboutSection = {
  data() {
    return {
      stats: [
        {
          number: "150+",
          label: "Zrealizowanych Projektów",
          icon: "🚀",
          color: "from-blue-500 to-cyan-500",
        },
        {
          number: "50+",
          label: "Zadowolonych Klientów",
          icon: "🤝",
          color: "from-purple-500 to-pink-500",
        },
        {
          number: "6",
          label: "Lat Doświadczenia",
          icon: "⭐",
          color: "from-yellow-500 to-orange-500",
        },
        {
          number: "24/7",
          label: "Wsparcie Techniczne",
          icon: "🛠️",
          color: "from-green-500 to-teal-500",
        },
      ],
      features: [
        "Doświadczony zespół ekspertów",
        "Najnowsze technologie i metodologie",
        "Terminowa realizacja projektów",
        "Konkurencyjne ceny",
        "Długoterminowe wsparcie",
      ],
    };
  },
  template: `
    <section id="about" class="py-24 bg-gradient-to-b from-slate-50 to-blue-50 relative overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Nasza Historia
              </div>
              
              <h2 class="text-4xl md:text-5xl font-bold mb-6">
                <span class="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Tworzymy Przyszłość
                </span>
                <br>
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Twojego Biznesu
                </span>
              </h2>
              
              <p class="text-lg text-gray-600 leading-relaxed mb-8">
                Od <span class="font-semibold text-blue-600">2018 roku</span> pomagamy firmom w całej Polsce w transformacji cyfrowej. 
                Nasza misja to tworzenie rozwiązań, które nie tylko rozwiązują problemy, 
                ale także <span class="font-semibold text-purple-600">otwierają nowe możliwości biznesowe</span>.
              </p>
            </div>
            
            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-6">
              <div v-for="(stat, index) in stats" :key="stat.label" 
                   class="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                   :style="{ animationDelay: (index * 100) + 'ms' }">
                <div class="flex justify-center mb-3">
                  <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300"
                       :class="'bg-gradient-to-br ' + stat.color">
                    {{ stat.icon }}
                  </div>
                </div>
                <div class="text-3xl font-bold mb-2"
                     :class="'bg-gradient-to-r ' + stat.color + ' bg-clip-text text-transparent'">
                  {{ stat.number }}
                </div>
                <div class="text-sm text-gray-600 font-medium">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Right Content -->
          <div class="space-y-8">
            <!-- Features Card -->
            <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <span class="text-2xl">✨</span>
                </div>
                <h3 class="text-2xl font-bold">Dlaczego TechSolutions?</h3>
              </div>
              
              <ul class="space-y-4">
                <li v-for="(feature, index) in features" :key="feature" 
                    class="flex items-center opacity-0 animate-slide-in"
                    :style="{ animationDelay: (index * 200 + 500) + 'ms', animationFillMode: 'forwards' }">
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-blue-100">{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Mission Statement -->
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">🎯</span>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-gray-900 mb-2">Nasza Misja</h4>
                  <p class="text-gray-600 leading-relaxed">
                    Wspieramy firmy w ich cyfrowej transformacji, dostarczając innowacyjne rozwiązania IT, 
                    które zwiększają efektywność, obniżają koszty i otwierają nowe możliwości rozwoju.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};
