<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const AgendaImage = computed(() => {
    return t("Symposium Agenda")
})
</script>

<template>
    <div class="max-w-6xl mx-10 my-5 pt-24">
        <div
            class="md:flex hidden flex-col px-8 md:px-16 bg-white/50 py-4  h-full w-full shadow-2xl  border-1 rounded-lg self-center relative">
            <div class="w-full">
                <NuxtImg :src="AgendaImage" loading="lazy" class="w-full object-cover" />
            </div>
        </div>

        <div class="md:hidden">
            <div class="w-full">
                <NuxtImg :src="AgendaImage" loading="lazy" class="w-full object-cover" />
            </div>
        </div>
    </div>
</template>