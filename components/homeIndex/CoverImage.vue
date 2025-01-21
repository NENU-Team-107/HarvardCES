<script setup lang="ts">
import type { SwiperItem } from '~/lib/model';
import Loading from '~/components/common/Loading.vue';

const slides = ref<SwiperItem[]>([
  { src: "img/poster/cover/victories.jpg", },
  { src: "img/poster/cover/zh-Hans.jpg", },
  { src: "img/poster/cover/zh-Hant.jpg", },
  { src: "img/poster/cover/eduhk.jpg", }
]);

const pending = ref(true);
const checkImagesLoaded = () => {
  let loadedCount = 0;
  slides.value.forEach(slide => {
    const img = new Image();
    img.src = slide.src;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === slides.value.length) {
        pending.value = false;
      }
    };
  });
};

const coverRef = ref();
const coverbgRef = ref();
const bgSrc = ref("");
onMounted(() => {
  checkImagesLoaded();
  setInterval(() => {
    if (!coverRef.value || !coverbgRef.value) return;
    if (coverRef.value.page === coverRef.value.pages) {
      coverbgRef.value.select(0);
      return coverRef.value.select(0);
    }
    coverbgRef.value.next();
    coverRef.value.next();
  }, 3000)

});
</script>

<template>
  <div class="flex w-full items-center justify-center justify-self-center duration-200">
    <div v-if="pending" class="justify-self-center">
      <Loading />
    </div>
    <div v-else class="relative w-full flex justify-center items-center h-[900px] overflow-hidden">
      <div class="absolute top-0 left-0 inset-0">
        <div
          class="bg-center bg-cover blur-sm opacity-90 z-10 bg-fixed  flex justify-center item-center h-[895px] overflow-hidden">
          <UCarousel ref="coverbgRef" :items="slides"
            :ui="{ item: 'basis-full lg:basis-full flex justify-center item-center' }" indicators>
            <template #default="{ item }">
              <NuxtImg :src="item.src" fit="contain" draggable="false" class="w-full overflow-hidden" />
            </template>
          </UCarousel>
        </div>
      </div>
      <UCarousel ref="coverRef" :items="slides"
        :ui="{ item: 'basis-full lg:basis-full flex justify-center item-center' }" indicators>
        <template #default="{ item }">
          <NuxtImg :src="item.src" fit="contain" draggable="false" class="w-11/12 box-shadow" />
        </template>
      </UCarousel>
    </div>
  </div>
</template>

<style scoped>
.box-shadow {
  border-radius: 10px;
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
}
</style>