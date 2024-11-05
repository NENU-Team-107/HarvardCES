<script setup lang="ts">
import { ref } from "vue";
const footerTitle = ref<string>("Media.Title")

interface ContactItemType {
  before: string,
  after: string
}

const contact = ref<ContactItemType[]>([
  {
    before: "Host.Name",
    after: "Host.Details.Name"
  },
  {
    before: "Host.Language",
    after: "Host.Details.Language"
  },
  {
    before: "Host.Date",
    after: "Host.Details.Date"
  },
  {
    before: "Host.Location",
    after: "Host.Details.Location"
  }
])

interface MediaItemType {
  label: string,
  image: string | undefined
}

const media = ref<MediaItemType[]>([
  {
    label: "Redbook",
    image: "/img/redbook.png"
  },
  {
    label: "Wechat",
    image: "/img/wechat.png"
  },
  {
    label: "Email",
    image: undefined
  }
])

</script>

<template>
  <div class="min-w-full">
    <!-- TODO 背景颜色 + 文字颜色 -->
    <div class="flex md:flex-row flex-col items-center justify-center min-h-28 bg-green-950/80 text-white w-full">
      <div class="flex">
        <div class="flex-1 items-center justify-center">
          <ul>
            <li v-for="item in contact">
              <span class="items-center text-center">{{ $t(item.before) }} : </span>
              <span>{{ $t(item.after) }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col">
        <span class="text-xl font-bold text-center py-2">{{ $t(footerTitle) }}</span>
        <div class="flex md:flex-row flex-col justify-center items-center">
          <div v-for="item in media" class="felx-1 flex justify-center items-center px-2">
            <div v-if="item.label !== 'Email'" class="flex flex-col justify-center items-center">
              <span>{{ $t("Media." + item.label + ".Intro") }}</span>
              <NuxtImg :src="item.image" class="w-20 h-20"></NuxtImg>
              <span> {{ $t("Media." + item.label + ".Details") }}</span>
            </div>
            <div v-else>
              <span>{{ $t("Media.Email.Details", ["GIETfuture@eduhk.hk"]) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>