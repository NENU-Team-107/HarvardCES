<script lang="ts" setup>
import type { SpeakingInfo } from '~/lib/model';

const props = defineProps<{
  speaking: SpeakingInfo,
}>();


</script>

<template>
  <div class="flex flex-col w-full justify-center items-center my-2">
    <div class="flex flex-col justify-center items-center w-full h-full">
      <div class="w-full mx-auto ">
        <div class="grid md:grid-cols-4 h-full">
          <div class="flex justify-center items-center col-span-1 w-full">
            <NuxtImg :src="props.speaking.photo" class="min-w-3/5 max-h-44 mx-auto rounded-full"
              :alt="props.speaking.name" preload />
          </div>
          <div class="flex flex-col justify-center md:items-start items-center md:col-span-3">
            <h2 class="md:text-2xl text-xl font-bold">{{ $t(props.speaking.name) }}</h2>
            <h3 class="md:text-base text-sm font-normal" v-html="$t(props.speaking.inc)"></h3>
          </div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-6 grid-cols-5 md:text-lg text-sm w-full my-4">
      <div class="text-right font-semibold">Title:</div>
      <div class="font-semibold md:col-span-5 col-span-4 pl-2">{{ $t(props.speaking.title) }}</div>
      <div class="text-right font-semibold">Abstract:</div>
      <div class="font-normal md:col-span-5 col-span-4 pl-2">
        {{ $t(props.speaking.abstract) }}
      </div>
    </div>
  </div>
</template>