<script lang="ts" setup>
import SubSwiper from '~/components/homeIndex/SubSwiper.vue';
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import type { TabItems } from '~/lib/model';

const { t } = useI18n()

const tabMenuBase = ref<TabItems[]>([
  {
    label: t("pSession.sub-symposium"),
    content: "pSession.sub-symposium",
    show: false,
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
        <TabsList class="flex flex-col w-60 items-center h-fit sticky top-24 bg-gray-100 rounded-lg shadow-md">
          <TabsIndicator
            class="w-[3px] h-[48px] absolute left-1 top-1 translate-y-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
            <div class="bg-blue-600 w-full h-full" />
          </TabsIndicator>
          <TabsTrigger class="px-10 min-w-60 justify-self-center h-[60px] flex items-center text-base leading-none text-black  select-none
        hover:text-blue-500
        data-[state=active]:text-blue-600
        outline-none cursor-pointer transition-all
        border-b border-gray-200
        last:border-b-0
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[0px] 
        before:bg-grass9 before:transform before:-translate-x-full
        before:transition-transform before:duration-200
        hover:before:translate-x-0
        data-[state=active]:before:translate-x-0" v-for="item in tabMenuBase" :value="item.content">
            {{ $t(item.content) }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="item in tabMenuBase" :value="item.content" class="w-fit">
          <div v-if="item.index === 0" class="min-w-screen">
            <SubSwiper :cards="true" />
          </div>
          <div v-else class="justify-self-center mx-10">
            <div class="grid grid-cols-2 grid-flow-row-dense gap-4">
              <div>
                <NuxtImg :src="t('Showcase-1')" loading="lazy" />
              </div>
              <div>
                <NuxtImg :src="t('Showcase-2')" loading="lazy" />
              </div>
            </div>
          </div>
        </TabsContent>
      </TabsRoot>
    </div>

    <div class="md:hidden">
      <div v-for="item in tabMenuBase">
        <UCard :ui="{
          base: '',
          padding: 'p-0',
          background: 'bg-white ',
          divide: 'divide-y divide-gray-200 ',
          ring: 'ring-1 ring-gray-200 ',
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
            <div v-else-if="item.index === 1 && item.show">
              <div class="grid grid-rows-2 grid-flow-col-dense px-6 py-6">
                <div>
                  <NuxtImg :src="t('Showcase-1')" loading="lazy" />
                </div>
                <div>
                  <NuxtImg :src="t('Showcase-2')" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

        </UCard>
      </div>
    </div>
  </div>
</template>
