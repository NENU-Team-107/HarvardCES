<script lang="ts" setup>
import SubSwiper from '~/components/homeIndex/SubSwiper.vue';
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import type { TabItems } from '~/lib/model';

const { t } = useI18n()

const tabMenuBase = ref<TabItems[]>([
  {
    label: t("pSession.sub-symposium"),
    content: "pSession.sub-symposium",
    show: true,
    index: 0,
  },
  {
    label: t("pSession.poster"),
    content: "pSession.poster",
    show: false,
    index: 1,
  }
])


const toggleShowMore = (index: number) => {
  tabMenuBase.value[index].show = !tabMenuBase.value[index].show;
}
</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <NuxtPage />

    <div class="hidden md:flex justify-center w-full min-h-screen">
      <TabsRoot :default-value="tabMenuBase.at(0)?.content" orientation="vertical" class="flex w-full max-w-7xl">
        <TabsList
          class="flex flex-col min-w-52 items-center h-fit sticky top-24 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <TabsIndicator
            class="w-[3px] h-[48px] absolute left-1 top-1 translate-y-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
            <div class="bg-blue-600 w-full h-full" />
          </TabsIndicator>
          <TabsTrigger class="px-4 h-[60px] flex items-center text-base leading-none text-balck dark:text-gray-300 select-none min-w-fit
        hover:text-blue-500
        data-[state=active]:text-blue-600
        outline-none cursor-pointer transition-all
        border-b border-gray-300 dark:border-gray-600
        last:border-b-0
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[0px] 
        before:bg-grass9 before:transform before:-translate-x-full
        before:transition-transform before:duration-200
        hover:before:translate-x-0
        data-[state=active]:before:translate-x-0" v-for="item in tabMenuBase" :value="item.content">
            {{ $t(item.label) }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="item in tabMenuBase" :value="item.content" class="min-w-screen">
          <div v-if="item.index === 0">
            <SubSwiper :cards="true" />
          </div>
        </TabsContent>
      </TabsRoot>
    </div>

    <div class="md:hidden">
      <div v-for="item in tabMenuBase">
        <UCard :ui="{
          base: '',
          padding: 'p-0',
          background: 'bg-white dark:bg-gray-900',
          divide: 'divide-y divide-gray-200 dark:divide-gray-800',
          ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
          rounded: 'rounded-lg',
          shadow: 'shadow',
          body: {
            base: 'w-full h-full',
            background: 'bg-tabs-header',
            padding: 'p-0'
          },
        }">
          <template #header>
            <div class="flex w-full justify-between">
              <span class="text-xl font-bold">{{ item.label }}</span>
              <button @click="toggleShowMore(item.index)">
                <span v-if="item.show">
                  <font-awesome icon="fa-solid fa-angle-up" />
                  {{ $t("Collapse") }}
                </span>
                <span v-else>
                  <font-awesome icon="fa-solid fa-angle-down" />
                  {{ $t("Show More") }}
                </span>
              </button>
            </div>
          </template>

          <div class="w-full min-w-screen-md">
            <div v-if="item.index === 0 && item.show">
              <SubSwiper :cards="true" />
            </div>
          </div>

        </UCard>
      </div>
    </div>
  </div>
</template>
