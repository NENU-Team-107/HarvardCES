<script setup lang="ts">
// import Details from '~/components/speakers/Details.vue';
import Interoduction from '~/components/speakers/Introduction.vue';
import type { Speaker } from '~/lib/model';

const { t } = useI18n()

const navMenu = computed(() => {
  return [
    {
      label: t("Invite Speakers"),
      content: "Invite Speakers",
    },
    {
      label: t("Guest of Honor"),
      content: "Guest of Honor",
    },
    {
      label: t("Keynote Speakers"),
      content: "Keynote Speakers",
    },
    {
      label: t("Track Workshop Chair"),
      content: "Track Workshop Chair",
    },
    {
      label: t("Organizing Committee"),
      content: "Organizing Committee",
    }
  ]
})

const kindSpeakers = ref()
const speakersList = ref<Speaker[]>([])


const fetchSpeakers = async () => {
  const resp = await $fetch('/api/speaker/listAll', {
    method: 'GET',
    query: {
      kind: 'Keynote Speakers'
    }
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    for (const speaker of data) {
      const image: Blob = await $fetch('/api/speaker/photo', {
        method: 'GET',
        query: {
          photo: speaker.photo
        }
      })
      speaker.photo = window.URL.createObjectURL(image)
    }
    speakersList.value = data;
  }
}

fetchSpeakers()

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