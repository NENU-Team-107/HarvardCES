<script lang="ts" setup>
import Title from '~/components/common/Title.vue'
import CoverImage from '~/components/homeIndex/CoverImage.vue';
import PopupWindow from '~/components/homeIndex/PopupWindow.vue';
import type { Speaker } from '~/lib/model';

const { t } = useI18n()

const logoList = ref([
  // {
  //   label: "Collaborator",
  //   path: "img/logo/co-iLRNLogo.png",
  //   link: "https://www.immersivelrn.org/",
  //   height: 12,
  // },
  // {
  //   label: "Collaborator",
  //   path: "img/logo/co-IEEE-TLTlogo.png",
  //   link: "https://ieee-edusociety.org/publication/about-publications/tlt",
  //   height: 16,
  // },
  {
    label: "Collaborator",
    path: "img/logo/co-iFLYTEKlogo.png",
    link: "https://www.iflytek.com/cn/",
    height: 12,
  },
  {
    label: "Collaborator",
    path: "img/logo/co-sklcilogo.png",
    link: "https://cogskl.iflytek.com/",
    height: 16,
  },
  // {
  //   label: "Collaborator",
  //   path: "img/logo/co-ERCELlogo.jpg",
  //   link: "",
  //   height: 18,
  // },
  {
    label: "Collaborator",
    path: "img/logo/co-MOElogo.png",
    link: "https://mtt.snnu.edu.cn/index.htm",
    height: 18,
  }
])

const title = ref({
  intro: "Symposium.Title",
  speaker: "Keynote Speakers Index",
  logo: "Organisers and Partners",
  organisers: "Organizing Committee"
  // workshop: "Activities"
  //   workshop: "Session"
})

const chosenKeynote = [3, 17, 7, 1, 24, 2]

const keyspeakersList = ref<Speaker[]>([])
const organizeList = ref<Speaker[]>([])

const fetchKeynoteSpeakers = async () => {
  const resp = await $fetch('/api/speaker/listByQuery', {
    method: 'GET',
    query: {
      kind: 'Keynote Speakers'
    }
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    keyspeakersList.value = data;
  }
}

const fetchOrganize = async () => {
  const resp = await $fetch('/api/speaker/listByQuery', {
    method: 'GET',
    query: {
      kind: 'Organizing Committee'
    }
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    organizeList.value = data;
  }
}

const KeynoteSpeakers = computed(() => {
  return keyspeakersList.value.filter((speaker) => {
    return chosenKeynote.includes(speaker.id)
  })
})

onMounted(() => {
  fetchKeynoteSpeakers()
    .then(async () => {
      for (const speaker of keyspeakersList.value) {
        const image: Blob = await $fetch('/api/speaker/photo', {
          method: 'GET',
          query: {
            photo: speaker.photo
          }
        })
        speaker.photo = window.URL.createObjectURL(image)
      }
    })
  fetchOrganize()
    .then(async () => {
      for (const organizer of organizeList.value) {
        const image: Blob = await $fetch('/api/speaker/photo', {
          method: 'GET',
          query: {
            photo: organizer.photo
          }
        })
        organizer.photo = window.URL.createObjectURL(image)
      }
    })

})

</script>

<template>
  <div class="w-full h-fit flex flex-col justify-center items-center relative pt-24 ">

    <div class="w-full flex mx-auto justify-center items-center justify-self-center section">
      <CoverImage />
    </div>

    <div class="md:my-10 my-12 flex flex-col md:w-10/12 w-full section">
      <div class="bg-white/80 md:p-10 p-1">
        <Title :title-map="title.intro" />
        <div class="md:text-lg text-sm md:pl-10 px-5 leading-7">
          <div class="text-justify indent-8" v-html="$t('Symposium.Intro')" />
          <!-- <div class="flex mt-4">
            <ULink to="/symposium/introduction"
              class="italic font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              {{ $t("Symposium.Click") }}
              <font-awesome icon="fa-solid fa-arrow-right" />
            </ULink>
          </div> -->
        </div>
      </div>

      <div class="bg-white/80 md:p-10 p-1 md:mt-0 mt-5">
        <Title :title-map="title.speaker" />
        <div class="grid md:grid-cols-3 gap-4 px-10">
          <div v-for="speaker in KeynoteSpeakers" :key="speaker.id">
            <SpeakersIntroduction :speakers="speaker" />
          </div>
        </div>
        <div v-if="keyspeakersList.length > 6" class="flex justify-center mt-4">
          <NuxtLink :to="'/speakers/keynote'" class="text-blue-600 hover:text-green-800/80 font-semibold">
            <span class="italic">
              {{ $t("Show More Keynote") }}
              <font-awesome icon="fa-solid fa-angle-right" />
            </span>
          </NuxtLink>
        </div>
      </div>

      <div class="bg-white/80 md:p-10 px-5">
        <!-- NOTE 这部分是主办单位和合作者的 Logo -->
        <Title :title-map="title.logo" />
        <div class="justify-self-center w-full md:w-11/12">
          <div class="mb-5 grid grid-cols-2">

            <div>
              <div class="font-bold md:text-2xl text-xl md:pl-10 ">{{ $t("Organised by") }}</div>
              <br>
              <div class="md:w-4/5 w-full justify-self-center text-center md:text-2xl text-xl font-semibold ">
                <span>{{ $t("EduHK Full") }}</span>
              </div>
            </div>

            <div>
              <div class="font-bold md:text-2xl text-xl md:pl-10 ">{{ $t("Host by") }}</div>
              <br>
              <div class="md:w-4/5 w-full justify-self-center text-center md:text-2xl text-xl font-semibold ">
                <div class="hover:text-green-800/80 ">
                  <ULink to="https://www.eduhk.hk/en/" target="_blank">
                    <span v-html="$t('GIET').replace(/\n/g, '<br>')" />
                  </ULink>
                </div>
              </div>
            </div>

          </div>

          <div class="w-full">
            <div class="font-bold text-xl md:pl-10 p-1">{{ $t("In collaboration with") }}</div>
            <div>
              <div
                class="grid grid-cols-2 md:grid-cols-3 mt-5 gap-0.5 w-full md:w-4/5 px-5 md:px-0 justify-self-center">
                <div v-for="logo in logoList" :key="logo.path" class="flex w-full h-full  items-center justify-around">
                  <NuxtLink :to="logo.link" target="_blank" class="w-full h-full flex justify-center items-center">
                    <NuxtImg :src="logo.path" :class="'h-' + (logo.height - 2) + ' md:h-' + logo.height" />
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="text-center mt-4 text-sm">
              <span><i> {{ t('Assisted') }}</i></span>
              <div class="mt-1" v-html="$t('Disclaimer')" />
            </div>
          </div>
        </div>
      </div>
      <PopupWindow />
    </div>
  </div>
</template>
