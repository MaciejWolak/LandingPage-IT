/**
 * @typedef {Object} TeamMember
 * @property {string} name
 * @property {string} position
 * @property {string} image
 * @property {string} description
 * @property {string} gradient
 * @property {string[]} skills
 */

/**
 * @typedef {Object} TeamSectionData
 * @property {TeamMember[]} team
 */

// Gradient constants (TypeScript enum converted to object)
const GradientType = {
  PINK: "from-pink-500 to-rose-500",
  BLUE: "from-blue-500 to-cyan-500",
  PURPLE: "from-purple-500 to-pink-500",
  GREEN: "from-green-500 to-teal-500",
};

// Position constants
const POSITIONS = {
  CEO: "CEO & Founder",
  LEAD_DEV: "Lead Developer",
  UX_DESIGNER: "UX/UI Designer",
  DEVOPS: "DevOps Engineer",
};

const TeamSection = {
  /**
   * @returns {TeamSectionData}
   */
  data() {
    return {
      team: [
        {
          name: "Anna Kowalska",
          position: POSITIONS.CEO,
          image: "👩‍💼",
          description:
            "Ekspert w zarządzaniu projektami IT z 10-letnim doświadczeniem.",
          gradient: GradientType.PINK,
          skills: ["Zarządzanie", "Strategia", "Leadership"],
        },
        {
          name: "Marcin Nowak",
          position: POSITIONS.LEAD_DEV,
          image: "👨‍💻",
          description:
            "Specjalista Full-Stack z pasją do nowoczesnych technologii.",
          gradient: GradientType.BLUE,
          skills: ["Vue.js", "Node.js", "Python"],
        },
        {
          name: "Katarzyna Wiśniewska",
          position: POSITIONS.UX_DESIGNER,
          image: "👩‍🎨",
          description:
            "Tworzy intuicyjne interfejsy skupione na doświadczeniu użytkownika.",
          gradient: GradientType.PURPLE,
          skills: ["Figma", "Prototyping", "Research"],
        },
        {
          name: "Piotr Zieliński",
          position: POSITIONS.DEVOPS,
          image: "👨‍🔧",
          description: "Ekspert w automatyzacji i infrastrukturze chmurowej.",
          gradient: GradientType.GREEN,
          skills: ["AWS", "Docker", "Kubernetes"],
        },
      ],
    };
  },

  methods: {
    /**
     * @param {number} index
     * @returns {string}
     */
    getAnimationDelay(index) {
      return `${index * 150}ms`;
    },

    /**
     * @param {TeamMember} member
     * @returns {string}
     */
    getMemberGradientClass(member) {
      return `bg-gradient-to-br ${member.gradient}`;
    },

    /**
     * @param {TeamMember} member
     * @returns {void}
     */
    handleMemberClick(member) {
      console.log(`Clicked on ${member.name} - ${member.position}`);
    },

    /**
     * @returns {string}
     */
    getSkillBadgeClass() {
      return "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium";
    },
  },

  computed: {
    /**
     * @returns {number}
     */
    teamCount() {
      return this.team.length;
    },

    /**
     * @returns {string[]}
     */
    availablePositions() {
      return this.team.map((member) => member.position);
    },
  },

  template: `
    <section id="team" class="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Nasz Dream Team ({{ teamCount }} członków)
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent">
              Poznaj Ekspertów
            </span>
            <br>
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Za Twoim Sukcesem
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nasz zespół to połączenie doświadczenia, kreatywności i pasji do technologii. 
            <span class="text-purple-600 font-semibold">Każdy członek</span> wnosi unikalne umiejętności.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(member, index) in team" :key="member.name" 
               class="group relative cursor-pointer"
               :style="{ animationDelay: getAnimationDelay(index) }"
               @click="handleMemberClick(member)">
            
            <!-- Card Container -->
            <div class="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 border border-gray-100 overflow-hidden">
              
              <!-- Background Gradient -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                   :class="getMemberGradientClass(member)"></div>
              
              <!-- Avatar -->
              <div class="relative mb-6">
                <div class="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                     :class="getMemberGradientClass(member)">
                  <span class="filter drop-shadow-sm">{{ member.image }}</span>
                </div>
                
                <!-- Status Indicator -->
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <!-- Content -->
              <div class="text-center space-y-3">
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {{ member.name }}
                </h3>
                
                <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white"
                     :class="getMemberGradientClass(member)">
                  {{ member.position }}
                </div>
                
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ member.description }}
                </p>
                
                <!-- Skills -->
                <div class="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div class="flex flex-wrap justify-center gap-2 mt-4">
                    <span v-for="skill in member.skills" :key="skill"
                          :class="getSkillBadgeClass()">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Hover Effect Border -->
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-3xl transition-all duration-500"></div>
              
              <!-- Floating Elements -->
              <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="w-8 h-8 rounded-full opacity-20"
                     :class="getMemberGradientClass(member)"></div>
              </div>
            </div>
            
            <!-- Social Links (Hidden by default) -->
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500">
              <div class="flex space-x-2">
                <button class="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                        @click.stop="handleMemberClick(member)">
                  💼
                </button>
                <button class="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                        @click.stop="handleMemberClick(member)">
                  📧
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Section -->
        <div class="text-center mt-20">
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Dołącz do naszego zespołu!</h3>
            <p class="text-gray-600 mb-6">Szukamy utalentowanych programistów i designerów, którzy chcą tworzyć przyszłość technologii.</p>
            <button class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
              <span class="mr-2">🚀</span>
              <span>Zobacz oferty pracy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
};
