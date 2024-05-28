<template>
  <footer class="grid lg:grid-cols-3 grid-cols-1 text-white px-4">
    <h2 class="footer-heading lg:order-1 text-left text-3xl font-bold">{{ translations.contact_invitation }}</h2>
    <div class="footer-links lg:order-2"></div>
    <div class="footer-info lg:order-3 flex flex-col">
      <ul class="flex flex-col lg:flex-col lg:gap-2">
        <li>
          <a href="#" class="flex lg:px-3 justify-left py-2 text-white text-3xl font-bold">
            {{ translations.contact }}
          </a>
        </li>
        <li>
          <a href="#" class="flex lg:px-3 justify-left py-2 text-white">
            <span class="font-semibold" style="color: #FF4900">jmarkiewicz</span>@noam.com.pl
          </a>
        </li>
        <li>
          <a href="#" class="flex lg:px-3 justify-left py-2 text-white">
            <img class="mr-5" src="~/assets/img/person-circle.svg" alt="Person icon"><p class="opacity-70">Jędrzej Markiewicz</p>
          </a>
        </li>
        <li>
          <a href="#" class="flex lg:px-3 justify-left py-2 text-white">
            <img class="mr-5" src="~/assets/img/phone-portrait.svg" alt="Phone icon"><p class="opacity-70">{{ translations.phone }} 605 041 555</p>
          </a>
        </li>
        <li>
          <a href="#" class="flex lg:px-3 justify-left py-2 text-white">
            <img class="mr-5" src="~/assets/img/home.svg" alt="Home icon"><p class="opacity-70">Warszawa</p>
          </a>
        </li>
        <li>
          <a href="#" class="flex lg:px-3 justify-left py-2 text-gray-600 hover:text-white">
            <img class="mr-5" src="~/assets/img/vector.svg" alt="Vector icon"><img src="~/assets/img/linkedin.svg" alt="LinkedIn icon">
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { useSelectedLanguage } from '~/composables/useState.js'
import { computed } from 'vue'

const selectedLanguage = useSelectedLanguage()

const translations = computed(() => {
  const language = selectedLanguage.value
  return language === 'pl' ? {
    contact_invitation: 'Zapraszam do kontaktu',
    contact: 'Kontakt',
    phone: 'tel.'
  } : {
    contact_invitation: 'Feel free to contact me',
    contact: 'Contact',
    phone: 'phone'
  }
})
</script>

<style>
.logo {
  max-width: 150px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.2);
}
</style>
