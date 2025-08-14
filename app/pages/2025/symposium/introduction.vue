<script setup lang="ts">
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
      <div class="h-0.5 w-20 bg-black"/>
      <h1 class="mx-4">{{ $t("Symposium Handbook") }} </h1>
      <div class="h-0.5 w-20 bg-black"/>
    </div>

    <div class="min-w-full min-h-max flex justify-center items-center">
      <iframe
id="bi_iframe" frameborder="0" scrolling="auto" :style="{ width: iframeWidth, height: iframeHeight }"
        :src="fileURL" @load="adjustIframe"/>
    </div>
        
    </div>
</template>