<script lang="ts" setup>
import SpeakingIntro from '~/components/speakers/SpeakingIntro.vue';
import type { SpeakingInfo } from '~/lib/model';
const speakingList = ref<SpeakingInfo[]>([
  {
    name: 'Sample Speaker',
    photo: 'sample.jpg',
    title: 'Sample Title',
    inc: 'Sample Description',
    abstract: 'sample.com'
  } as SpeakingInfo
])
// const getSpeakingList = async () => {
// }
onMounted(() => {
  // getSpeakingList()
  //   .then(async () => {
  //     for (let speaking of speakingList.value) {
  //       const image: Blob = await $fetch('/api/speaker/photo', {
  //         method: 'GET',
  //         query: {
  //           photo: speaking.photo
  //         }
  //       })
  //       speaking.photo = window.URL.createObjectURL(image)
  //     }
  //   });
})

</script>
<template>
  <div class="w-full max-w-6xl h-full min-h-screen mx-0 y-5 pt-24">
    <h1 class="text-4xl font-bold text-center">Speaking</h1>
    <div v-for="speaking in speakingList">
      <div class="mt-10 w-full flex justify-center items-center">
        <SpeakingIntro :speaking="speaking" />
      </div>
    </div>
  </div>
</template>