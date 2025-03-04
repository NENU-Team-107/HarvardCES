<script lang="ts" setup>
import SpeakingIntro from '~/components/speakers/SpeakingIntro.vue';
import type { SpeakingInfo } from '~/lib/model';
const speakingList = ref<Map<string, SpeakingInfo[]>>(new Map<string, SpeakingInfo[]>());
const getSpeakingList = async () => {
  const resp = await $fetch('/api/speaker/listSpeakingByQuery', {
    method: 'GET',
    query: {
      kind: 'Keynote Speakers'
    }
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    speakingList.value.set('Keynote Speakers', data);
    const resp2 = await $fetch('/api/speaker/listSpeakingByQuery', {
      method: 'GET',
      query: {
        kind: 'Invited Speakers'
      }
    })
    const { status: status2, data: data2 } = resp2
    if (status2 === "Success" && data2 !== null) {
      speakingList.value.set('Invited Speakers', data2);
    }
  }
}
onMounted(() => {
  getSpeakingList()
    .then(async () => {
      for (let speaking of speakingList.value) {
        for (let speaker of speaking[1]) {
          const image: Blob = await $fetch('/api/speaker/photo', {
            method: 'GET',
            query: {
              photo: speaker.photo
            }
          })
          speakingList.value.set(speaking[0], speaking[1].map((s) => {
            return {
              ...s,
              photo: URL.createObjectURL(image)
            }
          }))
        }
      }
    });
})

</script>
<template>
  <div class="w-full max-w-6xl h-full min-h-screen mx-0 y-5 pt-24">
    <h1 class="text-4xl font-bold text-center py-6">Speaking</h1>
    <div class=" bg-white/80 w-full h-full mx-auto max-w-6xl flex flex-col justify-center items-center">
      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-24 bg-black"></div>
        <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
          Invited Speakers
        </h1>
        <div class="h-0.5 w-24 bg-black"></div>
      </div>
      <div v-for="speaking in speakingList.get('Invited Speakers')" class="flex w-3/4 justify-center items-center px-2">
        <SpeakingIntro :speaking="speaking" />
      </div>
    </div>
    <div class=" bg-white/80 w-full h-full mx-auto max-w-6xl flex flex-col justify-center items-center">
      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-24 bg-black"></div>
        <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
          Keynote Speakers
        </h1>
        <div class="h-0.5 w-24 bg-black"></div>
      </div>
      <div v-for="speaking in speakingList.get('Keynote Speakers')" class="flex w-3/4 justify-center items-center px-2">
        <SpeakingIntro :speaking="speaking" />
      </div>
    </div>
  </div>
</template>