<script setup lang="ts">
import type { SwiperItem } from '~/lib/model';
import Loading from '~/components/common/Loading.vue';
// const slides = ref([
//   "img/poster/cover_zh_Hans.jpg",
//   "img/poster/cover_zh_Hant.jpg"
// ]);
const slides = ref<SwiperItem[]>([
  { src: "img/poster/cover/zh-Hans.jpg", },
  { src: "img/poster/cover/zh-Hant.jpg", }
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
console.log(slides.value);

const coverRef = ref(null);

onMounted(() => {
  checkImagesLoaded();
  setInterval(() => {
    if (!coverRef.value) return

    if (coverRef.value.page === coverRef.value.pages) {
      return coverRef.value.select(0)
    }

    coverRef.value.next()
  }, 3000)
});


</script>

<template>
  <div class="md:w-4/6 w-full items-center justify-center justify-self-center duration-200 my-auto">
    <div v-if="pending" class="justify-self-center p-73">
      <Loading />
    </div>
    <UCarousel v-else ref="coverRef" :items="slides" :ui="{ item: 'basis-full lg:basis-full' }" indicators>
      <template #default="{ item }">
        <NuxtImg :src="item.src" draggable="false" class="w-full" />
      </template>
    </UCarousel>
  </div>
</template>