<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const emit = defineEmits(['languageChanged'])
const isMobile = ref(false)

const { locales, locale, setLocaleCookie } = useI18n()

// 正确的 checkMobile 实现
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768 // md breakpoint
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const localesOptions = locales.value.map((locale) => {
  return {
    code: locale.code,
    name: locale.name ?? locale.code, // 如果 name 为 undefined，使用 code
    label: locale.name ?? locale.code
  }
}) as DropdownMenuItem[]

function changeLanguage(item: { code: string; name: string; label: string }) {
  locale.value = item.code
  setLocaleCookie(locale.value)
  if (isMobile.value) {
    emit('languageChanged')
  }
}
</script>

<template>
  <UDropdownMenu
:items="localesOptions" :mode="isMobile ? 'click' : 'hover'"
    :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start', offsetDistance: 20 }">
    <UButton
icon="i-heroicons:language-16-solid" color="black" variant="ghost" aria-label="Theme"
      class="cursor-pointer" />
    <template #item="{ item }">
      <div
class="truncate text-left w-full cursor-pointer" :class="{ 'text-primary': locale === item.code }"
        @click="changeLanguage(item)">
        {{ item.name }}
      </div>
    </template>
  </UDropdownMenu>
</template>

<style scoped>
.active {
  color: var(--primary);
}

.truncate {
  word-break: break-all;
  text-overflow: unset;
  white-space: inherit;
}
</style>