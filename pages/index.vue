<script lang="ts" setup>
import Title from '~/components/common/Title.vue'
import CoverImage from '~/components/homeIndex/CoverImage.vue';
import PopupWindow from '~/components/homeIndex/PopupWindow.vue';
import SubSwiper from '~/components/homeIndex/SubSwiper.vue';
import type { Poster, Speaker, SwiperItem } from '~/lib/model';
import IconGrid from '~/components/homeIndex/IconGrid.vue';

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
    height: 16,
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
    link: "https://mtt.snnu.edu.cn/index.htm",
    height: 18,
  }
])

const title = ref({
  intro: "Symposium.Title",
  speaker: "Keynote Speakers",
  logo: "Organisers and Partners",
  workshop: "Activities"
  //   workshop: "Session"
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

    <div class="my-10 flex flex-col w-10/12">

      <div class="bg-white/80  md:p-10 p-1">
        <Title :titleMap="title.intro" />
        <div class="md:text-lg text-sm pl-10">
          <div v-html="$t('Symposium.Intro')" class="text-justify indent-8"></div>
          <div class="flex mt-4 ">
            <ULink to="/about"
              class="italic font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              {{ $t("Symposium.Click") }}
              <font-awesome icon="fa-solid fa-arrow-right" />
            </ULink>
          </div>
        </div>
      </div>

      <div class="bg-white/80  md:p-10 p-1">
        <Title :titleMap="title.speaker" />
        <div class="grid md:grid-cols-3 gap-4 px-10">
          <div v-for="speaker in VisibleSpeakersList">
            <SpeakersIntroduction :speakers="speaker" />
          </div>
        </div>
        <div v-if="speakersList.length > 6" class="flex justify-center mt-4">
          <button @click="toggleShowMore" class="text-blue-500 hover:text-blue-700 ">
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

      <div class="bg-white/80  p-10">
        <Title :titleMap="title.workshop" />
        <div class="grid grid-rows-1 grid-cols-1 justify-center items-center w-4/5 justify-self-center">
          <IconGrid />
          <div class="text-center text-xl font-bold my-4 grid-cols-3 grid">
            <!-- <div class="h-1 w-full bg-black"></div>
            <span>{{ $t("Session") }}</span> -->
          </div>
          <SubSwiper :cards="false" />
        </div>
      </div>

      <div class="bg-white/80  p-10">
        <!-- NOTE 这部分是主办单位和合作者的 Logo -->
        <Title :titleMap="title.logo"></Title>
        <div class="justify-self-center w-full md:w-11/12">
          <div class="mb-5">
            <div class="font-bold text-2xl pl-10 ">{{ $t("Organised by") }}</div>
            <br>
            <div
              class="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 gap-2 w-4/5 justify-self-center text-center md:text-2xl text-xl font-semibold ">
              <div class="hover:text-red-400">
                <ULink to="https://www.hgseces.org/" target="_blank">
                  <span v-html="$t('Harvard').replace(/\n/g, '<br>')" />
                </ULink>
              </div>
              <div class="hover:text-green-800/80">
                <ULink to="https://www.eduhk.hk/en/" target="_blank">
                  <span v-html="$t('GIET').replace(/\n/g, '<br>')" />
                </ULink>
              </div>
            </div>

          </div>

          <div class="w-full ">
            <div class="font-bold text-xl pl-10">{{ $t("In collaboration with") }}</div>
            <div>
              <div class="grid grid-cols-2 md:grid-cols-3 mt-5 gap-0.5 w-full md:w-4/5 justify-self-center">
                <div v-for="logo in logoList" class="flex w-full h-full  items-center justify-around">
                  <NuxtLink :to="logo.link" target="_blank" class="w-full h-full flex justify-center items-center">
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
    </div>
  </div>
</template>
