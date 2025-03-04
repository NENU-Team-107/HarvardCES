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
        <div class="grid grid-cols-4 h-full">
          <div class="flex justify-center items-center col-span-1">
            <NuxtImg :src="props.speaking.photo" class="min-w-3/5 max-h-44 mx-auto rounded-full"
              :alt="props.speaking.name" preload />
          </div>
          <div class="flex flex-col justify-center items-start col-span-3">
            <h2 class="text-2xl font-bold">{{ $t(props.speaking.name) }}</h2>
            <!-- <h3 class="text-base font-normal">{{ $t(props.speaking.inc) }}</h3> -->
            <h3 class="text-base font-normal" v-html="$t(props.speaking.inc)"></h3>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 text-lg w-full my-4">
      <div class="text-center font-semibold ">Title:</div>
      <div class="font-semibold col-span-5">{{ $t(props.speaking.title) }}</div>
      <div class="text-center font-semibold ">Abstract:</div>
      <div class="font-normal col-span-5">
        {{ $t(props.speaking.abstract) }}
      </div>
    </div>
  </div>
</template>