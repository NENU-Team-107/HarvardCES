<script setup lang="ts">
const emit = defineEmits(['languageChanged'])
const isMobile = ref(false)

const { locales, locale, setLocaleCookie } = useI18n()

// 检测是否为移动设备
onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768 // md breakpoint
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

// 在组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const localesOptions = locales.value.map((locale) => {
  if (locale.name != undefined) {
    return {
      code: locale.code,
      name: locale.name,
      label: locale.name
    }
  } else {
    return {
      code: locale.code,
      name: locale.name,
      label: locale.code
    }
  }
})

function changeLanguage(item: any) {
  locale.value = item.code
  setLocaleCookie(locale.value)
  // 只在移动端时发出事件
  if (isMobile.value) {
    emit('languageChanged')
  }
}

function checkMobile(this: Window, ev: UIEvent) {
  throw new Error('Function not implemented.');
}
</script>

<template>
  <UDropdown :items="[localesOptions]" :mode="isMobile ? 'click' : 'hover'"
    :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start', offsetDistance: 20 }">
    <UButton icon="i-heroicons:language-16-solid" color="black" variant="ghost" aria-label="Theme" />
    <template #item="{ item }">
      <div class="truncate text-left w-full" :class="{ 'text-primary': locale === item.code }"
        @click="changeLanguage(item)">
        {{ item.name }}
      </div>
    </template>
  </UDropdown>
</template>

<style scoped>
.active {
  color: var(--primary);
}
</style>