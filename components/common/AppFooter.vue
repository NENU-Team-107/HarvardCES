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
])

</script>

<template>
  <div class="min-w-full min-h-28 bg-green-950/90 dark:bg-green-950 text-white w-full">
    <div class="text-xl font-bold text-center h-10"></div>
    <div class="text-xl font-bold text-center md:hidden relative">{{ $t(footerTitle) }}</div>
    <div class="flex md:flex-row flex-col items-center justify-center gap-3 w-full">
      <div class="flex justify-center items-center mx-10">
        <div>
          <div class="items-center justify-center mb-2 max-w-md max-h-28">
            <UButton icon="i-fa6-solid-heart" padding="2xs" gap="xs" color="sky" variant="soft"
              :ui="{ rounded: 'rounded-full', font: 'font-bold' }" block :trailing="true" to="" target="_blank">
              <span class="text-lg">Sponsor Ship</span>
              <!-- <template #trailing>
                <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
              </template> -->
            </UButton>
          </div>
          <NuxtImg src="img/logo/UNESCOLogo-single.png" sizes="320" />
        </div>
      </div>
      <div class="max-w-screen-md">
        <div class="text-xl font-bold text-center hidden md:-top-10 md:block relative">{{ $t(footerTitle) }}</div>
        <!-- <NuxtImg src="img/logo/HostLogo_small.jpg" sizes="300" class="justify-self-center" /> -->
        <div class="grid grid-cols-2 gap-4 text-center ml-5">
          <!-- TODO 这里改为联系邮箱等信息 -->
          <div>
            <div class="grid grid-rows-2 gap-2">
              <div>{{ $t("Harvard") }}</div>
              <div class="flex justify-center items-center">
                <UButton icon="i-material-symbols-public" size="lg" color="rose" square variant="soft" class="mr-2"
                  to="https://www.hgseces.org/" />
                <UButton icon="i-material-symbols-mail-rounded" size="lg" color="rose" square variant="soft"
                  class="ml-2" to="mailto:general@hgseces.org" />
              </div>
            </div>
          </div>
          <div class="grid grid-rows-2 gap-2">
            <div> {{ $t("GIET") }}</div>
            <div class="flex justify-center items-center">
              <UButton icon="i-material-symbols-public" size="lg" color="primary" square variant="soft" class="mr-2"
                to="https://www.eduhk.hk/en/" />
              <UButton icon="i-material-symbols-mail-rounded" size="lg" color="primary" square variant="soft"
                class="ml-2" to="mailto:GIETfuture@eduhk.hk" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col justify-center items-center">
          <div class="flex flex-row">
            <div v-for="item in media" class="flex flex-row ml-5">
              <div class="flex flex-col justify-center items-center text-justify">
                <span>{{ $t("Media." + item.label + ".Intro") }}</span>
                <NuxtImg v-if="item.label !== 'Email'" :src="item.image" class="w-20 h-20"></NuxtImg>
                <span> {{ $t("Media." + item.label + ".Details") }}</span>
              </div>
              <!--  -->
            </div>
          </div>
          <!-- <div class="my-2">
            <span>{{ $t("Media.Email.Details", ["GIETfuture@eduhk.hk"]) }}</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>