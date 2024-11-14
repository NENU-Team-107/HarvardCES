<script setup lang="ts">

import type { ApiResponse, Poster, Speaker } from '~/lib/model.ts';

const route = useRoute()

const poster = ref<Poster>()
const callImage = ref<string>('./assets/poster/sub1-zh.pdf')

const getPoster = async (id: number) => {
  const { data: resp } = await useFetch<ApiResponse<Poster>>('/api/poster/getByID', {
    method: 'GET',
    query: {
      id: id
    }
  });
  if (resp.value !== null && resp.value.data) {
    poster.value = resp.value.data;
  }
}

getPoster(Number.parseInt(route.params.id as string))
  .then(async () => {
    // TODO pdf 的显示
    if (poster.value) {
      const pdf: Blob = await $fetch('/api/poster/getCallByID', {
        method: 'GET',
        query: {
          path: poster.value.callPath

        }
      })
      // callImage.value = window.URL.createObjectURL(image)
      callImage.value = URL.createObjectURL(pdf);
    }
  })

</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 pt-24 flex justify-center items-center">
    <!-- TODO 尝试在这里贴上一个 pdf 文件，但中英文显示不一样 -->
    <div class="flex flex-row justify-between w-full h-full px-20 pb-6 items-center">
      <div class="flex-1 w-full h-full">
        <NuxtImg :src="poster?.path" />
      </div>
      <div v-show="callImage !== undefined" class="w-3/4 flex-2 flex-row justify-center items-center">
        <div class="flex-1 flex">
          <PosterPDFViewer :pdfPath="callImage" />
        </div>
      </div>
    </div>
  </div>
</template>