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
  for (let i = 0; i < tabMenu.value.length; i++) {
    if (i !== index) {
      tabMenu.value[i].show = false;
    }
  }
  tabMenu.value[index].show = !tabMenu.value[index].show;
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
      :ui="{ wrapper: 'hidden md:flex gap-4 px-10', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5', font: 'font-bold' } } }"
      class="bg-white/80 w-full h-full min-h-screen" @change="handleChange">
      <template #item>
        <div class="min-h-full flex flex-col px-20 py-10 bg-white/80">

          <!-- TODO 样式问题，主要是 ULink 部分的样式和位置(可以使用红色粗体/蓝色粗体)，上面 pdf 与 图片的顺序不要改变，从上到下即可 -->
          <div v-if="showCES === true">

            <ClientOnly>
              <div class="items-center justify-center text-center flex">
                <PDFViewer pdf-path="img/harvard/Introduction.pdf"></PDFViewer>
              </div>
              <NuxtImg src="img/harvard/aiming.png" />
              <NuxtImg src="img/harvard/reachUs.png" />

              <div>
                <ULink to="https://www.hgseces.org/">
                  {{ $t("About Us.HarvardCES.link") }}
                </ULink>
                <font-awesome icon="fa-solid fa-arrow-right" />
              </div>
            </ClientOnly>

          </div>

          <div v-else>
            <!-- TODO 样式修改，主要是图片的样式，一个在左一个在右 -->

            <div class="mb-5">
              <Title titleMap="About Us.EduHK.intro title" />
              <div v-html="eduHKIntro"></div>
            </div>

            <div class="flex">
              <div class="w-full h-full">
                <NuxtImg src="img/eduhk/vision.png" />
              </div>

              <div>
                <div class="mb-5">
                  <Title titleMap="About Us.EduHK.vision title" />
                  <div v-html="eduHKVision"></div>
                </div>

                <div class="mb-5">
                  <Title titleMap="About Us.EduHK.mission title" />
                  <div v-html="eduHKMission"></div>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <Title titleMap="About Us.EduHK.president title" />
              <div class="flex justify-center items-center">
                <div v-html="eduHKPresident"></div>
                <div class="w-full h-full">
                  <NuxtImg src="img/eduhk/Chi-Kin John.png" />
                </div>
              </div>
            </div>


            <div>
              <ULink to="https://www.eduhk.hk/en/">
                {{ $t("About Us.EduHK.link") }}
              </ULink>
              <font-awesome icon="fa-solid fa-arrow-right" />
            </div>

          </div>
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
