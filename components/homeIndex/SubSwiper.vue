<template>
  <div class="w-full justify-center items-center flex h-ful">
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperAutoplay]" :slides-per-view="3"
      :space-between="10" :loop="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: true
      }" :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      }">

      <SwiperSlide v-for="(slide, idx) in slides" :key="idx"
        class="w-full flex justify-center items-center h-fit relative">
        <UCard v-if="slide.details" :ui="{
          divide: '',
          ring: '',
          rounded: '',
          shadow: '',
          background: 'dark:bg-gray-900/80'
        }">
          <!-- 固定高度的图片容器 -->
          <div class="h-[400px] overflow-hidden">
            <NuxtImg :src="slide.src" fit="contain" :class="[
              slide.link ? 'hover:cursor-pointer' : '',
              'w-full h-full object-contain'
            ]" :sizes="ImgSize" @click="jump(slide.link ? slide.link : '-1')" />
          </div>

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

    <!-- <CoverImage :Slides="slides" :ImgSize="'300'" /> -->
  </div>
  <!-- <div class="w-full flex flex-row">
    <div class="h-full ">
      <font-awesome icon="fa-solid fa-arrow-left" @click="handleChange(-1)" />
    </div>
    <div class="grid md:grid-cols-3 gap-4 px-10 flex-1">
      <div v-for="slide in subslides" class="dark:text-white">
        <UCard v-if="slide.details" :ui="{
          divide: '',
          ring: '',
          rounded: '',
          shadow: '',
          background: 'dark:bg-gray-900/80'
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
</div>
</div>
<div>
  <font-awesome icon="fa-solid fa-arrow-right" @click="handleChange(1)" />
</div>
</div> -->
</template>
<script setup lang="ts">
// import CoverImage from '~/components/homeIndex/CoverImage.vue'
import type { Poster, SwiperItem } from '~/lib/model';
import { useRouter } from 'vue-router';

const router = useRouter();

const fetchPosters = async () => {
  const resp = await $fetch('/api/poster/listAll', {
    method: 'GET'
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    posterList.value = data;
    console.log(posterList.value)
    slides.value = data.map((poster) => {
      return {
        src: poster.path,
        link: poster.link,
        details: true
      } as SwiperItem;
    })
    subslides.value = slides.value.slice(0, 3);
  }
}

onMounted(() => {
  fetchPosters()
})

const posterList = ref<Poster[]>([]);

const slides = ref<SwiperItem[]>([]);

const subslides = ref<SwiperItem[]>([]);
const currentPos = ref(0);
const handleChange = (index: number) => {
  if (index == -1) {
    currentPos.value -= 1;
    if (currentPos.value < 0) {
      currentPos.value = slides.value.length - 1;
    }
    for (let i = 0; i < 3; i++) {
      subslides.value[i] = slides.value[(currentPos.value + i) % slides.value.length];
    }
  } else {
    currentPos.value += 1;
    if (currentPos.value >= slides.value.length) {
      currentPos.value = 0;
    }
    for (let i = 0; i < 3; i++) {
      subslides.value[i] = slides.value[(currentPos.value + i) % slides.value.length];
    }
  }
}

const ImgSize = ref("300")

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