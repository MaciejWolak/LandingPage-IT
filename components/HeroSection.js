const HeroSection = {
  emits: ["scroll-to-contact"],
  data() {
    return {
      particles: Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
      })),
    };
  },
  template: `
    <section id="home" class="relative pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 min-h-screen flex items-center overflow-hidden">
      <!-- Animated Background Particles -->
      <div class="absolute inset-0">
        <div v-for="particle in particles" :key="particle.id" 
             class="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
             :style="{
               left: particle.x + '%',
               top: particle.y + '%',
               animationDelay: Math.random() * 2 + 's',
               animationDuration: particle.duration + 's'
             }">
        </div>
      </div>
      
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Dostępni dla nowych projektów
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span class="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Rozwijamy Twój
            </span>
            <br>
            <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Biznes
            </span>
            <br>
            <span class="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              z Pomocą Technologii
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Jesteśmy zespołem ekspertów IT, którzy pomagają firmom w 
            <span class="text-blue-300 font-semibold">transformacji cyfrowej</span>. 
            Tworzymy nowoczesne rozwiązania, które zwiększają efektywność i konkurencyjność.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button @click="$emit('scroll-to-contact')" 
                    class="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-blue-400/30">
              <span class="relative z-10 flex items-center space-x-2">
                <span>🚀</span>
                <span>Rozpocznij Projekt</span>
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button class="group px-8 py-4 border-2 border-blue-400/50 text-blue-200 text-lg font-semibold rounded-2xl hover:bg-blue-500/10 hover:border-blue-300 transition-all duration-300 backdrop-blur-sm">
              <span class="flex items-center space-x-2">
                <span>📂</span>
                <span>Zobacz Portfolio</span>
                <svg class="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </span>
            </button>
          </div>
          
          <!-- Stats Section -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div class="text-blue-200/70 text-sm">Projektów</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div class="text-blue-200/70 text-sm">Klientów</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                6
              </div>
              <div class="text-blue-200/70 text-sm">Lat</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div class="text-blue-200/70 text-sm">Wsparcie</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="flex flex-col items-center text-blue-200/60">
          <span class="text-sm mb-2">Przewiń w dół</span>
          <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  `,
};
