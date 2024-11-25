import { Head } from './.nuxt/components.d';
import { currentLocaleCodes, currentLocales } from "./config/i18n";
// import font from 'vite-plugin-font';

export default defineNuxtConfig({
  app: {
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  build: {
    transpile: ['sharp']
  },
  vite: {
    // plugins: [font.vite({})],
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@vesp/nuxt-fontawesome",
    'radix-vue/nuxt'
  ],
  typescript: { typeCheck: true },
  tailwindcss: {
    exposeConfig: true,
  },
  i18n: {
    compilation: {
      strictMessage: false,
    },
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
        'arrow-right', 'xmark', 'arrow-left', 'angle-up', 'angle-down', 'fa-c', 'fa-h', 'fa-e', 'fa-s', 'fa-k', 'fa-d', 'fa-u', 'fa-globe'
      ]
    }
  },
  // dayjs: {
  //   locales: ["en", "zh-cn", "zh-hk"],
  //   plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat'],
  //   defaultLocale: 'en'
  // }
});