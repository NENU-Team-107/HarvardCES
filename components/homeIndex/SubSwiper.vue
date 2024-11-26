<template>
  <div v-if="!cards" class="w-full">
    <div class="w-full justify-self-center items-center justify-center relative">
      <UCarousel ref="carouselRef" , :items="slides" :ui="{ item: 'basis-full lg:basis-1/3' }" class="" arrows
        :prev-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: '-start-12 h-full w-10 border-none duration-200 hover:bg-gray-200/80',
  variant: 'link',
          square: true
        }" :next-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          class: '-end-12 h-full w-10 border-none duration-200 hover:bg-gray-200/80',
          variant: 'link'
        }" indicators>
        <template #default="{ item }">
          <div class="w-full flex justify-center items-center mb-6">
            <NuxtLink :to="item.link" class="w-full flex justify-center mx-5 items-center mb-6">
              <div
                class="flex justify-center items-center flex-col overflow-hidden text-center before:absolute before:h-1.1-full after:h-2-full after:-translate-y-1/2 after:absolute">
                <NuxtImg :src="item.src" draggable="false" class="w-full" loading="lazy" />
                <!-- <div class="flex ease-in-out duration-700">
                  <h1>Title</h1>
                </div> -->
              </div>
            </NuxtLink>
          </div>
        </template>

        <template #indicator="{ onClick, page, active }">
          <UButton :variant="active ? 'solid' : 'outline'" size="2xs" color="rose" class="rounded-full min-w-4 "
            @click="onClick(page)" />
        </template>

        <!-- <template #indicator="{ onClick, page, active }">
          <UButton :label="String(page)" :variant="active ? 'solid' : 'outline'" size="2xs"
            class="rounded-full min-w-6 justify-center" @click="onClick(page)" />
        </template> -->

        <!-- <template #prev="{ onClick, disabled }">
          <UButton :disabled="disabled" @click="onClick" color="sky">
            {{ $t("Prev") }}
            <template #leading>
              <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5" />
            </template>
          </UButton>
        </template>

        <template #next="{ onClick, disabled }">
          <UButton :disabled="disabled" @click="onClick" color="sky">
            {{ $t("Next") }}
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
            </template>
          </UButton>
        </template> -->

      </UCarousel>
    </div>
  </div>
  <div v-else class="w-full flex flex-row">
    <div class="grid md:grid-cols-3 gap-4 px-10 flex-1">
      <div v-for="slide in slides" class=" relative h-full w-full">
        <UCard v-if="slide.details" class="u-card-class" :ui="{
          base: '',
          divide: '',
          ring: '',
          rounded: '',
          shadow: '',
          background: 'w-full h-full',

          footer: {
            base: 'flex justify-end w-full flex-col',
          }
        }">
          <div class="max-h-[32rem] overflow-hidden flex-1 justify-center w-full flex">
            <NuxtImg :src="slide.src" fit="contain" :class="slide.link ? 'mx-0 hover:cursor-pointer' : 'mx-0'"
              :sizes="ImgSize" @click="jump(slide.link ? slide.link : '-1')" />
          </div>
          <template #footer>
            <div class="flex w-full h-20">
              <div v-if="slide.details" class="w-11/12 text-sm justify-end flex relative">
                <div
                  class="font-semibold text-white bg-green-800 hover:bg-green-600 text-center p-2 h-fit absolute bottom-0 right-0">
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

const fetchPosters = async () => {
  const resp = await $fetch('/api/poster/listAll', {
    method: 'GET'
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    posterList.value = data;
    slides.value = data.map((poster) => {
      return {
        src: poster.path,
        link: poster.link,
        details: true
      } as SwiperItem;
    })

  }
}

const posterList = ref<Poster[]>([]);

const slides = ref<SwiperItem[]>([]);

const ImgSize = ref("300")

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

fetchPosters()

</script>

<style>
.u-card-class>div {
  padding: 0 !important;
  /* 强制去除内边距 */
  height: 50%;
}

/* .swiper-container>div>div {
  display: relative;
} */
</style>