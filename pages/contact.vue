<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
const { t } = useI18n();

const tabMenu = ref<TabItems[]>([
  {
    label: t("Harvard China Education Symposium"),
    content: "about",
    show: false,
    index: 0,
  },
  {
    label: t("The Education University of Hong Kong"),
    content: "location",
    show: false,
    index: 1,
  }
])

// const handleClick = (index: number) => {
//   let item = navMenu.value[index]
//   console.log(item)
//   kindSpeakers.value = speakers.filter(speaker => speaker.kind === item.label)
// }

const toggleShowMore = async (index: number) => {
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
        <UCard>

          <template #header>
            <div>
              <span>{{ item.label }}</span>
              <button @click="toggleShowMore(item.index)">
                <span v-if="item.show">▲ {{ $t("Collapse") }}</span>
                <span v-else>▼ {{ $t("Show More") }}</span>
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
