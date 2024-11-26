<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { TabsContent } from 'radix-vue'
import type { TabItems } from '~/lib/model';
import Tabs from '~/components/common/Tabs.vue';
const { t } = useI18n();

const Introduction = computed(() => {
  return t("Symposium.Details")
})

const tabMenuBase = ref<TabItems[]>([
  {
    label: "Symposium Introduction",
    content: "Symposium Introduction",
    show: true,
    index: 0
  },
  {
    label: "Symposium Location",
    content: "Symposium Location",
    show: false,
    index: 1
  },
  {
    label: "Symposium Time",
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
      <Tabs :tab-menu-base="tabMenuBase">

        <TabsContent v-for="item in tabMenuBase" :value="item.label" class="flex-1 ml-8">
          <div
            class="flex flex-col px-8 md:px-16 py-6 bg-white/80 dark:bg-gray-800/80 dark:text-white h-full w-full rounded-lg shadow-sm">
            <h1 v-if="item.content === 'Symposium Introduction'" class="text-center font-bold text-3xl mb-4">
              {{ $t("Symposium Introduction") }}
            </h1>
            <h1 v-else-if="item.content === 'Symposium Location'" class="text-center font-bold text-3xl mb-4">
              {{ $t("Symposium Location") }}
            </h1>

            <div class="flex items-start justify-center w-full">
              <div v-if="item.content === 'Symposium Introduction'"
                class="max-h-fit self-center text-justify indent-8 text-lg" v-html="Introduction" />
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
      </Tabs>
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