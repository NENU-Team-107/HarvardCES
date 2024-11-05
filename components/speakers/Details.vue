<script lang="ts" setup>
import type { Speaker } from '~/lib/model.ts'
import Introduction from '~/components/speakers/Introduction.vue'
const props = defineProps<{
  speaker: Speaker,
}>()

</script>

<template>
  <!-- <div class="flex w-full flex-col h-full">
    {{ props.speaker }}
  </div> -->
  <Introduction :speakers="props.speaker" />
</template>