<script setup lang="ts">
import type { SwiperItem } from '~/lib/model';

const slides = defineModel('Slides', {
  required: true,
  type: Array as () => SwiperItem[],
  default: () => []
})
const ImgSize = defineModel('ImgSize', {
  required: false,
  type: String,
  default: ''
});


const carouselRef = ref()
onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return
    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 5000)
})


</script>

<template>
  <div class="md:w-4/6 w-full items-center justify-center justify-self-center">
    <UCarousel ref="carouselRef" v-slot="{ item }" , :items="slides" :ui="{ item: 'basis-full lg:basis-full' }"
      class="overflow-hidden">
      <NuxtImg :src="item.src" draggable="false" class="w-full" preload />
    </UCarousel>
  </div>
</template>