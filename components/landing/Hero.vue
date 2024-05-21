<template>
  <main class="grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-1 sm:grid-rows-3 place-items-center pt-16 pb-8 md:pt-8" >
    <div class="lg:order-1 lg:row-start-1 lg:row-end-2 order-1">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-white	">
        Jędrzej Markiewicz
      </h1>
    </div>
    <div class=" lg:order-2 md:block lg:row-start-1 lg:row-end-3 order-3">
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

    <div class="lg:order-3 lg:row-start-1 lg:row-end-3 order-2">

      <p class="text-3xl mt-4 text-slate-600 max-w-xl text-white	">
        Tłumacz przysięgły
        języka angielskiego
      </p>
      <p class="text-sm mt-4 text-slate-600 max-w-xl">

      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >Więcej o mnie</LandingLink
        >
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>