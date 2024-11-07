<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const Introduction = computed(() => {
  return t("Symposium.Details").replace(/\n/g, '<br>')
})

const navMenu = computed(() => {
  return [
    {
      label: t("Symposium Introduction"),
      content: "about",
    },
    {
      label: t("Symposium Location"),
      content: "location",
    },
    {
      label: t("Symposium Time"),
      content: "time",
    }
  ]
})

// const handleClick = (index: number) => {
//   let item = navMenu.value[index]
//   console.log(item)
//   kindSpeakers.value = speakers.filter(speaker => speaker.kind === item.label)
// }
</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5">
    <NuxtPage />
    <UTabs :items="navMenu" orientation="vertical"
      :ui="{ wrapper: 'flex gap-4 px-10', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5' } } }"
      class="bg-white/80 w-full h-full min-h-screen">
      <template #item>
        <div class="min-h-full flex flex-col px-20 py-10 bg-white/80">
          <h1 class="text-center font-bold text-2xl py-6">{{ $t("About") }}</h1>
          <div class="flex justify-center items-center w-full flex-1">
            <div v-html="Introduction" />
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>
