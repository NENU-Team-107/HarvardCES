<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const AgendaImage = computed(() => {
  return t("Symposium Agenda")
})

const iframeWidth = ref('50vw')
const iframeHeight = ref('100vh')
const fileURL = ref("/workshop/handbook.pdf")

const adjustIframe = () => {
  var ifm = document.getElementById("bi_iframe") as HTMLEmbedElement;
  ifm.height = (document.documentElement.clientHeight).toString();
  ifm.width = (document.documentElement.clientWidth * 0.5).toString();
}

</script>

<template>
  <div class="max-w-6xl mx-10 my-5 pt-24 w-full h-full bg-white/50 shadow-2xl ">

    <!-- <div :class="['flex justify-center items-center text-5xl py-10', $t('special font'),]">
      <div class="h-0.5 w-20 bg-black"></div>
      <h1 class="mx-4">{{ $t("Symposium Handbook") }} </h1>
      <div class="h-0.5 w-20 bg-black"></div>
    </div>

    <div class="min-w-full min-h-max flex justify-center items-center">
      <iframe frameborder="0" scrolling="auto" id="bi_iframe" :style="{ width: iframeWidth, height: iframeHeight }"
        @load="adjustIframe" :src="fileURL"></iframe>
    </div> -->

    <div class="md:flex hidden flex-col px-8 md:px-16 py-4  h-full w-full  border-1 rounded-lg self-center">
      <div class="flex justify-center items-center text-4xl my-4 font-bold">
        <div class="h-0.5 w-20 bg-black"></div>
        <h1 class="mx-4">{{ $t("Symposium Time") }} </h1>
        <div class="h-0.5 w-20 bg-black"></div>
      </div>
      <div class="w-full">
        <NuxtImg :src="AgendaImage" loading="lazy" class="w-full object-cover" />
        <div class="text-center my-2">
          <i>{{ $t("Agenda Note") }}</i>
        </div>
      </div>
    </div>

    <div class="md:hidden">
      <div class="w-full">
        <NuxtImg :src="AgendaImage" loading="lazy" class="w-full object-cover" />
        <div class="text-center text-xs my-2">
          <i>{{ $t("Agenda Note") }}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>