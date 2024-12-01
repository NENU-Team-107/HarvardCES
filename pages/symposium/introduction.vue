<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


const Introduction = computed(() => {
    return t("Symposium.Details").replace(/\n/g, '<br>')
})
</script>

<template>
    <div class="max-w-6xl mx-10 my-5 pt-24">
        <CommonBreads />
        <div
            class="md:flex flex-col px-8 md:px-16 bg-white/50 py-10  min-h-screen w-full shadow-2xl  border-1 rounded-lg self-center relative hidden">

            <div class=" leading-6">
                <div class="w-32 mx-0 my-0 z-30 float-right justify-self-end absolute right-0 top-0 rotate-12">
                    <NuxtImg src="/img/poster/Rainbowonly_organgeFlower_Small.svg" />
                </div>
                <h1 class="text-center font-bold text-2xl py-6">
                    {{ $t('Symposium.Name') }}
                </h1>

                <div class="text-justify indent-8 text-lg">
                    <div v-html="Introduction"></div>
                </div>
            </div>
        </div>
        <div class="md:hidden flex-col px-4 bg-white/50 py-10  h-full w-full shadow-2xl relative">
            <div class="w-16 mx-0 my-0 z-30 float-right justify-self-end absolute right-0 top-0 rotate-12">
                <NuxtImg src="/img/poster/Rainbowonly_organgeFlower_Small.svg" />
            </div>
            <h1 class="text-center font-bold text-xl py-6">
                {{ $t('Symposium.Name') }}
            </h1>
            <div class="flex justify-center items-center w-full text-sm">
                <div class="text-justify indent-6" v-html="Introduction" />
            </div>
        </div>
    </div>
</template>