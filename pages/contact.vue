<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
import Title from '~/components/common/Title.vue';
import PDFViewer from '~/components/poster/PDFViewer.vue';
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
  tabMenuBase.value[index].show = !tabMenuBase.value[index].show;
}

const showCES = ref(true)

const handleChange = (index: number) => {
  if (index === 0) {
    showCES.value = true;
  } else {
    showCES.value = false;
  }
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
    <UTabs :items="tabMenu" orientation="vertical"
      :ui="{ wrapper: 'hidden md:flex gap-4 px-10 dark:bg-black text-wrap break-all', list: { width: 'w-60', tab: { size: 'text-base text-wrap break-all', padding: 'py-10', font: 'font-bold', base: 'text-balance break-all' } } }"
      class="bg-white/80 w-full h-full min-h-screen" @change="handleChange">
      <template #item>
        <div class="min-h-full w-full flex flex-col px-20 py-5 bg-white/80 dark:bg-gray-800/80 dark:text-white">

          <!-- OK: 样式问题，主要是 ULink 部分的样式和位置(可以使用红色粗体/蓝色粗体)，上面 pdf 与 图片的顺序不要改变，从上到下即可 -->
          <div v-if="showCES === true">

            <ClientOnly>
              <div class="items-center justify-center ml-24">
                <!-- <div> -->
                <!-- <div
                  class="items-center justify-center text-center flex min-w-4/5 min-h-full bg-pdf-bg bg-gradient-to-b from-pdf-top from-20% via-pdf-middle via-60% to-pdf-top  to-90%"> -->
                <!-- <PDFViewer pdf-path="img/harvard/Introduction.pdf"></PDFViewer> -->
                <!-- </div> -->
                <NuxtImg src="img/harvard/Introduction.png" class="items-center justify-center w-2/3 ml-12" />
                <NuxtImg src="img/harvard/aiming.png" sizes="800" class="items-center justify-center" />
                <NuxtImg src="img/harvard/reachUs.png" sizes="800" class="items-center justify-center" />
                <div class="font-semibold text-white bg-red-800 mt-5 text-lg w-10/12">
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
                <div v-html="eduHKIntro"></div>
              </div>

              <div class="flex flex-row h-full w-full z-20">
                <div class="w-4/12 min-h-full flex justify-center items-center ">
                  <NuxtImg src="img/eduhk/vision.png" class="w-11/12 m-auto" />
                </div>

                <div class="w-8/12 h-full z-20 flex flex-col justify-center items-center">
                  <div class="my-3">
                    <Title titleMap="About Us.EduHK.vision title" />
                    <div v-html="eduHKVision"></div>
                  </div>

                  <div class="my-3">
                    <Title titleMap="About Us.EduHK.mission title" />
                    <div v-html="eduHKMission"></div>
                  </div>
                </div>
              </div>

              <div class="mb-5 flex flex-col w-full h-full">
                <Title titleMap="About Us.EduHK.president title" />

                <div class="flex flex-row h-full w-full">
                  <div class="w-4/5 h-full z-20">
                    <div v-html="eduHKPresident" />
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
      </template>
    </UTabs>
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
            <div v-if="item.index === 0" class="w-full max-w-screen">
              <ClientOnly>
                <div
                  class="items-center justify-center text-center flex w-full bg-pdf-bg bg-gradient-to-b from-pdf-top from-20% via-pdf-middle via-60% to-pdf-top  to-90%">
                  <PDFViewer pdf-path="img/harvard/Introduction.pdf"></PDFViewer>
                </div>
                <NuxtImg src="img/harvard/aiming.png" class="w-full" />
                <NuxtImg src="img/harvard/reachUs.png" class="w-full" />

                <div class="font-semibold text-white bg-red-800 text-center p-2">
                  <ULink to="https://www.hgseces.org/">
                    {{ $t("About Us.HarvardCES.link") }}
                  </ULink>
                  <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
                </div>
              </ClientOnly>
            </div>
            <div v-else-if="item.index === 1" class="w-full px-2 py-1">
              <div class="z-20 bg-white">
                <div class="mb-5 z-20">
                  <Title titleMap="About Us.EduHK.intro title" />
                  <div v-html="eduHKIntro"></div>
                </div>

                <div class="min-h-full flex justify-center items-center ">
                  <NuxtImg src="img/eduhk/vision.png" class="w-11/12 m-auto" />
                </div>

                <div class="h-full z-20 flex flex-col justify-center items-center">
                  <div class="my-3">
                    <Title titleMap="About Us.EduHK.vision title" />
                    <div v-html="eduHKVision"></div>
                  </div>

                  <div class="my-3">
                    <Title titleMap="About Us.EduHK.mission title" />
                    <div v-html="eduHKMission"></div>
                  </div>
                </div>

                <div class="mb-5 flex flex-col w-full h-full">
                  <Title titleMap="About Us.EduHK.president title" />

                  <div class="min-h-full flex justify-center items-start ">
                    <NuxtImg src="img/eduhk/Chi-Kin John.png" class="rounded-full mx-auto w-2/5" />
                  </div>
                  <div class="h-full z-20">
                    <div v-html="eduHKPresident" />
                  </div>

                </div>


                <div class="font-semibold text-white bg-red-800 text-center p-2">
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
