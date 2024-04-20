// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/index.css"],
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/google-fonts'],
  app: {
    head: {
      title: 'English translator',
      meta: [
        {name: 'description', content: 'English translator'},
      ],
      link: [
        {rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})
