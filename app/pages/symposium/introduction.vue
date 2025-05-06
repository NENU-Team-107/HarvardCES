<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const iframeWidth = ref('50vw')
const iframeHeight = ref('100vh')
const fileURL = ref("/workshop/handbook.pdf")

const adjustIframe = () => {
  const ifm = document.getElementById("bi_iframe") as HTMLEmbedElement;
  ifm.height = (document.documentElement.clientHeight).toString();
  ifm.width = (document.documentElement.clientWidth * 0.5).toString();
}

</script>

<template>
    <div class="max-w-6xl mx-10 my-5 pt-24">
        <CommonBreads />
    <div :class="['flex justify-center items-center text-5xl py-10', $t('special font'),]">
      <div class="h-0.5 w-20 bg-black"></div>
      <h1 class="mx-4">{{ $t("Symposium Handbook") }} </h1>
      <div class="h-0.5 w-20 bg-black"></div>
    </div>

    <div class="min-w-full min-h-max flex justify-center items-center">
      <iframe frameborder="0" scrolling="auto" id="bi_iframe" :style="{ width: iframeWidth, height: iframeHeight }"
        @load="adjustIframe" :src="fileURL"></iframe>
    </div>
        
    </div>
</template>