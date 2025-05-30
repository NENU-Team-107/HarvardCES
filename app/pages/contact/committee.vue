<script setup lang="ts">
import type { Speaker } from '~/lib/model';

import ChairTable from '~/components/commitee/ChairTable.vue';

const speakersList = ref<Speaker[]>([])

const fetchSpeakers = async () => {
  const resp = await $fetch('/api/speaker/listByQuery', {
    method: 'GET',
    query: {
      kind: 'Organizing Committee'
    }
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    speakersList.value = data;
  }
}

const kinds = ref([
  { name: "Chair of Parallel session", flag: true },
  { name: "Program Chair", flag: false },
  { name: "Publicity Chair", flag: false },
  { name: "Registration Chair", flag: false },
  { name: "Workshop Chair", flag: false },
  { name: "Local Chair of Parallel session", flag: true },
  { name: "Workshop Co-Chair", flag: false },
  { name: "Publicity Co-chair", flag: false },
  { name: "Outreach Co-Chair", flag: false },
  { name: "Logistics Support", flag: false },
]);
const member = [{ title: "MemberLeft", flag: false }, { title: "MemberRight", flag: false }];

const pending = ref(true);
onMounted(() => {
  fetchSpeakers().then(async () => {
    for (const speaker of speakersList.value) {
      const image: Blob = await $fetch('/api/speaker/photo', {
        method: 'GET',
        query: {
          photo: speaker.photo
        }
      })
      speaker.photo = window.URL.createObjectURL(image)
    }
  });
  pending.value = false;
})

const logos = ref([
  "img/logo/sym_logo.png",
]);


</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24">
    <div v-if="pending" class="justify-self-center">
      <UCommandPalette loading />
    </div>
    <div v-else>
      <div class="min-h-full w-full max-w-6xl justify-self-center">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 md:w-24 w-12 bg-black" />
          <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
            {{ $t('Organizing Committee') }}
          </h1>
          <div class="h-0.5 md:w-24 w-12 bg-black" />
        </div>
        <!-- 名片 -->
        <div class="md:grid md:grid-cols-3 md:gap-5 mf:justify-items-center md:items-start mb-5 md:mb-20">
          <div v-for="speaker in speakersList" :key="speaker.id" class="md:w-full md:h-full">
            <SpeakersIntroduction :speakers="speaker" class="md:mx-0 mx-5 my-5 md:w-full h-full" />
          </div>
        </div>
      </div>
      <div class="min-h-full w-full md:px-32 px-4 justify-self-center">
        <div
          class="w-full grid md:grid-cols-10 grid-cols-1 gap-12 justify-center justify-item-center bg-white/80 md:pt-12 rounded-lg">
          <div
v-for="(item, index) in kinds" :key="index"
            :class="['w-full flex justify-center items-center', index % 5 == 0 ? 'row-span-4 md:col-span-6 col-span-1' : 'row-span-1 md:col-span-4 col-span-1']">
            <ChairTable :title="item.name" :flag="item.flag" />
          </div>
          <div
v-for="(item, index) in member" :key="index"
            class='w-full flex justify-center items-center md:col-span-5 col-span-1'>
            <ChairTable :title="item.title" :flag="item.flag" />
          </div>
        </div>
      </div>
      <div class="w-full h-full flex justify-end items-end">
        <div class="mx-10 my-5 mt-10">
          <NuxtImg v-for="logo in logos" :key="logo" :src="logo" class="h-28 mr-24" />
        </div>
      </div>
    </div>

  </div>

</template>