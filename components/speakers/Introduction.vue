<script setup lang="ts">
import type { Speaker } from '~/lib/model';

const props = defineProps<{
    speakers: Speaker
}>()

</script>

<template>
  <UCard>
    <template #header>
      {{ props.speakers.bio.details.title }}
    </template>

    <div class="flex flex-col w-full">
      <UAvatar :src="props.speakers.photo" icon="i-heroicons-photo" class="w-24 h-24 rounded-full mx-auto" />
      <div class="font-bold text-center text-xl py-2">
        {{ props.speakers.name }}
      </div>
      <div>
        {{ props.speakers.bio.details.description }}
      </div>
    </div>

    <template #footer>
      <ULink :to="props.speakers.bio.details.link" class="italic font-semibold">
        Details
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </ULink>
    </template>

  </UCard>
</template>