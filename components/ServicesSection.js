const ServicesSection = {
  data() {
    return {
      services: [
        {
          icon: "💻",
          title: "Rozwój Aplikacji Web",
          description:
            "Tworzymy nowoczesne aplikacje webowe przy użyciu najnowszych technologii jak Vue.js, React i Node.js.",
          gradient: "from-blue-500 to-purple-600",
          borderColor: "border-blue-500/20",
        },
        {
          icon: "📱",
          title: "Aplikacje Mobile",
          description:
            "Projektujemy i rozwijamy aplikacje mobilne dla iOS i Android z naciskiem na doskonałe UX.",
          gradient: "from-purple-500 to-pink-600",
          borderColor: "border-purple-500/20",
        },
        {
          icon: "☁️",
          title: "Rozwiązania Cloud",
          description:
            "Migrujemy infrastrukturę do chmury i optymalizujemy koszty oraz wydajność systemów.",
          gradient: "from-cyan-500 to-blue-600",
          borderColor: "border-cyan-500/20",
        },
        {
          icon: "🛡️",
          title: "Cyberbezpieczeństwo",
          description:
            "Zabezpieczamy systemy przed zagrożeniami i przeprowadzamy audyty bezpieczeństwa.",
          gradient: "from-red-500 to-orange-600",
          borderColor: "border-red-500/20",
        },
        {
          icon: "🤖",
          title: "Automatyzacja Procesów",
          description:
            "Automatyzujemy powtarzalne zadania i optymalizujemy procesy biznesowe.",
          gradient: "from-green-500 to-teal-600",
          borderColor: "border-green-500/20",
        },
        {
          icon: "📊",
          title: "Analityka Danych",
          description:
            "Pomagamy w analizie danych i tworzeniu raportów biznesowych opartych na AI.",
          gradient: "from-indigo-500 to-purple-600",
          borderColor: "border-indigo-500/20",
        },
      ],
    };
  },
  template: `
    <section id="services" class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 50px 50px;"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Nasze Specjalności
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Usługi IT Nowej Generacji
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferujemy kompleksowe rozwiązania IT dostosowane do potrzeb Twojej firmy. 
            <span class="text-blue-600 font-semibold">Każdy projekt to unikalne wyzwanie</span>, 
            które realizujemy z pasją i precyzją.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="service.title" 
               class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
               :class="service.borderColor"
               :style="{ animationDelay: (index * 100) + 'ms' }">
            
            <!-- Gradient Background on Hover -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                 :class="'bg-gradient-to-br ' + service.gradient"></div>
            
            <!-- Icon Container -->
            <div class="relative mb-6">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                   :class="'bg-gradient-to-br ' + service.gradient">
                <span class="filter drop-shadow-sm">{{ service.icon }}</span>
              </div>
              
              <!-- Floating Badge -->
              <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   :class="'bg-gradient-to-br ' + service.gradient">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {{ service.title }}
            </h3>
            
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ service.description }}
            </p>
            
            <!-- CTA Link -->
            <div class="flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span class="mr-2">Dowiedz się więcej</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
            
            <!-- Corner Decoration -->
            <div class="absolute top-4 right-4 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <div class="w-full h-full rounded-full opacity-30"
                   :class="'bg-gradient-to-br ' + service.gradient"></div>
            </div>
          </div>
        </div>
        
        <!-- Bottom CTA -->
        <div class="text-center mt-16">
          <p class="text-gray-600 mb-6">Nie znalazłeś tego czego szukasz?</p>
          <button class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span class="mr-2">💬</span>
            <span>Skonsultuj swój projekt</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `,
};
