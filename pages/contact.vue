<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
const { t } = useI18n();

const tabMenuBase = ref<TabItems[]>([
  {
    label: t("Harvard China Education Symposium"),
    content: "Harvard China Education Symposium",
    show: true,
    index: 0,
  },
  {
    label: t("The Education University of Hong Kong"),
    content: "The Education University of Hong Kong",
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
  for (let i = 0; i < tabMenu.value.length; i++) {
    if(i !== index) {
      tabMenu.value[i].show = false;
    }
  }
  tabMenu.value[index].show = !tabMenu.value[index].show;
}
</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <NuxtPage />
    <UTabs :items="tabMenu" orientation="vertical"
      :ui="{ wrapper: 'hidden md:flex gap-4 px-10', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5' } } }"
      class="bg-white/80 w-full h-full min-h-screen">
      <template #item>
        <div class="min-h-full flex flex-col px-20 py-10 bg-white/80">
          <!-- <h1 class="text-center font-bold text-2xl py-6">{{ $t("About") }}</h1>
          <div class="flex justify-center items-center w-full flex-1">
            <div v-html="Introduction" />
          </div> -->
        </div>
      </template>
    </UTabs>
    <!-- TODO 补全样式 -->
    <div class="md:hidden">
      <div v-for="item in tabMenu">
        <UCard :ui="{
          base: '',
          background: 'bg-white dark:bg-gray-900',
          divide: 'divide-y divide-gray-200 dark:divide-gray-800',
          ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
          rounded: 'rounded-lg',
          shadow: 'shadow',
          body: {
            base: '',
            background: '',
            padding: ''
          },
          header: {
            base: '',
            background: 'bg-tabs-header',
            padding: 'px-4 py-3 sm:px-6'
          },
        }">
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

          <div>
            <!-- TODO 补全资料 -->
          </div>

        </UCard>
      </div>
    </div>
  </div>
</template>
