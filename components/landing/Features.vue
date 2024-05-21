<script setup>
const features = [
  {
    title: "Bring Your Own Framework",
    description:
      "Build your site using Vue, web components, or just plain ol' HTML + JavaScript.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "100% Static HTML, No JS",
    description:
      "Nuxt renders your entire page to static HTML, removing all JavaScript from your final build by default.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "On-Demand Components",
    description:
      "Need some JS? Nuxt can automatically hydrate interactive components when they become visible on the page.  ",
    icon: "bx:bxs-data",
  },
  {
    title: "Broad Integration",
    description:
      "Nuxt supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
    icon: "bx:bxs-bot",
  },
  {
    title: "SEO Enabled",
    description:
      "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Community",
    description:
      "Nuxt is an open source project powered by hundreds of contributors making thousands of individual contributions.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="grid lg:grid-cols-2 lg:gap-x-32 grid-cols-1">
    <div class="flex flex-col	lg:order-1 text-white	" >
      <div class="section-name py-5">O mnie</div>
      <p class="section-heading text-3xl py-5">Tłumacz przysięgły
        języka angielskiego
      </p>
      <p class="section-text text-sm py-5">Jestem tłumaczem przysięgłym języka angielskiego.
        Kompetencje językowe zdobyłem w szkole średniej Richland
        High School w stanie Teksas w USA, a następnie na
        wydziale anglistyki Uniwersytetu Warszawskiego oraz
        w Wyższej Szkole Lingwistycznej w Częstochowie.
        Uprawnienia tłumacza przysięgłego uzyskałem w 2002 roku.
        Od tego czasu wykonuję tłumaczenia zwykłe i
        uwierzytelnione dla klientów indywidualnych
        oraz firm z polski i zagranicy.</p>
    </div>
    <div class="flex flex-col	lg:order-2 justify-center text-white	">
      <p class="section-heading text-3xl py-10">Masz pytania
        lub wątpliwości ?
      </p>
      <p class="section-text text-3xl text-sm ">Napisz do mnie.</p>
      <a href="" class="section-about-link flex py-5">
        <p class="about-link-text text-2xl">jmarkiewicz@noam.com.pl</p>
        <img src="~/assets/img/arrow.svg"
             alt="Starship starts the engine"
             class="arrow px-5">
      </a>
    </div>
  </div>
</template>
