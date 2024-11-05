<template>
  <div class="w-full min-h-screen flex flex-col relative">
    <!-- 背景图片 -->
    <div
      class="absolute top-0 left-0 inset-0 bg-letter-paper bg-no-repeat bg-center bg-cover blur-sm opacity-80 bg-fixed" />
    <div class="w-full flex flex-col justify-center items-center relative z-10">
      <AppHeader />
      <!-- 内容 -->
      <div class="h-fit flex flex-col justify-center items-center">
        <slot />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/common/AppHeader.vue";
import AppFooter from "~/components/common/AppFooter.vue";
// 可以注意一下引入的路径的写法，~符号表示从项目根目录开始查找，/表示从public/开始查找
</script>
