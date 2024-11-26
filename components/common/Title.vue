<script setup lang="ts">
const props = defineProps<{
  titleMap: string
}>()
</script>

<template>
  <div class="relative md:mb-8 mb-4">
    <div class="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-black  border-r-[20px] border-r-transparent">
    </div>
    <h2 class="md:text-3xl text-xl font-bold text-gray-800 pl-6">
      {{ $t(props.titleMap) }}
    </h2>
  </div>
</template>