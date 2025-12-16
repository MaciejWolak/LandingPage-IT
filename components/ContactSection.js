const ContactSection = {
  data() {
    return {
      form: {
        name: "",
        email: "",
        company: "",
        message: "",
      },
      isSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      // Simulacja wysłania formularza
      this.isSubmitted = true;
      setTimeout(() => {
        this.isSubmitted = false;
        this.form = { name: "", email: "", company: "", message: "" };
      }, 3000);
    },
  },
  template: `
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Skontaktuj się z nami</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Gotowy na rozpoczęcie projektu? Napisz do nas!
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Informacje kontaktowe</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="text-2xl mr-4">📧</span>
                <div>
                  <p class="font-semibold">Email</p>
                  <p class="text-gray-600">kontakt@techsolutions.pl</p>
                </div>
              </div>
              <div class="flex items-center">
                <span class="text-2xl mr-4">📞</span>
                <div>
                  <p class="font-semibold">Telefon</p>
                  <p class="text-gray-600">+48 123 456 789</p>
                </div>
              </div>
              <div class="flex items-center">
                <span class="text-2xl mr-4">📍</span>
                <div>
                  <p class="font-semibold">Adres</p>
                  <p class="text-gray-600">ul. Technologiczna 1<br>00-001 Warszawa</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div v-if="isSubmitted" class="text-center py-8">
              <div class="text-6xl mb-4">✅</div>
              <h3 class="text-2xl font-bold text-green-600 mb-2">Dziękujemy!</h3>
              <p class="text-gray-600">Wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.</p>
            </div>
            
            <form v-else @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Imię i nazwisko</label>
                  <input v-model="form.name" type="text" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                </div>
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Email</label>
                  <input v-model="form.email" type="email" required
                         class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-semibold mb-2">Firma</label>
                <input v-model="form.company" type="text"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 font-semibold mb-2">Wiadomość</label>
                <textarea v-model="form.message" rows="4" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="Opisz swój projekt..."></textarea>
              </div>
              <button type="submit" 
                      class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition duration-300">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
};
