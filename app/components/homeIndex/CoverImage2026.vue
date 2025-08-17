<script setup lang="ts">
import type { SwiperItem } from '~/lib/model';
import Loading from '~/components/common/Loading.vue';

const slides = ref<SwiperItem[]>([
  { src: "~/public/img/poster/cover/2026/1b8d2391a5aea30c0977fe499a7f4b5.jpg", },
  { src: "~/public/img/poster/cover/2026/7273e92d03483b34e198f87c2dc473a.jpg", },
  { src: "~/public/img/poster/cover/2026/79ec2d32cb98314ba325887c4a6dd85.jpg", },
  { src: "~/public/img/poster/cover/2026/7f6364fd373386ec70fc7c434349590.jpg", },
  { src: "~/public/img/poster/cover/2026/d027d8ae87e883d4fb920b6ef35bc76.jpg", },
  { src: "~/public/img/poster/cover/2026/d0d0fb987942255a9b7ad4206725537.jpg", },
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
  <div class="flex w-full items-center justify-center justify-self-center duration-200 mt-12">
    <div v-if="pending" class="justify-self-center">
      <Loading />
    </div>
    <div v-else class="w-4/5 flex justify-center items-center overflow-hidden mt-4">
      <UCarousel
        ref="coverRef" :items="slides"
        :ui="{ item: 'basis-full lg:basis-full flex justify-center item-center' }" indicators>
        <template #default="{ item }">
          <NuxtImg :src="item.src" fit="cover" draggable="false" class="w-11/12 box-shadow" />
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