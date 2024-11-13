<script setup lang="ts">

// Usage:传入一个字符串数组，指示轮播图的图片路径

const slides = defineModel('Slides', {
  required: true,
  type: Array as () => string[],
  default: () => []
})


</script>

<template>
  <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperAutoplay, SwiperPagination]"
    :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="{
      delay: 6000,
      disableOnInteraction: true
    }" :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1]
      },
      next: {
        translate: ['100%', 0, 0]
      }
    }" :pagination="{ clickable: true }">
    <SwiperSlide v-for="(slide, idx) in slides" :key="idx" class="h-full w-full flex justify-center items-center">
      <NuxtImg :src="slide" fit="cover" class="mx-1" />
    </SwiperSlide>

  </Swiper>
</template>
<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: fit-content;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.swiper-pagination-bullet {
  background: #000;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #000;
  opacity: 1;
}

.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

.swiper-cards {
  width: 240px;
  height: 240px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>