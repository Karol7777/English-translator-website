<template>
  <div class="flex gap-2 flag-container items-center">
    <div class="flex">
      <img
          class="mx-2"
          src="~/assets/img/PL.svg"
          alt="Polish flag"
          loading="eager"
          format="avif"
          width="20"
          height="20"
      />
      <p class="text-white">PL</p>
    </div>
    <UToggle
        size="sm"
        color="myorange"
        v-model="selected"
        @change="toggleLanguage"
    />
    <div class="flex">
      <img
          class="mx-2"
          src="~/assets/img/US.svg"
          alt="English flag"
          loading="eager"
          format="avif"
          width="20"
          height="20"
      />
      <p class="text-white">EN</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSelectedLanguage } from '~/composables/useState.js'
const selected = ref(false)
const selectedLanguage = useSelectedLanguage()
const isPolish = ref(selectedLanguage.value === 'pl')

const toggleLanguage = () => {
  selectedLanguage.value = isPolish.value ? 'en' : 'pl'
  isPolish.value = !isPolish.value
}
</script>