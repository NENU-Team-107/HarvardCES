<script setup lang="ts">
import type { Speaker } from '~/lib/model';

const props = defineProps<{
  speakers: Speaker
}>()

const { t } = useI18n()

const inc = computed(() => {
  return t(props.speakers.inc).replace(/\n/g, '<br>')
})


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
      <NuxtImg class="min-w-3/5 max-h-44 mx-auto rounded-full" :src="props.speakers.photo" :alt="props.speakers.name"
        preload />
      <div class="font-bold text-center text-xl mt-2">
        {{ $t(props.speakers.name) }}
      </div>
      <div class="text-center w-full flex justify-center items-center h-full my-auto" v-html="inc">
      </div>
    </div>

    <template #footer>
      <ULink :to="props.speakers.bio.details.link"
        class="italic font-semibold hover:text-blue-600 text-black hover:transition-all hover:-translate-y-1 hover:scale-110 duration-300">
        {{ $t("Details") }}
        <font-awesome icon="fa-solid fa-arrow-right" />
      </ULink>
    </template>

  </UCard>
</template>