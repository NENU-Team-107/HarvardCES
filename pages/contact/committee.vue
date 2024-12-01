<script setup lang="ts">
import type { Speaker } from '~/lib/model';

const speakersList = ref<Speaker[]>([])
const blobMap: Map<string, string> = new Map()

const fetchSpeakers = async () => {
    const resp = await $fetch('/api/speaker/listByQuery', {
        method: 'GET',
        query: {
            kind: 'Organizing Committee'
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
            }
        })
    pending.value = false;
})


const pending = ref(true)
</script>

<template>
    <div class="w-full h-full mx-10 my-5 pt-24">
        <div v-if="pending" class="justify-self-center">
            <UCommandPalette loading />
        </div>
        <div class="max-w-6xl h-full justify-self-center md:flex hidden">
            <div>
                <h1 class="text-center font-bold text-2xl py-6">
                    {{ $t('Organizing Committee') }}
                </h1>
                <div class="grid grid-cols-3 gap-5 justify-items-center items-start ">
                    <div v-for="speaker in speakersList" class="w-full h-full">
                        <SpeakersIntroduction :speakers="speaker" class="mx-4 w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
        <div class="md:hidden">
            <div>
                <h1 class="text-center font-bold text-xl">
                    {{ $t('Organizing Committee') }}
                </h1>
            </div>
            <div v-for="speaker in speakersList">
                <SpeakersIntroduction :speakers="speaker" class="mx-10 my-5 h-full " />
            </div>
        </div>
    </div>

</template>