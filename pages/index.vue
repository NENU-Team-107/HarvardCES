<script lang="ts" setup>
import { speakers } from '~/lib/placeholder';


const speakersList = ref(speakers)

const logoList = ref([
  {
    label: "Host",
    path: "/img/logo/HostLogo_large.jpg"
  }, {
    label: "Collaborator",
    path: "/img/logo/co-iLRNLogo.png"
  }
])

</script>

<!-- TODO 需要加入一个飘窗，这个飘窗用于链接到投稿链接 -->

<template>
  <div>
    <div class=" justify-center items-center flex">
      <!-- TODO 这里是封面的大图 -->
      <NuxtImg src="/img/poster/cover.jpg" />
    </div>
    <div>
      <!-- TODO 这里是论坛介绍 -->
      {{ $t("Symposium.Title") }}

      {{ $t("Symposium.Intro") }}
    </div>
    <div class="grid grid-cols-3 gap-4">
      <!-- TODO 这里是嘉宾列表，但只显示不超过 6 个 -->
      <div v-for="speaker in speakersList">
        <SpeakersIntroduction :speakers="speaker" />
      </div>
    </div>
    <div>
      <!-- TODO 这部分是主办单位和合作者的 Logo -->
      <div v-for="logo in logoList">
        <NuxtImg :src="logo.path" />
      </div>
    </div>
  </div>
</template>