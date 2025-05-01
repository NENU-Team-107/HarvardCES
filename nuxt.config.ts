// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetAttributify, presetIcons } from 'unocss'

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
    '@unocss/nuxt',
  ],

  fonts: {
    providers: {
      google: false
    },
  },
  fontawesome: {
    icons: {
      solid: ['arrow-right', 'arrow-left', 'angle-right', 'angle-up', 'angle-down', 'globe', 'e', 'd', 'u', 'h', 'k', 'xmark', 'circle-right', 'circle', 'envelope',],
      regular: ['calendar'],
      brands: []
    }
  },
  unocss: {
    // 预设配置
    presets: [
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
        collections: {
          // 配置 Heroicons 集合
          hero: () => import('@iconify-json/heroicons').then(i => i.icons),
        }
      })
    ],
    // 可选：添加自定义规则或快捷方式
    shortcuts: [
      ['icon-btn', 'text-xl inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-blue-500']
    ]
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
        code: 'zh-CN',
        file: 'zh_Hans.json',
        label: '简体中文',
        name: '简体中文'
      },
      {
        code: 'zh-TW',
        file: 'zh_Hant.json',
        label: '繁體中文',
        name: '繁體中文'
      },
    ],
    defaultLocale: "zh-CN",
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
    fonts: true,
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})