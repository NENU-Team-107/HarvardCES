// types/unocss.d.ts
import type { UnocssNuxtOptions } from '@unocss/nuxt'

declare module 'nuxt/schema' {
    interface NuxtConfig {
        unocss?: UnocssNuxtOptions
    }
}