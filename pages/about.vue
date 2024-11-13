<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
const { t } = useI18n();

const Introduction = computed(() => {
  return t("Symposium.Details").replace(/\n/g, '<br>')
})

const tabMenu = ref<TabItems[]>([
  {
    label: t("Symposium Introduction"),
    content: "about",
    show: true,
    index: 0
  },
  {
    label: t("Symposium Location"),
    content: "location",
    show: false,
    index: 1
  },
  {
    label: t("Symposium Time"),
    content: "time",
    show: false,
    index: 2
  }
]
)

const AgendaImage = computed(() => {
  return t("Symposium Agenda")
})

const LocationImage = ref<string>('')

const handleChange = async (index: number) => {
  if (index === 1) {
    const data: Blob = await $fetch('/api/about/localtion')
    LocationImage.value = window.URL.createObjectURL(data)
  }
}

const toggleShowMore = async (index: number) => {

  tabMenu.value[index].show = !tabMenu.value[index].show;

  if (index === 1) {
    const data: Blob = await $fetch('/api/about/localtion')
    LocationImage.value = window.URL.createObjectURL(data)
  }
}

</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <NuxtPage />
    <UTabs :items="tabMenu" orientation="vertical"
      :ui="{ wrapper: 'gap-4 px-10 hidden md:flex', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5' } } }"
      class="bg-white/80 w-full h-full min-h-screen" @change="handleChange">
      <template #item="{ item }">
        <div class="min-h-full flex flex-col px-20 py-10 bg-white/80 justify-center items-center h-full w-full">
          <h1 v-if="item.content === 'about'" class="text-center font-bold text-2xl py-6">{{ $t("Symposium.Title") }}
          </h1>
          <h1 v-else-if="item.content === 'location'" class="text-center font-bold text-2xl py-6">
            {{ $t("Symposium Location") }}
          </h1>
          <div class="flex justify-center items-center w-full flex-1">
            <div v-if="item.content === 'about'" v-html="Introduction" />
            <div v-else-if="item.content === 'location'">
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

          <div class="min-h-full flex flex-col px-20 py-10 bg-white/80 justify-center items-center h-full w-full">
            <h1 v-if="item.content === 'about' && item.show === true" class="text-center font-bold text-2xl py-6">{{
              $t("Symposium.Title") }}
            </h1>
            <h1 v-else-if="item.content === 'location' && item.show === true"
              class="text-center font-bold text-2xl py-6">
              {{ $t("Symposium Location") }}
            </h1>
            <div class="flex justify-center items-center w-full flex-1">
              <div v-if="item.content === 'about' && item.show === true" v-html="Introduction" />
              <div v-else-if="item.content === 'location' && item.show === true">
                <NuxtImg :src="LocationImage" loading="lazy" />
                <div class="items-center justify-center text-center text-lg mt-5">
                  <span>{{ $t("Host.Details.Location") }}</span>
                </div>
              </div>
              <div v-else-if="item.content === 'time' && item.show === true">
                <NuxtImg :src="AgendaImage" loading="lazy" />
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
