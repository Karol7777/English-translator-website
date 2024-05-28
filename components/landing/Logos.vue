<template>
  <div class="py-24">
    <h2 class="text-center text-white text-3xl font-bold">{{ translations.check_references }}</h2>
    <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
      <img
          class="logo"
          src="~/assets/img/logo-ic.png"
          alt="Starship starts the engine"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
      <img
          class="logo"
          src="~/assets/img/logo-ic.png"
          alt="Starship starts the engine"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
      <img
          class="logo"
          src="~/assets/img/logo-ic.png"
          alt="Starship starts the engine"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
      <img
          class="logo"
          src="~/assets/img/logo-ic.png"
          alt="Starship starts the engine"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
    </div>
  </div>
</template>

<script setup>
import { useSelectedLanguage } from '~/composables/useState.js'
import { computed } from 'vue'

const selectedLanguage = useSelectedLanguage()

const translations = computed(() => {
  const language = selectedLanguage.value
  return language === 'pl' ? {
    check_references: 'Sprawdź referencje'
  } : {
    check_references: 'Check References'
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
