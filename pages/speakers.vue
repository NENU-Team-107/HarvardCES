<script setup lang="ts">
import Details from '~/components/speakers/Details.vue';
import { speakers } from '~/lib/placeholder';

const navMenu = ref([
  {
    label: "Invite Speakers",
    content: "invite",
  },
  {
    label: "Guest of Honor",
    content: "honor",
  },
  {
    label: "Keynote Speakers",
    content: "keynote",
  },
  {
    label: "Track Workshop Chair",
    content: "track",
  },
  {
    label: "Organizing Committee",
    content: "organizing",
  }
])

const kindSpeakers = ref(speakers.filter(speaker => speaker.kind === 'Invite Speakers'))

const handleClick = (index: number) => {
  let item = navMenu.value[index]
  console.log(item)
  kindSpeakers.value = speakers.filter(speaker => speaker.kind === item.label)
}

</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5">
    <NuxtPage />
    <UTabs :items="navMenu" orientation="vertical"
      :ui="{ wrapper: 'flex gap-4 px-10', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5' } } }"
      class="bg-white/80 w-full h-full min-h-screen" @change="handleClick">
      <template #item={item}>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="speaker in kindSpeakers">
            <Details :speaker="speaker" class="mx-10 my-5" />
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>