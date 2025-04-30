// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/i18n',
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/tailwindcss',
  ],

  fonts: {
    providers: {
      google: false
    },
  },
  fontawesome: {
    icons: {
      solid: ['arrow-right', 'arrow-left', 'angle-right', 'angle-up', 'angle-down', 'globe', 'e', 'd', 'u', 'h', 'k', 'xmark', 'circle-right', 'circle', 'envelope',],
      regular: [],
      brands: []
    }
  },
  i18n: {
    compilation: {
      strictMessage: false,
    },
    bundle: {
      optimizeTranslationDirective: false // 显式禁用
    },
    strategy: "no_prefix",
    locales: [
      {
        code: 'en',
        label: 'English',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'zh-cn',
        file: 'zh_Hans.json',
        label: '简体中文',
        name: '简体中文'
      },
      {
        code: 'zh-hk',
        file: 'zh_Hant.json',
        label: '繁體中文',
        name: '繁體中文'
      },
    ],
    defaultLocale: "zh-cn",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: 'root',
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
  },

  css: ['~/assets/css/main.css'],

  ui: {
    fonts: false
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})