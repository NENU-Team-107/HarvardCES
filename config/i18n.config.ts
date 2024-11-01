import en from '~/locales/en.json'
import zh_Hans from '~/locales/zh_Hans.json'
import zh_Hant from '~/locales/zh_Hant.json'
import { currentLocales } from './i18n'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    availableLocales: currentLocales.map(l => l.code),
    messages: {
        en: en,
        'zh-cn': zh_Hans,
        'zh-hk': zh_Hant
    }
}))
