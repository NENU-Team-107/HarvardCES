<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
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

const tabMenu = computed(() => {
  return tabMenuBase.value.map(item => ({
    ...item,
    label: t(item.content)
  }));
});

const AgendaImage = computed(() => {
  return t("Symposium Agenda")
})

const LocationImage = ref<string>('')

const fetchLocationImage = async () => {
  const data: Blob = await $fetch('/api/about/localtion')
  LocationImage.value = window.URL.createObjectURL(data)
}

const handleChange = (index: number) => {
  if (index === 1) {
    fetchLocationImage();
  }
}

const toggleShowMore = (index: number) => {
  tabMenuBase.value[index].show = !tabMenuBase.value[index].show;

  if (index === 1 && tabMenuBase.value[index].show) {
    fetchLocationImage()
  }
}

</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <UTabs :items="tabMenu" orientation="vertical"
      :ui="{ wrapper: 'gap-4 px-10 hidden md:flex  dark:bg-black', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5', font: 'font-bold' } } }"
      class="bg-white/80 w-full h-full min-h-screen" @change="handleChange">
      <template #item="{ item }">
        <div
          class="flex flex-col px-20 py-10 bg-white/80 dark:bg-gray-800/80 dark:text-white justify-center items-center h-full w-full">
          <h1 v-if="item.content === 'Symposium Introduction'" class="text-center font-bold text-2xl py-6">{{
            $t("Symposium.Title") }}
          </h1>
          <h1 v-else-if="item.content === 'Symposium Location'" class="text-center font-bold text-2xl py-6">
            {{ $t("Symposium Location") }}
          </h1>
          <div class="flex items-center justify-center w-full flex-1">
            <div v-if="item.content === 'Symposium Introduction'" v-html="Introduction" />
            <div v-else-if="item.content === 'Symposium Location'">
              <NuxtImg :src="LocationImage" loading="lazy" />
              <div class="items-center justify-center text-center text-lg mt-5">
                <span>{{ $t("Host.Details.Location") }}</span>
              </div>
            </div>
            <div v-else>
              <NuxtImg :src="AgendaImage" loading="lazy" />
            </div>
          </div>
        </div>
      </template>
    </UTabs>
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
                <div v-if="item.index === 0" v-html="Introduction" />
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
