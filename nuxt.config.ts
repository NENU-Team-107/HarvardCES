// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],
  typescript: { typeCheck: true },
  tailwindcss: {
    exposeConfig: true,
  },
})
