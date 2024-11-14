<script setup lang="ts">
const props = defineProps<{
    titleMap: string
}>()
</script>

<template>
    <div class="relative mb-8">
        <div
            class="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-black dark:border-t-white border-r-[20px] border-r-transparent">
        </div>
        <h2 class="text-3xl font-bold text-gray-800 dark:text-white/90 pl-6">
            {{ $t(props.titleMap) }}
        </h2>
    </div>
</template>