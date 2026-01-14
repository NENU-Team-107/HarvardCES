<script setup lang="ts">
import type { Speaker } from '~/lib/model';
import { invitedSpeakers2026 } from '~/lib/data';

defineOptions({
    name: "InvitedSpeakers",
});

definePageMeta({
    keepalive: true,
})

const speakersList = ref<Speaker[]>([])

const fetchSpeakers = async () => {
    try {
        const resp = await $fetch('/api/speaker/listByQuery', {
            method: 'GET',
            query: {
                kind: 'Invited Speakers',
                year: '2026'
            }
        })
        const { status, data } = resp as { status: string, data: Speaker[] | null }
        if (status === "Success" && data) {
            const apiIds = new Set(data.map(s => s.id))
            const merged = [...data, ...invitedSpeakers2026.filter(s => !apiIds.has(s.id))]
            merged.sort((a, b) => a.id - b.id)
            speakersList.value = merged
            return 'api'
        }
    } catch (e) {
        // ignore and fallback
    }
    // Fallback: use static dataset when API is unavailable in production
    speakersList.value = invitedSpeakers2026 as unknown as Speaker[]
    return 'fallback'
}

onMounted(() => {
    fetchSpeakers()
        .then(async () => {
            for (const speaker of speakersList.value) {
                try {
                    const image: Blob = await $fetch('/api/speaker/photo', {
                        method: 'GET',
                        query: {
                            photo: speaker.photo
                        }
                    })
                    speaker.photo = window.URL.createObjectURL(image)
                } catch (e) {
                    // Fallback to static file from public directory
                    speaker.photo = '/' + speaker.photo
                }
                const path = speaker.bio.details.link?.split('/')
                if (path) {
                    // TODO: 修改演讲者详情页面路径为2026年
                    speaker.bio.details.link = '/2026/speakers/speaker/' + path[path.length - 1]
                }
            }
            pending.value = false;
        })
        .catch(() => {
            pending.value = false
        })
})


const pending = ref(true)
</script>

<template>
    <div class="w-full h-full mx-10 my-5 pt-24">
        <div v-if="pending" class="justify-self-center">
            <UCommandPalette loading />
        </div>
        <div v-else>
            <div class="h-full w-full max-w-6xl justify-self-center hidden md:block">
                <div class="flex justify-center items-center ">
                    <div class="h-0.5 w-24 bg-black"/>
                    <h1 class="text-center font-bold text-2xl py-6 mx-6">
                        {{ $t('Invited Speakers') }}
                    </h1>
                    <div class="h-0.5 w-24 bg-black"/>
                </div>

                <div class="grid grid-cols-3 gap-5 justify-items-center items-start ">
                    <div v-for="speaker in speakersList" :key="speaker.id" class="w-full h-full">
                        <SpeakersIntroduction :speakers="speaker" class="mx-4 w-full h-full" />
                    </div>
                </div>
            </div>
            <div class="md:hidden">
                <div class="flex justify-center items-center ">
                    <div class="h-0.5 w-12 bg-black"/>
                    <h1 class="text-center font-bold text-2xl py-6 justify-self-center">
                        {{ $t('Invited Speakers') }}
                    </h1>
                    <div class="h-0.5 w-12 bg-black"/>
                </div>
                <div v-for="speaker in speakersList" :key="speaker.id">
                    <SpeakersIntroduction :speakers="speaker" class="mx-10 my-5 h-full " />
                </div>
            </div>
        </div>
    </div>
</template>
