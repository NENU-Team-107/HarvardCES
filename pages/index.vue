<script lang="ts" setup>
import { speakers } from '~/lib/placeholder';
import Title from '~/components/common/Title.vue'
import CoverImage from '~/components/homeIndex/CoverImage.vue';

const speakersList = ref(speakers)

const logoList = ref([
  {
    label: "Host",
    path: "/img/logo/HostLogo_large.jpg"
  }, {
    label: "Collaborator",
    path: "/img/logo/co-iLRNLogo.png"
  }, {
    label: "Collaborator",
    path: "/img/logo/co-IEEE-TLTlogo.png"
  }
])

const title = ref({
  intro: "Symposium.Title",
  speaker: "Speakers",
  logo: "Organisers and Partners"
})

const VisibleSpeakersList = computed(() => {
  return showMore.value ? speakersList.value : speakersList.value.slice(0, 6)
})

const showMore = ref(false)
const toggleShowMore = () => {
  showMore.value = !showMore.value
}

const submitLink = ref("#")
const showPopup = ref(true)
const togglePopup = () => {
  showPopup.value = !showPopup.value
}

</script>

<!-- TODO 需要加入一个飘窗，这个飘窗用于链接到投稿链接 -->
<!-- TODO 页面的背景颜色需要设置为信纸的颜色， -->

<template>
  <div class="w-full flex flex-col justify-center items-center relative my-10">

    <CoverImage />

    <div class="my-10 px-2 grid grid-rows-1 gap-5">

      <div class="bg-white/80 p-10">
        <!-- TODO 这里是论坛介绍 -->
        <Title :titleMap="title.intro" />
        <div>
          <!-- TODO 需要限制边距，保证居中，还有需要设置字号问题 -->
          {{ $t("Symposium.Intro") }}
        </div>
      </div>

      <div class="bg-white/80 p-10">
        <Title :titleMap="title.speaker"></Title>
        <div class="grid md:grid-cols-3 gap-4">
          <!-- TODO 这里是嘉宾列表，但只显示不超过 6 个 -->
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
        <!-- TODO 这部分是主办单位和合作者的 Logo -->
        <Title :titleMap="title.logo"></Title>
        <div>
          <div>
            <!-- TODO i18n -->
            <span>Organised by:</span>
            <NuxtImg :src="logoList[0].path" />
          </div>
          <div>
            <span>In collaboration with:</span>
            <div v-for="logo in logoList" class="flex">
              <NuxtImg :src="logo.path" v-if="logo.label === 'Collaborator'" />
            </div>
          </div>
        </div>
      </div>

      <!-- 飘窗 -->
      <div v-if="showPopup" class="fixed bottom-10 right-10 bg-white p-4 shadow-lg rounded-lg">
        <div class="flex justify-between items-center">
          <span>{{ $t("PopWindow.Title") }}</span>
          <button @click="togglePopup" class="text-red-500 hover:text-red-700">
            <font-awesome-icon icon="fa-solid fa-xmark" style="color: #ff0000;" />
          </button>
        </div>
        <a :href="submitLink" target="_blank" class="text-blue-500 hover:text-blue-700">
          {{ $t("PopWindow.Content") }}
        </a>
      </div>
    </div>
  </div>
</template>