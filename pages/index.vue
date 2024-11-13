<script lang="ts" setup>
import Title from '~/components/common/Title.vue'
import CoverImage from '~/components/homeIndex/CoverImage.vue';
import PopupWindow from '~/components/homeIndex/PopupWindow.vue';
import type { Poster, Speaker } from '~/lib/model';

const { t } = useI18n()

const host = ref({
  label: "Host",
  path: "img/logo/HostLogo_large.jpg"
},);

const logoList = ref([
  {
    label: "Collaborator",
    path: "img/logo/co-iLRNLogo.png",
    link: "https://www.immersivelrn.org/"
  },
  {
    label: "Collaborator",
    path: "img/logo/co-IEEE-TLTlogo.png",
    link: "https://ieee-edusociety.org/publication/about-publications/tlt"
  }
])

const title = ref({
  intro: "Symposium.Title",
  speaker: "Keynote Speakers",
  logo: "Organisers and Partners",
  workshop: "Workshop and Sub-symposium Sessions"
})

const speakersList = ref<Speaker[]>([])
const posterList = ref<Poster[]>([])

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

const fetchPosters = async () => {
  const resp = await $fetch('/api/poster/listAll', {
    method: 'GET'
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    posterList.value = data;
  }
}

const showMore = ref(false)

const toggleShowMore = () => {
  showMore.value = !showMore.value
}

const VisibleSpeakersList = computed(() => {
  return showMore.value ? speakersList.value : speakersList.value.slice(0, 6)
})

const SymposiumIntro = ref<string>()

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
      }
    })

  fetchPosters()

  SymposiumIntro.value = t("Symposium.Intro").replace(/\n/g, '<br>')
})

</script>

<template>
  <div class="w-full flex flex-col justify-center items-center relative my-10 pt-24">

    <CoverImage />

    <div class="my-10 px-2 grid grid-rows-1 gap-5">

      <div class="bg-white/80 p-10">
        <!-- NOTE 这里是论坛介绍 -->
        <Title :titleMap="title.intro" />
        <div class="text-lg pl-10">
          <div :innerHTML="SymposiumIntro"></div>
          <div class="flex mt-4">
            <ULink to="/about" class="italic font-semibold">
              {{ $t("Symposium.Click") }}
              <font-awesome icon="fa-solid fa-arrow-right" />
            </ULink>
          </div>
        </div>
      </div>

      <div class="bg-white/80 p-10">
        <Title :titleMap="title.speaker"></Title>
        <div class="grid md:grid-cols-3 gap-4 pl-10">
          <div v-for="speaker in VisibleSpeakersList">
            <SpeakersIntroduction :speakers="speaker" />
          </div>
        </div>
        <div v-if="speakersList.length > 6" class="flex justify-center mt-4">
          <button @click="toggleShowMore" class="text-blue-500 hover:text-blue-700">
            <span v-if="showMore">▲ {{ $t("Collapse") }}</span>
            <span v-else>▼ {{ $t("Show More") }}</span>
          </button>
        </div>
      </div>

      <div class="bg-white/80 p-10">
        <Title :titleMap="title.workshop"> </Title>
        <!-- TODO 补全资料 -->
        <div>
          <div v-for="poster in posterList">
            <NuxtImg :src="poster.path" sizes="200" />
            <ULink :to="poster.link" class="italic font-semibold">
              {{ $t("Details") }}
              <font-awesome icon="fa-solid fa-arrow-right" />
            </ULink>
          </div>
        </div>
      </div>

      <div class="bg-white/80 p-10">
        <!-- NOTE 这部分是主办单位和合作者的 Logo -->
        <Title :titleMap="title.logo"></Title>
        <div>
          <div>
            <div class="font-bold text-lg pl-10">{{ $t("Organised by") }}</div>
            <div class="w-full flex justify-center items-center">
              <NuxtImg :src="host.path" sizes="400" />
            </div>
          </div>
          <div class="w-full flex flex-col">
            <div class="font-bold text-lg pl-10">{{ $t("In collaboration with") }}</div>
            <div class="w-full flex items-center justify-evenly md:flex-row flex-col">
              <div v-for="logo in logoList" class="md:my-0 my-2">
                <NuxtLink :to="logo.link">
                  <NuxtImg :src="logo.path" class="h-16" />
                </NuxtLink>
              </div>
            </div>
            <div class="text-center mt-4 text-sm">
              Assisted By the Department of Mathematics and Information Technology of EdUHK
            </div>
          </div>
        </div>
      </div>

      <!-- NOTE 飘窗 -->
      <PopupWindow />
      <!-- <div v-if="showPopup" class="fixed bottom-10 right-10 bg-white p-4 shadow-lg rounded-lg">
        <div class="flex justify-between items-center">
          <span>{{ $t("PopWindow.Title") }}</span>
          <button @click="togglePopup" class="text-red-500 hover:text-red-700">
            <font-awesome icon="fa-solid fa-xmark" style="color: #ff0000;" />
          </button>
        </div>
        <a :href="submitLink" target="_blank" class="text-blue-500 hover:text-blue-700">
          {{ $t("PopWindow.Content") }}
        </a>
      </div> -->
    </div>
  </div>
</template>