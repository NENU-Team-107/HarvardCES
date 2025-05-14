<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { locales, locale, setLocale } = useI18n()

// 获取当前语言名称
const currentLocaleName = computed(() => {
  return locales.value.find(l => l.code === locale.value)?.name
})

// 处理语言切换
const handleLanguageChange = async (langCode: string) => {
  await setLocale(langCode)
  // 可以在这里添加切换语言后的额外逻辑
}

// 语言选项配置
const languageItems = computed<DropdownMenuItem[][]>(() => {
  return [
    [
      {
        label: '当前语言',
        type: 'label',
        slot: 'current',
        disabled: true
      }
    ],
    [
      ...locales.value.map(lang => ({
        label: lang.name,
        // 使用 onClick 替代 click
        onClick: () => handleLanguageChange(lang.code),
        icon: lang.code === locale.value ? 'i-lucide-check' : undefined,
        class: lang.code === locale.value ? 'font-semibold' : ''
      }))
    ]
  ]
})
</script>

<template>
  <UDropdownMenu
:items="languageItems" :ui="{
    content: 'w-48',
    item: {
      active: 'text-primary-500 dark:text-primary-400',
      inactive: 'text-gray-700 dark:text-gray-200'
    }
  }" @select="(item: any) => item.onClick?.()">
    <UButton color="gray" variant="ghost" trailing-icon="i-heroicons-language-16-solid" />

    <!-- 自定义当前语言显示 -->
    <template #current>
      <div class="flex items-center gap-2 px-2 py-1.5">
        <UIcon name="i-heroicons-language-16-solid" class="w-5 h-5 text-gray-500" />
        <span class="text-sm font-medium">{{ currentLocaleName }}</span>
      </div>
    </template>
  </UDropdownMenu>
</template>