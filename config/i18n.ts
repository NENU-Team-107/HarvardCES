const locales = [
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
]

export const currentLocales = locales
export const currentLocaleCodes = locales.map(l => l.code)