<script lang="ts" setup>
import { speakers } from '~/lib/placeholder';
import Title from '~/components/common/Title.vue'

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

</script>

<!-- TODO 需要加入一个飘窗，这个飘窗用于链接到投稿链接 -->
<!-- TODO 页面的背景颜色需要设置为信纸的颜色， -->
<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="justify-center items-center flex">
      <!-- TODO 这里是封面的大图 -->
      <NuxtImg src="/img/poster/cover.jpg" />
    </div>

    <div class="my-5">
      <!-- TODO 这里是论坛介绍 -->
      <Title :titleMap="title.intro" />
      <div>
        <!-- TODO 需要限制边距，保证居中，还有需要设置字号问题 -->
        {{ $t("Symposium.Intro") }}
      </div>
    </div>

    <div>
      <Title :titleMap="title.speaker"></Title>
      <div class="grid md:grid-cols-3 gap-4">
        <!-- TODO 这里是嘉宾列表，但只显示不超过 6 个 -->
        <div v-for="speaker in speakersList">
          <SpeakersIntroduction :speakers="speaker" />
        </div>
      </div>
    </div>

    <div>
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
  </div>
</template>