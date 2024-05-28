<script setup>
import { computed } from 'vue'
import { useSelectedLanguage } from '~/composables/useState.js'


const selectedLanguage = useSelectedLanguage()

const translations = computed(() => {
  const language = selectedLanguage.value
  return language === 'pl' ? {
    contact_title: "Kontakt",
    contact_desc: "Jestem tutaj, aby pomóc.",
    contact_heading: "Skontaktuj się z twórcą Nuxtship",
    contact_text: "Masz coś do powiedzenia? Jestem tutaj, aby pomóc. Wypełnij formularz lub wyślij e-mail.",
    address: "1010 Wiedeń, Austria",
    email: "jakobaichmayr@gmail.com"
  } : {
    contact_title: "Contact",
    contact_desc: "I am here to help.",
    contact_heading: "Contact Nuxtship Creator",
    contact_text: "Have something to say? I am here to help. Fill up the form or send an email.",
    address: "1010 Vienna, Austria",
    email: "jakobaichmayr@gmail.com"
  }
})

definePageMeta({
  layout: "landing",
})
</script>

<template>
  <LandingContainer>



    <LandingNavbar />
    <LandingSectionhead>
      <template  v-slot:title>{{ translations.contact_title }}</template>
      <template  v-slot:desc>{{ translations.contact_desc }}</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-white">
          {{ translations.contact_heading }}
        </h2>
        <p class="text-lg leading-relaxed text-white mt-3">
          {{ translations.contact_text }}
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-white">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>{{ translations.address }}</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-white">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              :href="'mailto:' + translations.email"
          >{{ translations.email }}</a
          >
          </div>
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+1 (234) 5678 999</a
            >
          </div> -->
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>

</template>
