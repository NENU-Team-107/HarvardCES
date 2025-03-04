<script lang="ts" setup>
import type { SpeakingInfo } from '~/lib/model';

const props = defineProps<{
  speaking: SpeakingInfo,
}>();


</script>

<template>
  <UCard :ui="{
    base: 'h-full flex flex-col justify-between items-center',
    body: {
      base: 'min-h-5/6 max-h-5/6 h-full',
      background: '',
      padding: 'px-4 py-4 sm:px-6'
    },
    footer: {
      base: 'min-h-1/6 max-h-1/6',
      background: '',
      padding: 'px-4 py-4 sm:px-6'
    }
  }">
    <div class="flex flex-col justify-center items-center w-full h-full">
      {{ props }}
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="flex justify-center items-center">
          <img :src="props.speaking.photo" class="w-40 h-40 rounded-full" />
        </div>
        <div class="flex flex-col justify-center items-center mt-4">
          <h2 class="text-2xl font-bold">{{ props.speaking.name }}</h2>
          <h3 class="text-lg font-semibold">{{ props.speaking.title }}</h3>
          <p class="text-base font-normal">{{ props.speaking.inc }}</p>
          <div :href="props.speaking.abstract" class="text-base font-normal text-blue-500">
            {{ props.speaking.abstract }}
          </div>
        </div>
      </div>
    </div>

    <template #footer>
    </template>
  </UCard>
</template>