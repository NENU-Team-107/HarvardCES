<script lang="ts" setup>
import AppHeader from "~/components/common/AppHeader.vue";
import AppFooter from "~/components/common/AppFooter.vue";


</script>

<template>
  <div class="w-full h-full min-h-full flex flex-col">
    <AppHeader />
    <div class="flex-1 flex flex-col justify-center items-center">
      <!-- TODO 布局 -->
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
