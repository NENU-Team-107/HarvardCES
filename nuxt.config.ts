import { currentLocaleCodes, currentLocales } from "./config/i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  typescript: { typeCheck: true },
  tailwindcss: {
    exposeConfig: true,
  },
  i18n: {
    strategy: "no_prefix",
    locales: currentLocales,
    langDir: 'locales',
    defaultLocale: "en",
    vueI18n: "./config/i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  // dayjs: {
  //   locales: ["en", "zh-cn", "zh-hk"],
  //   plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat'],
  //   defaultLocale: 'en'
  // }
})