<script lang="ts" setup>
// 设置页面元数据
useHead({
  title: '论坛概述 - 第二届论坛(2026)'
})
</script>

<template>
  <div class="max-w-8xl mx-10 my-5 pt-24 w-full h-full bg-white/50 shadow-2xl">
    <div class="md:flex flex-col px-8 md:px-16 py-4 h-full w-full rounded-lg self-center">
      <!-- 页面标题 -->
      <div class="flex justify-center items-center md:text-4xl text-2xl my-4 font-bold">
        <div class="h-0.5 md:w-20 w-10 bg-black" />
        <h1 class="mx-4">{{ $t("Symposium Tabs.overview") }}</h1>
        <div class="h-0.5 md:w-20 w-10 bg-black" />
      </div>

      <!-- 论坛概述内容 -->
      <div class="w-full h-full">
        <div class="bg-white/80 p-6 rounded-lg">
          <h2 class="text-2xl font-bold mb-4 text-center">{{ $t('Symposium2026.Name') }}</h2>
          <div class="text-xl font-semibold text-center mb-2">{{ $t('Symposium2026.Theme') }}</div>
          <div class="text-lg text-center mb-6 text-gray-600">{{ $t('Symposium2026.Date') }}</div>
          <div class="text-lg leading-7">
            <div class="text-justify" v-html="$t('Symposium2026.Intro')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>