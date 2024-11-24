<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import type { TabItems } from '~/lib/model';
const { t } = useI18n();

const Introduction = computed(() => {
  return t("Symposium.Details").replace(/\n/g, '<br>')
})

const tabMenuBase = ref<TabItems[]>([
  {
    label: t("Symposium Introduction"),
    content: "Symposium Introduction",
    show: true,
    index: 0
  },
  {
    label: t("Symposium Location"),
    content: "Symposium Location",
    show: false,
    index: 1
  },
  {
    label: t("Symposium Time"),
    content: "Symposium Time",
    show: false,
    index: 2
  }
]);


const AgendaImage = computed(() => {
  return t("Symposium Agenda")
})

const LocationImage = ref<string>('')

const fetchLocationImage = async () => {
  const data: Blob = await $fetch('/api/about/localtion')
  LocationImage.value = window.URL.createObjectURL(data)
}

fetchLocationImage();

const toggleShowMore = (index: number) => {
  tabMenuBase.value[index].show = !tabMenuBase.value[index].show;

  if (index === 1 && tabMenuBase.value[index].show) {
    fetchLocationImage()
  }
}

</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">

    <div class="hidden md:flex justify-center w-full min-h-screen">
      <TabsRoot :default-value="tabMenuBase.at(0)?.label" orientation="vertical" class="flex w-full max-w-6xl">
        <TabsList
          class="flex flex-col min-w-40 items-center h-fit sticky top-24 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
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

        <TabsContent v-for="item in tabMenuBase" :value="item.label" class="flex-1 ml-8">
          <div
            class="flex flex-col px-8 md:px-16 py-6 bg-white/80 dark:bg-gray-800/80 dark:text-white h-full w-full rounded-lg shadow-sm">
            <h1 v-if="item.content === 'Symposium Introduction'" class="text-center font-bold text-2xl mb-4">
              {{ $t("Symposium.Title") }}
            </h1>
            <h1 v-else-if="item.content === 'Symposium Location'" class="text-center font-bold text-2xl mb-4">
              {{ $t("Symposium Location") }}
            </h1>

            <div class="flex items-start justify-center w-full">
              <div v-if="item.content === 'Symposium Introduction'" class="text-justify indent-8"
                v-html="Introduction" />
              <div v-else-if="item.content === 'Symposium Location'" class="w-full">
                <NuxtImg :src="LocationImage" class="w-full object-cover rounded-lg" />
                <div class="text-center text-lg mt-4">
                  <span>{{ $t("Host.Details.Location") }}</span>
                </div>
              </div>
              <div v-else class="w-full">
                <NuxtImg :src="AgendaImage" loading="lazy" class="w-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </TabsContent>
      </TabsRoot>
    </div>

    <ClientOnly>
      <div class="md:hidden">
        <div v-for="item in tabMenuBase">
          <UCard :ui="{
            base: '',
            background: 'bg-white dark:bg-gray-900',
            divide: 'divide-y divide-gray-200 dark:divide-gray-800',
            ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
            rounded: 'rounded-lg',
            shadow: 'shadow',
            body: {
              base: '',
              background: 'dark:bg-gray-900',
              padding: ''
            },
            header: {
              base: 'dark:text-white/90',
              background: 'bg-tabs-header dark:bg-gray-700',
              padding: 'px-4 py-3 sm:px-6'
            },
          }
            ">
            <template #header>
              <div class="flex w-full justify-between">
                <span>{{ item.label }}</span>
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

            <div v-if="item.show" class="dark:text-white/90 mr-4 ml-4 pb-4">
              <h1 v-if="item.index === 0" class="text-center font-bold text-2xl py-6">{{
                $t("Symposium.Title") }}
              </h1>
              <h1 v-else-if="item.index === 1" class="text-center font-bold text-2xl py-6">
                {{ $t("Symposium Location") }}
              </h1>
              <div class="flex justify-center items-center w-full flex-1">
                <div v-if="item.index === 0" class="text-justify" v-html="Introduction" />
                <div v-else-if="item.index === 1">
                  <NuxtImg :src="LocationImage" />
                  <div class="items-center justify-center text-center text-lg mt-5">
                    <span>{{ $t("Host.Details.Location") }}</span>
                  </div>
                </div>
                <div v-else-if="item.index === 2">
                  <NuxtImg :src="AgendaImage" />
                </div>
              </div>
            </div>

          </UCard>

        </div>

      </div>
    </ClientOnly>
  </div>
</template>
<style>
.truncate {
  word-break: break-all;
  text-overflow: unset;
  white-space: inherit;
}
</style>