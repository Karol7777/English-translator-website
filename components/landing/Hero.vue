<script setup>
import {useSelectedLanguage} from "~/composables/useState.js";

const selectedLanguage = useSelectedLanguage();
</script>

<template>
  <main class="grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 px-4 place-items-center pt-16  md:pt-8 bg-[url('~/assets/img/tlo.png')] hero-container">
    <div class="lg:order-1 lg:row-start-1 lg:row-end-2 order-1">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-white">
        Jędrzej Markiewicz
      </h1>
    </div>
    <div class="lg:order-2 md:block lg:row-start-1 lg:row-end-3 order-3" >
      <img
          class=""
          src="~/assets/img/hero-img.png"
          alt="Starship starts the engine"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
    </div>
    <img
        class="strzalka-hero"
        src="~/assets/img/strzalka.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="35"
        height="35"
    />
    <div class="lg:order-3 lg:row-start-1 lg:row-end-3 order-2">
      <p class="text-3xl mt-4 text-slate-600 max-w-xl text-white font-semibold">
        {{ selectedLanguage === 'pl' ? 'Tłumacz przysięgły języka angielskiego' : 'Translator hero' }}
      </p>
      <p class="text-sm mt-4 text-slate-600 max-w-xl"></p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
            size="lg"
            class="custom-button"
            rel="noopener"
            href="https://github.com/Gr33nW33n/nuxtship-template"
            target="_blank"
        >{{ selectedLanguage === 'pl' ? 'Więcej o mnie' : 'More about' }}</LandingLink>
      </div>
    </div>
  </main>

</template>
<style>
.custom-button {
  background-color: #FF4900;
  color: white;
  border: 2px solid transparent;
  border-radius: 1.5rem;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #e84300;
}
.hero-container {
  position: relative;
}
.strzalka-hero{
  position: absolute;
  bottom: 0;
  animation: moveUpDown 1s linear infinite alternate;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
}
</style>

