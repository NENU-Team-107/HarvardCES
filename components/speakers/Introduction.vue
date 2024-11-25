<script setup lang="ts">
import type { Speaker } from '~/lib/model';

const props = defineProps<{
  speakers: Speaker
}>()

const { t } = useI18n()

const title = computed(() => {
  return t(props.speakers.bio.details.title).replace(/\n\n/g, '<br>')
})

</script>

<template>
  <UCard>
    <div class="flex flex-col w-full">
      <NuxtImg class="min-w-3/5 max-h-44 mx-auto rounded-full" :src="props.speakers.photo" :alt="props.speakers.name"
        preload />
      <div class="font-bold text-center text-xl py-2">
        {{ $t(props.speakers.name) }}
      </div>
      <div class="text-center" v-html="title">
      </div>
    </div>

    <template #footer>
      <ULink :to="props.speakers.bio.details.link" class="italic font-semibold">
        {{ $t("Details") }}
        <font-awesome icon="fa-solid fa-arrow-right" />
      </ULink>
    </template>

  </UCard>
</template>