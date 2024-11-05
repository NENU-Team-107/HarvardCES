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
    label: "Track Workshop Chair 0508-0510",
    content: "track",
  },
  {
    label: "Organizing Committee",
    content: "organizing",
  }
])

const kindSpeakers = ref(speakers)


</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 y-5">
    <UTabs :items="navMenu" orientation="vertical" :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }"
      class="bg-white/80 w-full h-full min-h-screen">
      <template #item>
        <div class="grid grid-cols-3 gap-4">
          <Details v-for="speaker in kindSpeakers" :speaker="speaker" />
        </div>
      </template>
    </UTabs>
  </div>
</template>