<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const navMenu = computed(() => {
    return [
        {
            label: t("Sub-symposium Sessions Submit"),
            content: "Sub-symposium Sessions",
        },

    ]
})

</script>

<template>
    <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
        <NuxtPage />
        <UTabs :items="navMenu" orientation="vertical"
            :ui="{ wrapper: 'flex gap-4 px-10', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5' } } }"
            class="bg-white/80 w-full h-full min-h-screen">
            <template #item>
                <div class="min-h-full flex flex-col px-20 py-10 bg-white/80">
                    <div class="flex justify-center items-center w-full flex-1">

                    </div>
                </div>
            </template>
        </UTabs>
    </div>
</template>
