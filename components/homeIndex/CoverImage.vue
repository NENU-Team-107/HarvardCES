<script setup lang="ts">
const slides = ref([
  "img/poster/cover_zh_Hans.jpg",
  "img/poster/cover_zh_Hant.jpg"
]);

</script>

<template>
  <div class="md:w-4/6 w-full items-center justify-center justify-self-center">
    <UCarousel v-slot="{ item }" , :items="slides" :ui="{ item: 'basis-full lg:basis-full' }" class="overflow-hidden">
      <NuxtImg :src="item" draggable="false" class="w-full" preload />
    </UCarousel>
  </div>
</template>