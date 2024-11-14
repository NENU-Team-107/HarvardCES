<script setup lang="ts">
import type { SwiperItem } from '~/lib/model';
import { useRouter } from 'vue-router';
const router = useRouter();
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

const jump = (link: string) => {
  if (link === "-1")
    return;
  console.log(link)
  if (!link.startsWith('/')) {
    link = '/' + link
  }
  router.push(link)
}


</script>

<template>
  <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperAutoplay, SwiperPagination]"
    :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="{
      delay: 5000,
      disableOnInteraction: true
    }" :creative-effect="{
      prev: {
        shadow: false,
        translate: [-1, 0, 0],
      },
      next: {
        shadow: false,
        translate: [-1, 0, 0]
      },
    }" :pagination="{ clickable: true }">
    <SwiperSlide v-for="(slide, idx) in slides" :key="idx"
      class="w-full flex justify-center items-center h-fit relative">
      <div v-if="!slide.details" >
        <NuxtImg :src="slide.src" fit="contain" :class="slide.link ? 'mx-1 hover:cursor-pointer' : 'mx-1'"
          :sizes="ImgSize" @click="jump(slide.link ? slide.link : '-1')" />
      </div>
      <UCard v-if="slide.details" :ui="{
        divide: '',
        ring: '',
        rounded: '',
        shadow: '',
      }">
        <NuxtImg :src="slide.src" fit="contain" :class="slide.link ? 'mx-1 hover:cursor-pointer' : 'mx-1'"
          :sizes="ImgSize" @click="jump(slide.link ? slide.link : '-1')" />
        <template #footer>
          <div class="flex justify-end w-full">
            <div v-if="slide.details" class="right-20 w-32 h-20 text-sm">
              <div class="font-semibold text-white bg-red-800 text-center p-2">
                <ULink :to="slide.link">
                  {{ $t("About Us.EduHK.link") }}
                </ULink>
                <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
        </template>
      </UCard>
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