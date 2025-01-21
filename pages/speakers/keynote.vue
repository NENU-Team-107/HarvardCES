<script setup lang="ts">
import Loading from '~/components/common/Loading.vue';
defineOptions({
  name: "keynoteSpeakers",
});

definePageMeta({
  keepalive: true,
})

import type { Speaker } from '~/lib/model';

const speakersList = ref<Speaker[]>([])

const fetchSpeakers = async () => {
  const resp = await $fetch('/api/speaker/listByQuery', {
    method: 'GET',
    query: {
      kind: 'Keynote Speakers'
    }
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    speakersList.value = data;
  }
}

onMounted(() => {
  fetchSpeakers()
    .then(async () => {
      for (let speaker of speakersList.value) {
        const image: Blob = await $fetch('/api/speaker/photo', {
          method: 'GET',
          query: {
            photo: speaker.photo
          }
        })
        speaker.photo = window.URL.createObjectURL(image)
        const path = speaker.bio.details.link?.split('/')
        if (path) {
          speaker.bio.details.link = '/speakers/speaker/' + path[path.length - 1]
        }
      }
      pending.value = false;
    });
})

const pending = ref(true);

const logos = ref([
  "img/KeynoteSpeakerLogo/Harvar_shield_Education.png",
  "img/KeynoteSpeakerLogo/Stanford_Graduate_School_of_Education.png",
  "img/KeynoteSpeakerLogo/co-sklcilogo.png",
  "img/KeynoteSpeakerLogo/SE-StanfordOnline.png",
  "img/KeynoteSpeakerLogo/NTU_Logo.webp",
  "img/KeynoteSpeakerLogo/Shandong_University.jpg",
]);

</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24">
    <div v-if="pending" class="justify-self-center">
      <Loading />
    </div>
    <div v-else class="w-full h-full flex flex-col items-center justify-center justify-self-center">
      <div class="h-full w-full max-w-6xl justify-self-center hidden md:block">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-24 bg-black"></div>
          <h1 class="text-center font-bold text-2xl py-6 mx-6">
            {{ $t('Keynote Speakers') }}
          </h1>
          <div class="h-0.5 w-24 bg-black"></div>
        </div>

        <div class="grid grid-cols-3 gap-5 justify-items-center items-start ">
          <div v-for="speaker in speakersList" class="w-full h-full">
            <SpeakersIntroduction :speakers="speaker" class="mx-4 w-full h-full" />
          </div>
        </div>
      </div>
      <div class="md:hidden">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-12 bg-black"></div>
          <h1 class="text-center font-bold text-2xl py-6 justify-self-center">
            {{ $t('Keynote Speakers') }}
          </h1>
          <div class="h-0.5 w-12 bg-black"></div>
        </div>
        <div v-for="speaker in speakersList">
          <SpeakersIntroduction :speakers="speaker" class="mx-10 my-5 h-full " />
        </div>
      </div>
      <!-- TODO 在底部增加一行 logo -->
      <div class="w-full h-full flex flex-col items-center justify-center justify-self-center">
        <div class="w-4/5 mx-10 my-5 grid grid-rows-1 grid-cols-6 items-center justify-center mt-10">
          <NuxtImg v-for="logo in logos" :key="logo" :src="logo" class="h-16 mx-auto">
          </NuxtImg>
        </div>
      </div>
    </div>
  </div>
</template>