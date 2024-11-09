<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const longTtile = computed(() => {
  return t("Symposium.Title Long").replace(/\n/g, '<br>')

})

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

const LocationImage = ref<string>('')

const handleChange = async (index: number) => {
  if (index === 1) {
    const data: Blob = await $fetch('/api/about/localtion')
    LocationImage.value = window.URL.createObjectURL(data)
  }
}


</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <NuxtPage />
    <UTabs :items="navMenu" orientation="vertical"
      :ui="{ wrapper: 'flex gap-4 px-10', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5' } } }"
      class="bg-white/80 w-full h-full min-h-screen" @change="handleChange">
      <template #item="{ item }">
        <div class="min-h-full flex flex-col px-20 py-10 bg-white/80 justify-center items-center h-full w-full">
          <h1 v-if="item.content === 'about'" class="text-center font-bold text-2xl py-6">{{ $t("Symposium.Title") }}
          </h1>
          <h1 v-else-if="item.content === 'location'" class="text-center font-bold text-2xl py-6">
            {{ $t("Symposium Location") }}
          </h1>
          <h1 v-else-if="item.content === 'time'" class="text-center font-bold text-2xl py-6">{{ $t("Symposium Time") }}
          </h1>
          <div class="flex justify-center items-center w-full flex-1">
            <div v-if="item.content === 'about'" v-html="Introduction" />
            <div v-else-if="item.content === 'location'">
              <NuxtImg :src="LocationImage" loading="lazy" />
              <div class="items-center justify-center text-center text-lg mt-5">
                <span>{{ $t("Host.Details.Location") }}</span>
              </div>
            </div>
            <div v-else>
              <!-- TODO -->
            </div>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>
