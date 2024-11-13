<script setup lang="ts">
import Details from '~/components/speakers/Details.vue';
import type { ApiResponse, Poster, Speaker } from '~/lib/model.ts';

const route = useRoute()

const poster = ref<Poster>()
const callImage = ref<string>()

const getPoster = async (id: number) => {
    const resp = await $fetch<ApiResponse<Poster>>('/api/poster/getByID', {
        method: 'GET',
        query: {
            id: id
        }
    });
    if (resp && 'status' in resp && 'data' in resp) {
        const { status, data } = resp;
        if (status === 'Success' && data !== null) {
            poster.value = data;
        }
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
        }
    })

</script>

<template>
    <div class="w-full h-full min-h-screen mx-10 y-5 pt-24">
        <!-- TODO 尝试在这里贴上一个 pdf 文件，但中英文显示不一样 -->

    </div>
</template>