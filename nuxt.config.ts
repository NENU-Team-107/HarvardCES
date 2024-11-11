import { currentLocaleCodes, currentLocales } from "./config/i18n";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  build: {
    transpile: ['sharp']
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@vesp/nuxt-fontawesome"
  ],
  typescript: { typeCheck: true },
  tailwindcss: {
    exposeConfig: true,
  },
  i18n: {
    strategy: "no_prefix",
    locales: currentLocales,
    langDir: "locales",
    defaultLocale: "en",
    vueI18n: "./config/i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
    experimental: {
      localeDetector: "./config/localeDetector.ts"
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fontawesome: {
    icons: {
      solid: [
        'arrow-right', 'xmark', 'arrow-left'
      ]
    }
  }
  // dayjs: {
  //   locales: ["en", "zh-cn", "zh-hk"],
  //   plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat'],
  //   defaultLocale: 'en'
  // }
});