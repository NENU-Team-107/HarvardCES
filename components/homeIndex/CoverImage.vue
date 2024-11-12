<script setup lang="ts">

const slides = ref(["/img/poster/cover_zh_Hant.jpg", "/img/poster/cover_zh_Hans.jpg"]);

</script>

<template>
  <div
    class="w-full justify-center items-center flex bg-gradient-to-r from-cover-left from-30% via-red-500 via-40% to-cover-right to-30%">
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
      :autoplay="{
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
      }">
      <SwiperSlide v-for="(slide, idx) in slides" :key="idx" class="h-full w-full flex justify-center items-center">
        <NuxtImg :src="slide" fit="cover" />
      </SwiperSlide>
    </Swiper>
  </div>
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