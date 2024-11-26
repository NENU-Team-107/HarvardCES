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
        <TabsRoot :default-value="tabMenuBase.at(0)?.content" orientation="vertical" class="flex w-full max-w-7xl">
            <TabsList class="flex flex-col w-60 items-center h-fit sticky top-24 bg-gray-100 rounded-lg shadow-md">
                <TabsIndicator
                    class="w-[3px] h-[48px] absolute left-1 top-1 translate-y-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
                    <div class="bg-blue-500 w-full h-full" />
                </TabsIndicator>
                <TabsTrigger class="relative px-8 h-[60px] flex items-center text-base leading-none text-black  select-none
        hover:text-blue-500
        data-[state=active]:text-blue-600
        outline-none cursor-pointer transition-all
        border-b border-gray-200
        last:border-b-0
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] 
        before:bg-grass9 before:transform before:-translate-x-full
        before:transition-transform before:duration-200
        hover:before:translate-x-0
        data-[state=active]:before:translate-x-0" v-for="item in tabMenuBase" :value="item.content">
                    {{ $t(item.content) }}
                </TabsTrigger>
            </TabsList>
            <slot />
        </TabsRoot>
    </div>
</template>