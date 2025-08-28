<script lang="ts" setup>
const iframeWidth = ref('50vw')
const iframeHeight = ref('100vh')
const fileURL = ref("/workshop/handbook.pdf")

const adjustIframe = () => {
  const ifm = document.getElementById("bi_iframe") as HTMLEmbedElement;
  ifm.height = (document.documentElement.clientHeight).toString();
  ifm.width = (document.documentElement.clientWidth * 0.5).toString();
}

useHead({
  title: '论坛手册 - 第二届论坛(2026)'
})
</script>

<template>
  <div class="max-w-8xl mx-10 my-5 pt-24 w-full h-full bg-white/50 shadow-2xl">
    <div class="md:flex flex-col px-8 md:px-16 py-4 h-full w-full rounded-lg self-center">
      <!-- 页面标题 -->
      <div class="flex justify-center items-center md:text-4xl text-2xl my-4 font-bold">
        <div class="h-0.5 md:w-20 w-10 bg-black" />
        <h1 class="mx-4">{{ $t("Symposium Tabs.handbook") }}</h1>
        <div class="h-0.5 md:w-20 w-10 bg-black" />
      </div>

      <!-- 论坛手册内容 -->
      <div class="w-full h-full">
        <div class="bg-white/80 p-6 rounded-lg">
          <div class="flex justify-center items-center text-2xl font-bold mb-6">
            <div class="h-0.5 w-16 bg-black" />
            <h2 class="mx-4">{{ $t("Symposium Handbook") }}</h2>
            <div class="h-0.5 w-16 bg-black" />
          </div>
          <div class="w-full h-full flex justify-center items-center">
            <embed 
              id="bi_iframe" 
              :src="fileURL" 
              :width="iframeWidth" 
              :height="iframeHeight" 
              type="application/pdf"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>