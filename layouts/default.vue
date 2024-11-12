<template>
  <div class="w-full min-h-screen flex flex-col relative">
    <!-- 背景图片 -->
    <div
      class="absolute top-0 left-0 inset-0 bg-letter-paper bg-no-repeat bg-center bg-cover blur-sm opacity-80 bg-fixed" />
    <div class="w-full flex flex-col justify-center relative z-10">
      <AppHeader />
      <!-- 内容 -->
      <div class="h-fit min-h-screen flex flex-col items-center w-full">
        <slot />
      </div>

      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/common/AppHeader.vue";
import AppFooter from "~/components/common/AppFooter.vue";
</script>

<style>
body,
html {
  font-family: "LXGW WenKai GB", "Robot";
  font-weight: normal;
}
</style>
