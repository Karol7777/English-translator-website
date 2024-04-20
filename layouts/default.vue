<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold"> Strona główna </NuxtLink>
        <ul class="flex gap-4">
          <li> <NuxtLink to="/">Strona główna</NuxtLink> </li>
          <li> <NuxtLink to="/about">O mnie</NuxtLink> </li>
          <li> <NuxtLink to="/offer" >Oferta</NuxtLink> </li>
          <li> <NuxtLink to="/references" >Referencje</NuxtLink> </li>
          <li> <NuxtLink to="/contact" >Kontakt</NuxtLink> </li>
        </ul>
      </nav>
    </header>
  </div>
  <!-- output the page content -->
  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>
<script setup lang="ts">
</script>