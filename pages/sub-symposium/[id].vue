<script setup lang="ts">
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import type { ApiResponse, Poster, Speaker } from '~/lib/model.ts';

const route = useRoute()

const poster = ref<Poster>()

const pdfurl = ref<string>()
const pending = ref(true)

const getPoster = async (id: number) => {
  const { data: resp } = await useFetch<ApiResponse<Poster>>('/api/poster/getByID', {
    method: 'GET',
    query: {
      id: id
    }
  });
  if (resp.value !== null && resp.value.data) {
    poster.value = resp.value.data;
    pending.value = false
  }
}


getPoster(Number.parseInt(route.params.id as string))
  .then(async () => {
    if (poster.value) {
      const { data } = await useFetch('/api/poster/getCallByID', {
        method: 'GET',
        query: {
          path: poster.value.callPath
        },
        responseType: 'blob'
      })
      if (data.value) {
        const file = window.URL.createObjectURL(data.value as Blob);
        pdfurl.value = file
      }
    }
  })

const { pdf, pages } = usePDF(pdfurl)

</script>

<template>

  <div v-if="pending" class="justify-self-center">
    <UCommandPalette loading />
  </div>
  <div v-else>
    <div class="w-full h-full min-h-screen mx-10 pt-24 md:flex hidden justify-center items-center">
      <!-- TODO 尝试在这里贴上一个 pdf 文件，但中英文显示不一样 -->
      <div class="flex flex-row justify-between w-full h-full px-20 pb-6 items-center">
        <div class="w-full flex-row justify-center items-center">
          <div class="flex-1 flex">
            <ClientOnly>
              <div v-for="page in pages" :key="page" class="w-full flex justify-center items-center px-auto">
                <VuePDF :pdf="pdf" :page="page" class="w-full h-auto flex justify-center items-center relative"
                  fit-parent />
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden w-full min-h-screen py-5">
      <div class="w-full py-20">
        <ClientOnly>
          <div v-for="page in pages" :key="page" class="w-full justify-center items-center">
            <VuePDF :pdf="pdf" :page="page" class="w-full h-auto justify-center items-center" fit-parent />
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>