<script setup lang="ts">
import type { Speaker } from '~/lib/model';

defineOptions({
    name: "KeynoteSpeakers",
});

definePageMeta({
    keepalive: true,
})

const speakersList = ref<Speaker[]>([])

const fetchSpeakers = async () => {
    const resp = await $fetch('/api/speaker/listByQuery', {
        method: 'GET',
        query: {
            kind: 'Invited Speakers'
        }
    })
    const { status, data } = resp
    if (status === "Success" && data !== null) {
        speakersList.value = data;
    }
}

onMounted(() => {
    fetchSpeakers()
        .then(async () => {
            for (const speaker of speakersList.value) {
                const image: Blob = await $fetch('/api/speaker/photo', {
                    method: 'GET',
                    query: {
                        photo: speaker.photo
                    }
                })
                speaker.photo = window.URL.createObjectURL(image)
                const path = speaker.bio.details.link?.split('/')
                if (path) {
                    speaker.bio.details.link = '/speakers/speaker/' + path[path.length - 1]
                }
            }
            pending.value = false;
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