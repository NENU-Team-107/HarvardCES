<template>
  <div class="w-full min-h-screen flex flex-col relative dark:bg-black">
    <!-- 背景图片 -->
    <div
      class="absolute top-0 left-0 inset-0 dark:bg-none bg-letter-paper bg-no-repeat bg-center bg-cover blur-sm opacity-80 bg-fixed dark:opacity-95" />
    <div class="w-full flex flex-col justify-center relative z-10">
      <AppHeader />
      <!-- 内容 -->
      <div class="h-fit min-h-screen flex flex-col items-center w-full bg-yellow-100/10">
        <slot />
      </div>
      <div class="w-full sticky bottom-0 left-0 z-50">
        <Note />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/common/AppHeader.vue";
import AppFooter from "~/components/common/AppFooter.vue";
import Note from '~/components/homeIndex/Note.vue';
</script>
