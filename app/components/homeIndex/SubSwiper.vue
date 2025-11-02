<template>
  <div v-if="!cards" class="w-full">
    <div class="w-full justify-self-center items-center justify-center relative">
      <UCarousel
ref="carouselRef" :items="slides" :ui="{ item: 'basis-full lg:basis-1/3' }" :prev-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: 'hidden md:flex -start-12'
      }" :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: 'hidden md:flex -end-12'
      }" indicators>
        <template #default="{ item }">
          <div class="w-full flex justify-center items-center mb-6">
            <NuxtLink :to="item.link" class="w-full flex justify-center mx-5 items-center mb-6">
              <div
                class="flex justify-center items-center flex-col overflow-hidden text-center before:absolute before:h-1.1-full after:h-2-full after:-translate-y-1/2 after:absolute">
                <NuxtImg :src="item.src" draggable="false" class="w-full" loading="lazy" />
              </div>
            </NuxtLink>
          </div>
        </template>

      </UCarousel>
    </div>
  </div>
  <div v-else class="w-full flex flex-row">
    <div v-if="pending" class="justify-self-center">
      <UCommandPalette loading />
    </div>
    <div v-else class=" grid md:grid-cols-3 gap-4 px-10 flex-1">
      <div v-for="slide in slides" :key="slide.src" class=" relative h-full w-full">
        <UCard
v-if="slide.details" class="u-card-class" :ui="{
          // divide 属性不在 UCard 的 ui 类型定义中，故移除
          // ring 属性不在 UCard 的 ui 类型定义中，故移除
          root: 'rounded-none',
          // shadow 属性不在 UCard 的 ui 类型定义中，故移除
          body: 'w-full h-full bg-opacity-30',

          footer: 'flex justify-end w-full flex-col',
        }">
          <div class="max-h-[32rem] overflow-hidden flex-1 justify-center w-full flex">
            <NuxtImg
:src="slide.src" fit="contain" :class="slide.link ? 'mx-0 hover:cursor-pointer' : 'mx-0'"
              :sizes="ImgSize" preload @click="jump(slide.link ? slide.link : '-1')" />
          </div>
          <template #footer>
            <div class="flex w-full h-20">
              <div v-if="slide.details" class="w-11/12 text-sm justify-end flex relative">
                <div
                  class="font-semibold text-white bg-green-800 hover:bg-green-600 text-center p-2 h-fit absolute bottom-5 right-0">
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
  </div>
</template>
<script setup lang="ts">
import type { Poster, SwiperItem } from '~/lib/model';
import { useRouter } from 'vue-router';

const router = useRouter();
const { locale } = useI18n();

const posterList = ref<Poster[]>([]);

const slides = ref<SwiperItem[]>([]);

const ImgSize = ref("300")

const pending = ref(true)

const jump = (link: string) => {
  if (link === "-1")
    return;
  if (!link.startsWith('/')) {
    link = '/' + link
  }
  router.push(link)
}

const cards = defineModel('cards', {
  required: true,
  type: Boolean,
  default: false
});

// 添加年份版本支持
const year = defineModel('year', {
  required: false,
  type: String,
  default: '2025'
});

// 根据语言获取对应的图片路径
const getLocalizedImagePath = (poster: Poster) => {
  const currentLocale = locale.value;
  
  // 如果poster有多语言图片路径
  if (poster.pathEn || poster.pathZhHant) {
    switch (currentLocale) {
      case 'en':
        return poster.pathEn || poster.path;
      case 'zh-TW':
        return poster.pathZhHant || poster.path;
      case 'zh-CN':
      default:
        return poster.path;
    }
  }
  
  return poster.path;
}

const fetchPosters = async () => {
  const apiEndpoint = year.value === '2026' ? '/api/poster/listAll2026' : '/api/poster/listAll';
  
  const resp = await $fetch(apiEndpoint, {
    method: 'GET'
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    posterList.value = data;

    slides.value = data.map((poster) => {
      return {
        src: getLocalizedImagePath(poster),
        link: poster.link,
        details: true
      } as SwiperItem;
    })

    pending.value = false
  }
}

// 监听语言变化，重新获取本地化图片路径
watch(locale, () => {
  if (posterList.value.length > 0) {
    slides.value = posterList.value.map((poster) => {
      return {
        src: getLocalizedImagePath(poster),
        link: poster.link,
        details: true
      } as SwiperItem;
    })
  }
})

fetchPosters();</script>

<style>
.u-card-class>div {
  padding: 0 !important;
  /* 强制去除内边距 */
  height: 50%;
}
</style>