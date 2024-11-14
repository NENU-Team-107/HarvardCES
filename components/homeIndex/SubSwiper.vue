<template>
  <div class="w-full justify-center items-center flex h-3/5">
    <CoverImage :Slides="slides" :ImgSize="'300'" />
  </div>
</template>
<script setup lang="ts">
import CoverImage from '~/components/homeIndex/CoverImage.vue'
import type { Poster, SwiperItem } from '~/lib/model';

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
        link: poster.link
      } as SwiperItem;
    })
  }
}

onMounted(() => {
  fetchPosters()
})

const posterList = ref<Poster[]>([]);

const slides = ref<SwiperItem[]>([])

</script>