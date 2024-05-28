// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'black',
      },
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-mdi', "@nuxt/ui"  ],
});