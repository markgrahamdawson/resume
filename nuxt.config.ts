// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-light-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/vue-fontawsome'
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss'],

});
