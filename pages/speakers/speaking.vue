<script lang="ts" setup>
import Loading from '~/components/common/Loading.vue';
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
  const { status, data } = resp as { status: string, data: SpeakingInfo[] }
  if (status === "Success" && data !== null) {
    speakingList.value.set('Keynote Speakers', data);
    const resp2 = await $fetch('/api/speaker/listSpeakingByQuery', {
      method: 'GET',
      query: {
        kind: 'Invited Speakers'
      }
    })
    const { status: status2, data: data2 } = resp2 as { status: string, data: SpeakingInfo[] }
    if (status2 === "Success" && data2 !== null) {
      speakingList.value.set('Invited Speakers', data2);
    }
  }
}

const pending = ref(true)
onMounted(() => {
  getSpeakingList()
    .then(async () => {
      for (let speaking of speakingList.value) {
        for (const [index, speaker] of speaking[1].entries()) {
          const image: Blob = await $fetch('/api/speaker/photo', {
            method: 'GET',
            query: {
              photo: speaker.photo
            }
          })
          speaking[1][index].photo = window.URL.createObjectURL(image)
        }
      }
      pending.value = false;
    });
})

</script>
<template>
  <div v-if="pending" class="justify-self-center">
    <Loading />
  </div>
  <div v-else class="w-full max-w-6xl h-full min-h-screen mx-0 y-5 pt-24">
    <h1 class="text-4xl font-bold text-center py-6">{{ $t("Speaking") }}</h1>
    <div class=" bg-white/80 w-full h-full mx-auto max-w-6xl flex flex-col justify-center items-center">
      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-24 bg-black"></div>
        <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
          {{ $t("Keynote Speakers") }}
        </h1>
        <div class="h-0.5 w-24 bg-black"></div>
      </div>
      <div class="divide-y-2 divide-gray-400 divide-dashed w-full flex justify-center items-center flex-col">
        <div v-for="speaking in speakingList.get('Keynote Speakers')"
          class="flex md:w-3/4 justify-center items-center px-2">
          <SpeakingIntro :speaking="speaking" />
        </div>
      </div>

      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-24 bg-black"></div>
        <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
          {{ $t("Invited Speakers") }}
        </h1>
        <div class="h-0.5 w-24 bg-black"></div>
      </div>
      <div class="divide-y-2 divide-gray-400 divide-dashed w-full flex justify-center items-center flex-col">
        <div v-for="speaking in speakingList.get('Invited Speakers')"
          class="flex w-3/4 justify-center items-center px-2">
          <SpeakingIntro :speaking="speaking" />
        </div>
      </div>
    </div>
  </div>
</template>