<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { TabsContent } from 'radix-vue'
import type { TabItems } from '~/lib/model';
import Tabs from '~/components/common/Tabs.vue';
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
  // {
  //   label: t("Symposium Location"),
  //   content: "Symposium Location",
  //   show: false,
  //   index: 1
  // },
  {
    label: t("Symposium Time"),
    content: "Symposium Time",
    show: false,
    index: 1
  }
]);


const AgendaImage = computed(() => {
  return t("Symposium Agenda")
})


const toggleShowMore = (index: number) => {
  tabMenuBase.value[index].show = !tabMenuBase.value[index].show;
}

</script>

<template>
  <div class="w-full mx-10 my-5 pt-24">

    <div class="hidden md:flex justify-center w-full">
      <Tabs :tab-menu-base="tabMenuBase">

        <TabsContent v-for="item in tabMenuBase" :value="item.content" class="flex-1 ml-8">
          <div
            class="flex flex-col px-8 md:px-16 bg-white/50 py-4  h-full w-full shadow-2xl  border-1 rounded-lg self-center relative">

            <div v-if="item.index === 0" class=" leading-6">
              <div class="w-32 mx-0 my-0 z-30 float-right justify-self-end absolute right-0 top-0 rotate-12">
                <NuxtImg src="/img/poster/Rainbowonly_organgeFlower_Small.svg" />
              </div>
              <h1 class="text-center font-bold text-2xl py-6">
                {{ $t('Symposium.Name') }}
              </h1>
              <!-- <h1 class="text-start font-bold text-xl py-6 float-start">
                {{ $t("Symposium.Topic") }}
              </h1> -->
              <!-- <div class=" w-3/5 h-1 bg-gradient-to-r from-cover-left to-cover-right to-30% my-5">
              </div> -->
              <div class="text-justify indent-8 text-lg">
                <div v-html="Introduction"></div>
              </div>
            </div>
            <div v-else class="w-full">
              <NuxtImg :src="AgendaImage" loading="lazy" class="w-full object-cover" />
            </div>
          </div>

        </TabsContent>
      </Tabs>
    </div>


    <div class="md:hidden">
      <div v-for="item in tabMenuBase">
        <UCard :ui="{
          base: '',
          background: 'bg-white ',
          divide: 'divide-y divide-gray-200 ',
          ring: 'ring-1 ring-gray-200 0',
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

          <div v-if="item.show" class=" mr-4 ml-4 pb-4">
            <h1 v-if="item.index === 0" class="text-center font-bold text-2xl py-6">{{
              $t("Symposium Introduction") }}
            </h1>
            <div class="flex justify-center items-center w-full flex-1">
              <div v-if="item.index === 0" class="text-justify" v-html="Introduction" />
              <div v-else-if="item.index === 1">
                <NuxtImg :src="AgendaImage" />
              </div>
            </div>
          </div>

        </UCard>

      </div>

    </div>

  </div>
</template>
<style>
.truncate {
  word-break: break-all;
  text-overflow: unset;
  white-space: inherit;
}
</style>