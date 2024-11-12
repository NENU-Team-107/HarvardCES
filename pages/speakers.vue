<script setup lang="ts">
import Interoduction from '~/components/speakers/Introduction.vue';
import type { Speaker } from '~/lib/model';

const { t } = useI18n()

const navMenu = computed(() => {
  return [
    {
      label: t("Organizing Committee"),
      content: "Organizing Committee",
    },
    {
      label: t("Keynote Speakers"),
      content: "Keynote Speakers",
    },
    {
      label: t("Invite Speakers"),
      content: "Invite Speakers",
    },
    {
      label: t("Guest of Honor"),
      content: "Guest of Honor",
    },

    {
      label: t("Track Workshop Chair"),
      content: "Track Workshop Chair",
    },

  ]
})

const kindSpeakers = ref()
const speakersList = ref<Speaker[]>([])

const blobMap: Map<string, string> = new Map()


const fetchSpeakers = async () => {
  const resp = await $fetch('/api/speaker/listAll', {
    method: 'GET',
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    for (const speaker of data) {
      if (blobMap.has(speaker.photo)) {
        speaker.photo = blobMap.get(speaker.photo) as string
      } else {
        const image: Blob = await $fetch('/api/speaker/photo', {
          method: 'GET',
          query: {
            photo: speaker.photo
          }
        })
        const url = window.URL.createObjectURL(image)
        blobMap.set(speaker.photo, url)
        speaker.photo = url
      }
    }
    speakersList.value = data;
  }
}

onMounted(() => {
  fetchSpeakers().then(() => {
    kindSpeakers.value = speakersList.value.filter(speaker => speaker.kind === "Organizing Committee")
  })
})

const handleClick = (index: number) => {
  let item = navMenu.value[index]
  kindSpeakers.value = speakersList.value.filter(speaker => speaker.kind === item.content)
}

</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <NuxtPage />
    <UTabs :items="navMenu" orientation="vertical"
      :ui="{ wrapper: 'flex gap-4 px-10', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5' } } }"
      class="bg-white/80 w-full h-full min-h-screen" @change="handleClick">
      <template #item>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="speaker in kindSpeakers">
            <Interoduction :speakers="speaker" class="mx-10 my-5" />
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>