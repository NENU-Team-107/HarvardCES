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
    <div class="w-full h-full min-h-screen mx-10 y-5 pt-24">
        <!-- TODO 尝试在这里贴上一个 pdf 文件，但中英文显示不一样 -->
        <div class="flex">
            <div class="flex-1">
                <NuxtImg :src="poster?.path" sizes="500" />
            </div>
            <div class="flex-1 h-full w-full" v-if="callImage !== undefined">
                <!-- <PSPDFKitContainer :pdfFile="callImage" /> -->
                <ClientOnly>
                    <PosterPDFViewer :pdfPath="callImage" />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>