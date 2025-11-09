<script setup lang="ts">
import Loading from '~/components/common/Loading.vue';

import type { Speaker } from '~/lib/model';
defineOptions({
  name: "KeynoteSpeakers",
});

definePageMeta({
  keepalive: true,
})

const speakersList = ref<Speaker[]>([])
const fetchSpeakers = async () => {
  const resp = await $fetch('/api/speaker/listByQuery', {
    method: 'GET',
    query: {
      kind: 'Keynote Speakers',
      year: '2026'
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
      for (const speaker of speakersList.value) {
        const image: Blob = await $fetch('/api/speaker/photo', {
          method: 'GET',
          query: {
            photo: speaker.photo
          }
        })
        speaker.photo = window.URL.createObjectURL(image)
        const path = speaker.bio.details.link?.split('/')
        if (path) {
          // TODO: 修改演讲者详情页面路径为2026年
          speaker.bio.details.link = '/2026/speakers/speaker/' + path[path.length - 1]
        }
      }
      pending.value = false;
    });
})

const pending = ref(true);

// TODO: 2026年内容待更新 - 确认主旨演讲者Logo是否需要更新
// const logos = ref([
//   "img/KeynoteSpeakerLogo/Harvar_shield_Education.png",
//   "img/KeynoteSpeakerLogo/Stanford_Graduate_School_of_Education.png",
//   "img/KeynoteSpeakerLogo/co-sklcilogo.png",
//   "img/KeynoteSpeakerLogo/SE-StanfordOnline.png",
//   "img/KeynoteSpeakerLogo/NTU_Logo.webp",
//   "img/KeynoteSpeakerLogo/Shandong_University.jpg",
// ]);

</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24">
    <div v-if="pending" class="justify-self-center">
      <Loading />
    </div>
    <div v-else class="w-full h-full flex flex-col items-center justify-center justify-self-center">
      <div class="h-full w-full max-w-6xl justify-self-center hidden md:block">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-24 bg-black"/>
          <h1 class="text-center font-bold text-2xl py-6 mx-6">
            {{ $t('Keynote Speakers') }}
          </h1>
          <div class="h-0.5 w-24 bg-black"/>
        </div>

        <div class="grid grid-cols-3 gap-5 justify-items-center items-start ">
          <div v-for="speaker in speakersList" :key="speaker.id" class="w-full h-full">
            <SpeakersIntroduction :speakers="speaker" class="mx-4 w-full h-full" />
          </div>
        </div>

        <!-- 底部：演讲嘉宾来自（桌面端） -->
        <div class="w-full mt-8">
          <div class="text-center text-sm text-gray-600 font-semibold mb-3">
            {{ $t('Speakers from:') }}
          </div>
          <div class="w-full flex flex-wrap items-center justify-center gap-6 py-2">
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker1.png" alt="" class="h-8 md:h-10 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker2.png" alt="" class="h-8 md:h-10 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker3.png" alt="" class="h-8 md:h-10 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker4.png" alt="" class="h-8 md:h-10 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker5.png" alt="" class="h-8 md:h-10 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker6.png" alt="" class="h-8 md:h-10 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker7.png" alt="" class="h-8 md:h-10 object-contain"/>
          </div>
        </div>
      </div>
      <div class="md:hidden">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-12 bg-black"/>
          <h1 class="text-center font-bold text-2xl py-6 justify-self-center">
            {{ $t('Keynote Speakers') }}
          </h1>
          <div class="h-0.5 w-12 bg-black"/>
        </div>
        <div v-for="speaker in speakersList" :key="speaker.id">
          <SpeakersIntroduction :speakers="speaker" class="mx-10 my-5 h-full " />
        </div>

        <!-- 底部：演讲嘉宾来自（移动端） -->
        <div class="w-full mt-6">
          <div class="text-center text-xs text-gray-600 font-semibold mb-2">
            {{ $t('Speakers from:') }}
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4 py-1">
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker1.png" alt="" class="h-8 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker2.png" alt="" class="h-8 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker3.png" alt="" class="h-8 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker4.png" alt="" class="h-8 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker5.png" alt="" class="h-8 object-contain"/>  
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker6.png" alt="" class="h-7 object-contain"/>
            <img src="/img/KeynoteSpeakerLogo/keynotespeaker7.png" alt="" class="h-7 object-contain"/>
          </div>
        </div>
      </div>
      <!-- 学校图标部分已注释掉
      <div class="w-full h-full flex flex-col items-center justify-center justify-self-center">
        <div class="w-4/5 mx-10 my-5 grid grid-rows-1 grid-cols-6 items-center justify-center mt-10">
          <NuxtImg v-for="logo in logos" :key="logo" :src="logo" class="h-16 mx-auto"/>
        </div>
      </div>
      -->
    </div>
  </div>
</template>