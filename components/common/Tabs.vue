<script setup lang="ts">
import type { TabItems } from '~/lib/model';
import { TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

const tabMenuBase = defineModel('tabMenuBase', {
    required: true,
    type: Array as () => TabItems[],
    default: () => []
})
</script>

<template>
    <div class="hidden md:flex justify-center w-full min-h-screen">
        <TabsRoot :default-value="tabMenuBase.at(0)?.label" orientation="vertical" class="flex w-full max-w-7xl">
            <TabsList
                class="flex flex-col min-w-40 max-w-fit items-center h-fit sticky top-24 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                <TabsIndicator
                    class="w-[2px] h-[48px] absolute left-1 top-1 translate-y-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
                    <div class="bg-green-600 w-full h-full" />
                </TabsIndicator>
                <TabsTrigger class="relative px-8 h-[60px] flex items-center text-base leading-none text-gray-600 dark:text-gray-300 select-none
        hover:text-green-600
        data-[state=active]:text-green-600 data-[state=active]:font-semibold
        outline-none cursor-pointer transition-all
        border-b border-gray-200 dark:border-gray-600
        last:border-b-0
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] 
        before:bg-grass9 before:transform before:-translate-x-full
        before:transition-transform before:duration-200
        hover:before:translate-x-0
        data-[state=active]:before:translate-x-0" v-for="item in tabMenuBase" :value="item.label">
                    {{ $t(item.label) }}
                </TabsTrigger>
            </TabsList>
            <slot />
        </TabsRoot>
    </div>
</template>