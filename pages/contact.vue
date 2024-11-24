<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
import Title from '~/components/common/Title.vue';
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

const { t } = useI18n();

const tabMenuBase = ref<TabItems[]>([
  {
    label: "Harvard China Education Symposium",
    content: "Harvard China Education Symposium",
    show: true,
    index: 0,
  },
  {
    label: "The Education University of Hong Kong",
    content: "The Education University of Hong Kong",
    show: false,
    index: 1,
  }
])

const toggleShowMore = (index: number) => {
  tabMenuBase.value[index].show = !tabMenuBase.value[index].show;
}

const eduHKIntro = computed(() => {
  return t("About Us.EduHK.intro").replace(/\n/g, "<br>")
})

const eduHKVision = computed(() => {
  return t("About Us.EduHK.vision").replace(/\n/g, "<br>")
})

const eduHKMission = computed(() => {
  return t("About Us.EduHK.mission").replace(/\n/g, "<br>")
})

const eduHKPresident = computed(() => {
  return t("About Us.EduHK.president").replace(/\n/g, "<br>")
})
</script>

<template>
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <NuxtPage />

    <div class="hidden md:flex justify-center w-full min-h-screen">
      <TabsRoot :default-value="tabMenuBase.at(0)?.index" orientation="vertical" class="flex w-full max-w-7xl">
        <TabsList
          class="flex flex-col min-w-48 items-center h-fit sticky top-24 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md ">
          <TabsIndicator
            class="w-[2px] h-[48px] absolute left-1 top-1 translate-y-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
            <div class="bg-green-600 w-full h-full" />
          </TabsIndicator>
          <TabsTrigger class="relative px-8 h-20 flex items-center text-base leading-none text-gray-600 dark:text-gray-300 select-none
        hover:text-green-600
        data-[state=active]:text-green-600 data-[state=active]:font-semibold
        outline-none cursor-pointer transition-all
        border-b border-gray-200 dark:border-gray-600
        last:border-b-0
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] 
        before:bg-grass9 before:transform before:-translate-x-full
        before:transition-transform before:duration-200
        hover:before:translate-x-0
        data-[state=active]:before:translate-x-0" v-for="item in tabMenuBase" :value="item.index">
            {{ $t(item.label) }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="item in tabMenuBase" :value="item.index" class="min-w-screen">
          <div class="min-h-full w-full flex flex-col px-10 py-5 bg-white/80 dark:bg-gray-800/80 dark:text-white">

            <div v-if="item.index === 0" class="w-full max-w-screen">
              <!-- TODO 将此处更改为和下面一样的文字而不是图片 -->
              <div>
                title: {{ $t("About Us.HarvardCES.title") }}
              </div>
              <div>
                {{ $t("About Us.HarvardCES.Introduction") }}
              </div>
              <ClientOnly>
                <div class="items-center justify-center flex flex-col w-full px-auto">
                  <NuxtImg src="img/harvard/Introduction.png" class="w-2/5" />
                  <NuxtImg src="img/harvard/aiming.png" class="w-2/5" />
                  <NuxtImg src="img/harvard/reachUs.png" class="w-2/5" />
                  <div class="font-semibold text-white bg-red-800 mt-5 text-lg w-5/12">
                    <ULink to="https://www.hgseces.org/">
                      {{ $t("About Us.HarvardCES.link") }}
                    </ULink>
                    <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
                  </div>
                </div>
              </ClientOnly>
            </div>

            <div v-else class="w-full min-h-full relative">
              <div class="z-20 bg-white  dark:bg-gray-800/80">
                <div class="mb-5 z-20">
                  <Title titleMap="About Us.EduHK.intro title" />
                  <div class="text-justify" v-html="eduHKIntro"></div>
                </div>

                <div class="flex flex-row h-full w-full z-20">
                  <div class="w-4/12 min-h-full flex justify-center items-center ">
                    <NuxtImg src="img/eduhk/vision.png" class="w-11/12 m-5" />
                  </div>

                  <div class="w-8/12 h-full z-20 flex flex-col justify-center items-center">
                    <div class="my-3">
                      <Title titleMap="About Us.EduHK.vision title" />
                      <div class="text-justify" v-html="eduHKVision"></div>
                    </div>

                    <div class="my-3">
                      <Title titleMap="About Us.EduHK.mission title" />
                      <div class="text-justify" v-html="eduHKMission"></div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col w-full h-full mb-5 ">
                  <Title titleMap="About Us.EduHK.president title" />

                  <div class="flex flex-row h-full w-full">
                    <div class="w-4/5 h-full z-20">
                      <div class="text-justify" v-html="eduHKPresident" />
                    </div>
                    <div class="w-1/5 min-h-full flex justify-center items-start ">
                      <NuxtImg src="img/eduhk/Chi-Kin John.png" class="rounded-full mx-auto w-4/5" />
                    </div>
                  </div>

                </div>


                <div class="font-semibold text-white bg-green-800 p-2">
                  <ULink to="https://www.eduhk.hk/en/">
                    {{ $t("About Us.EduHK.link") }}
                  </ULink>
                  <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
                </div>

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

          <div class="w-full max-w-screen-md">
            <div v-if="item.index === 0 && item.show" class="w-full max-w-screen">
              <ClientOnly>
                <NuxtImg src="img/harvard/Introduction.png" class="items-center justify-center w-2/3 ml-16 mt-2" />
                <NuxtImg src="img/harvard/aiming.png" class="items-center justify-center w-10/12 ml-6" />
                <NuxtImg src="img/harvard/reachUs.png" class="items-center justify-center w-10/12 ml-6" />
                <div class="font-semibold text-white bg-red-800 mt-2 text-lg w-10/12 ml-6 mb-2">
                  <ULink to="https://www.hgseces.org/">
                    {{ $t("About Us.HarvardCES.link") }}
                  </ULink>
                  <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
                </div>
              </ClientOnly>
            </div>
            <div v-else-if="item.index === 1 && item.show" class="w-full px-2 py-1">
              <div class="z-20 bg-white mt-4">
                <div class="mb-5 z-20">
                  <Title titleMap="About Us.EduHK.intro title" />
                  <div class="text-justify" v-html="eduHKIntro"></div>
                </div>

                <div class="min-h-full flex justify-center items-center">
                  <NuxtImg src="img/eduhk/vision.png" class="w-11/12 m-auto" />
                </div>

                <div class="h-full z-20 flex flex-col justify-center items-center mt-2">
                  <div class="my-3">
                    <Title titleMap="About Us.EduHK.vision title" />
                    <div class="text-justify" v-html="eduHKVision"></div>
                  </div>

                  <div class="my-3 mt-2">
                    <Title titleMap="About Us.EduHK.mission title" />
                    <div class="text-justify" v-html="eduHKMission"></div>
                  </div>
                </div>

                <div class="mb-5 flex flex-col w-full h-full mt-2">
                  <Title titleMap="About Us.EduHK.president title" />

                  <div class="min-h-full flex justify-center items-start ">
                    <NuxtImg src="img/eduhk/Chi-Kin John.png" class="rounded-full mx-auto w-2/5" />
                  </div>
                  <div class="h-full z-20">
                    <div class="text-justify" v-html="eduHKPresident" />
                  </div>

                </div>


                <div class="font-semibold text-white bg-green-800 text-center p-2">
                  <ULink to="https://www.eduhk.hk/en/">
                    {{ $t("About Us.EduHK.link") }}
                  </ULink>
                  <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
                </div>

              </div>
            </div>
          </div>

        </UCard>
      </div>
    </div class=" break-all">
  </div>
</template>
<style>
.truncate {
  word-break: break-all;
  text-overflow: unset;
  white-space: inherit;
}
</style>
