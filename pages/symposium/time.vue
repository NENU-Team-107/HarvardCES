<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import mediumZoom from 'medium-zoom'

const AgendaImage = ref([
  "./img/poster/Agenda-day1-en.png",
  "./img/poster/Agenda-day2-en.png",
  "./img/poster/Agenda-day3-en.png",
])

</script>

<template>
  <div class="max-w-8xl mx-10 my-5 pt-24 w-full h-full bg-white/50 shadow-2xl ">

    <div class="md:flex hidden flex-col px-8 md:px-16 py-4  h-full w-full  border-1 rounded-lg self-center">
      <div class="flex justify-center items-center text-4xl my-4 font-bold">
        <div class="h-0.5 w-20 bg-black"></div>
        <h1 class="mx-4">{{ $t("Symposium Time") }} </h1>
        <div class="h-0.5 w-20 bg-black"></div>
      </div>
      <div class="w-full">
        <!-- <NuxtImg :src="AgendaImage" loading="lazy" class="w-full object-cover" /> -->
        <div class="flex flex-col gap-4 items-center justify-center">
          <div v-for="(image, index) in AgendaImage">
            <NuxtImg :src="image" loading="lazy" class="w-full object-cover" data-zoomable="" />
          </div>
        </div>
        <div class="text-center my-2">
          <i>{{ $t("Agenda Note") }}</i>
        </div>
      </div>
    </div>

    <div class="md:hidden px-8">
      <div class="w-full">
        <!-- <NuxtImg :src="AgendaImage" loading="lazy" class="w-full object-cover" /> -->
        <div class="flex flex-col gap-4 items-center justify-center">
          <div v-for="(image, index) in AgendaImage">
            <NuxtImg :src="image" loading="lazy" class="w-full object-cover" data-zoomable="" />
          </div>
        </div>
        <div class="text-center text-xs my-2">
          <i>{{ $t("Agenda Note") }}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>