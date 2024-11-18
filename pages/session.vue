<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import SubSwiper from '~/components/homeIndex/SubSwiper.vue';
import type { TabItems } from '~/lib/model';
const { t } = useI18n();

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

const tabMenu = computed(() => {
  return tabMenuBase.value.map(item => ({
    ...item,
    label: t(item.content)
  }));
})

const toggleShowMore = (index: number) => {
  tabMenuBase.value[index].show = !tabMenuBase.value[index].show;
}
</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <NuxtPage />

    <UTabs :items="tabMenu" orientation="vertical"
      :ui="{ wrapper: 'hidden md:flex gap-4 px-10 dark:bg-black', list: { width: 'w-60', tab: { size: 'text-base', padding: 'py-10', font: 'font-bold', base: 'break-all' } } }"
      class="bg-white/80 w-full h-full min-h-screen">
      <template #item="{ item }">
        <div class="min-h-full w-full flex flex-col px-20 py-5 bg-white/80  dark:bg-gray-800/80">

          <div v-if="item.index === 0">
            <SubSwiper :cards="true" />
          </div>
        </div>
      </template>
    </UTabs>

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
