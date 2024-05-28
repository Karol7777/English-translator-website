<template>
  <div class="grid lg:grid-cols-2 lg:gap-x-32 grid-cols-1 py-20 px-4 ">
    <div ref="demo" class="demo flex flex-col lg:order-1 text-white ">
      <div class="section-name py-5 orange font-semibold relative flex items-center">
        {{ selectedLanguage === 'pl' ? 'O mnie' : 'About me' }}
      </div>
      <p class="section-heading text-3xl py-5 font-bold">{{ selectedLanguage === 'pl' ? 'Tłumacz przysięgły języka angielskiego' : 'Certified English language translator' }}</p>
      <p class="section-text text-sm py-5 opacity-70">
        {{ selectedLanguage === 'pl' ? 'Tekst w języku polskim' : 'Text in English' }}
      </p>
      <div v-for="(item, index) in items" :key="index" class="py-5">
        <i :class="item.icon"></i>
        <p class="font-bold">{{ item.title }}</p>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div ref="additionalElement" class="animate-element additional-animation flex flex-col lg:order-2 justify-start mt-11 text-white">
      <p class="section-heading text-3xl py-10 font-bold">{{ selectedLanguage === 'pl' ? 'Masz pytania lub wątpliwości?' : 'Do you have any questions or concerns?' }}</p>
      <p class="section-text text-3xl text-sm opacity-70">
        {{ selectedLanguage === 'pl' ? 'Napisz do mnie.' : 'Contact me.' }}
      </p>
      <a href="" class="section-about-link flex py-5 items-center">
        <p class="about-link-text text-2xl orange font-semibold">jmarkiewicz@noam.com.pl</p>
        <img src="~/assets/img/arrow.svg" alt="Starship starts the engine" class="arrow px-5">
      </a>
    </div>
  </div>
</template>

<script setup>
import { useSelectedLanguage } from "~/composables/useState.js";


const selectedLanguage = useSelectedLanguage();

import { onMounted, ref } from 'vue';
const demo = ref(null);

const additionalElement = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-delay');

          }
          if (entry.target.classList.contains('additional-animation')) {
            entry.target.classList.add('additional-animate-delay');
          }
        });
      },
      {
        threshold: 0.2,
      }
  );

  if (demo.value) {
    observer.observe(demo.value);
  }

  if (additionalElement.value) {
    observer.observe(additionalElement.value);
  }
});


</script>

<style>
.additional-animation {
  /* Inne style dla dodatkowego elementu */
}

.additional-animation.animate-delay {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: additional-animate-delay;
}

@keyframes additional-animate-delay {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-delay {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.demo {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
}
.orange {
  color: #FF4900;
}

.section-name {
  position: relative;
}

.section-name::after {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background-color: #FF4900;
  margin-left: 10px;
}

/* Styl do animacji */
.arrow {
  transition: transform 0.3s ease;
}

.section-about-link:hover .arrow {
  transform: translateX(30px);
}
</style>
