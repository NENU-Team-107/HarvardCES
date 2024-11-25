<script lang="ts" setup>
import Title from '~/components/common/Title.vue'
import CoverImage from '~/components/homeIndex/CoverImage.vue';
import PopupWindow from '~/components/homeIndex/PopupWindow.vue';
import Note from '~/components/homeIndex/Note.vue';
import SubSwiper from '~/components/homeIndex/SubSwiper.vue';
import type { Poster, Speaker, SwiperItem } from '~/lib/model';

const { t } = useI18n()

const logoList = ref([
  {
    label: "Collaborator",
    path: "img/logo/co-iLRNLogo.png",
    link: "https://www.immersivelrn.org/",
    height: 12,
  },
  {
    label: "Collaborator",
    path: "img/logo/co-IEEE-TLTlogo.png",
    link: "https://ieee-edusociety.org/publication/about-publications/tlt",
    height: 14,
  },
  {
    label: "Collaborator",
    path: "img/logo/co-sklcilogo.png",
    link: "https://cogskl.iflytek.com/",
    height: 16,
  },
  {
    label: "Collaborator",
    path: "img/logo/co-ERCELlogo.jpg",
    link: "",
    height: 18,
  },
  {
    label: "Collaborator",
    path: "img/logo/co-iFLYTEKlogo.png",
    link: "https://www.iflytek.com/cn/",
    height: 12,
  },
  {
    label: "Collaborator",
    path: "img/logo/co-MOElogo.png",
    link: "https://www.iflytek.com/cn/",
    height: 18,
  }
])

const title = ref({
  intro: "Symposium.Title",
  speaker: "Keynote Speakers",
  logo: "Organisers and Partners",
  workshop: "Session"
})

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

const showMore = ref(false)

const toggleShowMore = () => {
  showMore.value = !showMore.value
}

const VisibleSpeakersList = computed(() => {
  return showMore.value ? speakersList.value : speakersList.value.slice(0, 6)
})

const SymposiumIntro = computed(() => t("Symposium.Intro"))

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
})

const slides = ref<SwiperItem[]>([
  { src: "/img/poster/cover_zh_Hant.jpg" }, { src: "/img/poster/cover_zh_Hans.jpg" }
]);


</script>

<template>
  <div class="w-full flex flex-col justify-center items-center relative my-10 pt-24">

    <div
      class="w-full justify-center items-center justify-self-center  bg-gradient-to-r from-cover-left from-30% via-red-500 via-40% to-cover-right to-30% ">
      <CoverImage :Slides="slides" />
    </div>

    <div class="my-10 flex flex-col w-11/12">

      <div class="bg-white/80 dark:bg-gray-900/80 p-10">
        <Title :titleMap="title.intro" />
        <div class="text-lg pl-10">
          <div v-html="SymposiumIntro" class="dark:text-white/90 text-justify indent-8"></div>
          <div class="flex mt-4 dark:text-white/90">
            <ULink to="/about" class="italic font-semibold">
              {{ $t("Symposium.Click") }}
              <font-awesome icon="fa-solid fa-arrow-right" />
            </ULink>
          </div>
        </div>
      </div>

      <div class="bg-white/80 dark:bg-gray-900/80 p-10">
        <Title :titleMap="title.speaker" class="dark:text-white/90" />
        <div class="grid md:grid-cols-3 gap-4 pl-10">
          <div v-for="speaker in VisibleSpeakersList" class="dark:text-white">
            <SpeakersIntroduction :speakers="speaker" />
          </div>
        </div>
        <div v-if="speakersList.length > 6" class="flex justify-center mt-4">
          <button @click="toggleShowMore"
            class="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-100">
            <span v-if="showMore">
              <font-awesome icon="fa-solid fa-angle-up" />
              {{ $t("Collapse") }}
            </span>
            <span v-else>
              <font-awesome icon="fa-solid fa-angle-down" />
              {{ $t("Show More") }}
            </span>
          </button>
        </div>
      </div>

      <div class="bg-white/80 dark:bg-gray-900/80 p-10">
        <Title :titleMap="title.workshop" class="dark:text-white/90" />
        <div class="grid grid-cols-3 gap-0 w-full justify-center items-center text-center">
          <div class="grid grid-rows-2 grid-flow-col-dense gap-0">
            <div>
              <UIcon name="i-file-icons-keynote" class="w-28 h-28 bg-red-500" />
              <div>Keynote & Invited Talk</div>
            </div>
            <div>
              <NuxtImg src="/img/logo/workshop.png" loading="lazy"></NuxtImg>
              <div>Workshop</div>
            </div>
          </div>

          <div class="grid grid-rows-2 gap-2 ">

            <div>
              <UIcon name="i-healthicons-group-discussion-meetingx3" class="w-28 h-28" />
              <div>Panel Discussion</div>
            </div>
            <div>
              <UIcon name="i-streamline-group-meeting-call-solid" class="w-28 h-28" />
              <div>Symposium</div>
            </div>
          </div>

          <div class="grid grid-rows-2 gap-2 ">
            <div>
              <NuxtImg src="/img/logo/round-table.png" loading="lazy"></NuxtImg>
              <div>Round Table</div>
            </div>
            <div>
              <UIcon name="i-mdi-projector-screen" class="w-28 h-28" />
              <div>Onsite Demo and Exhibition</div>
            </div>
          </div>
        </div>


        <SubSwiper :cards="false" />
      </div>

      <div class="bg-white/80 dark:bg-gray-900/80 p-10">
        <!-- NOTE 这部分是主办单位和合作者的 Logo -->
        <Title :titleMap="title.logo" class="dark:text-white/90"></Title>
        <div class="justify-self-center w-full md:w-11/12">
          <div class="mb-5">
            <div class="font-bold text-2xl pl-10 dark:text-white/90">{{ $t("Organised by") }}</div>
            <br>

            <div
              class="grid md:grid-cols-2 grid-rows-2 gap-2 w-4/5 justify-self-center text-center md:text-2xl text-xl font-semibold">
              <div class="hover:text-red-400">
                <ULink to="https://www.hgseces.org/">{{ $t("Harvard") }}</ULink>
              </div>
              <div class="hover:text-green-800/80">
                <ULink to="https://www.eduhk.hk/en/">{{ $t("GIET") }}</ULink>
              </div>
            </div>

          </div>

          <div class="w-full dark:text-white/90">
            <div class="font-bold text-xl pl-10">{{ $t("In collaboration with") }}</div>
            <div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 w-full md:w-3/5 justify-self-center">
                <div v-for="logo in logoList" class="flex items-center justify-center">
                  <NuxtLink :to="logo.link">
                    <NuxtImg :src="logo.path" :class="'h-' + (logo.height - 2) + ' md:h-' + logo.height" />
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="text-center mt-4 text-sm">
              <span><i> Assisted By the Department of Mathematics and Information Technology of EdUHK</i></span>
              <div class="mt-1" v-html="$t('Disclaimer')">
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupWindow />
      <Note />

    </div>
  </div>
</template>
