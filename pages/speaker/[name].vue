<script setup lang="ts">
import Details from '~/components/speakers/Details.vue';
import type { Speaker, SpeakerBio } from '~/lib/model.ts';

// const speaker = defineProps<{
//   speaker: Speaker,
// }>().speaker;


const speaker = ref<Speaker>({
  name: 'Miss. Anny Chan',
  kind: 'Guest of Honour',
  photo: '/img/speakers/anny-chan.png',
  bio: {
    details: {
      description: 'Board Member\nHarvard China Education Symposium\nDirector of External Affairs of Joint Symposium on Emerging Technologies and Future Talent',
      title: 'Teaching Fellow, Harvard University'
    }
  } as SpeakerBio,
  activateDate: new Date(),
});

</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 y-5 pt-24">
    <Details :speaker="speaker" />
  </div>
</template>