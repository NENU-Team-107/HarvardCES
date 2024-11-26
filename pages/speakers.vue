<script setup lang="ts">
import Interoduction from '~/components/speakers/Introduction.vue';
import type { Speaker, TabItems } from '~/lib/model';
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

const { t } = useI18n()

const navMenuBase = ref<TabItems[]>([
  {
    label: "Organizing Committee",
    content: "Organizing Committee",
    show: true,
    index: 0
  },
  {
    label: "Keynote Speakers",
    content: "Keynote Speakers",
    show: false,
    index: 1
  },
  // {
  //   label: "Invited Speakers",
  //   content: "Invited Speakers",
  //   show: false,
  //   index: 2
  // },
  {
    label: "Guest of Honor",
    content: "Guest of Honor",
    show: false,
    index: 3
  },
])

const navMenu = computed(() => {
  return navMenuBase.value.map(item => ({
    ...item,
    label: t(item.content)
  }));
});

const kindSpeakers = ref()
const speakersList = ref<Speaker[]>([])

const blobMap: Map<string, string> = new Map()


const fetchSpeakers = async () => {
  const resp = await $fetch('/api/speaker/listAll', {
    method: 'GET',
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    for (const speaker of data) {
      if (blobMap.has(speaker.photo)) {
        speaker.photo = blobMap.get(speaker.photo) as string
      } else {
        const image: Blob = await $fetch('/api/speaker/photo', {
          method: 'GET',
          query: {
            photo: speaker.photo
          }
        })
        const url = window.URL.createObjectURL(image)
        blobMap.set(speaker.photo, url)
        speaker.photo = url
      }
    }
    speakersList.value = data;
  }
}

onMounted(() => {
  fetchSpeakers()
})

const toggleShowMore = (index: number) => {
  for (let i = 0; i < navMenu.value.length; i++) {
    if (i !== index) {
      navMenu.value[i].show = false
    }
  }

  navMenu.value[index].show = !navMenu.value[index].show;
  let item = navMenu.value[index]
  kindSpeakers.value = speakersList.value.filter(speaker => speaker.kind === item.content)
}

</script>

<template>

  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">

    <div class="hidden md:flex justify-center w-full min-h-screen">
      <TabsRoot :default-value="navMenuBase.at(0)?.index" orientation="vertical" class="flex w-full max-w-7xl">
        <TabsList
          class="flex flex-col min-w-48 items-center h-fit sticky top-24 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md mr-4">
          <TabsIndicator
            class="w-[2px] h-[48px] absolute left-1 top-1 translate-y-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
            <div class="bg-green-600 w-full h-full" />
          </TabsIndicator>
          <TabsTrigger class="relative px-8 h-[60px] flex items-center text-base leading-none text-gray-600 dark:text-gray-300 select-none
        hover:text-green-600
        data-[state=active]:text-green-600 data-[state=active]:font-semibold
        outline-none cursor-pointer transition-all
        border-b border-gray-200 dark:border-gray-600
        last:border-b-0
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] 
        before:bg-grass9 before:transform before:-translate-x-full
        before:transition-transform before:duration-200
        hover:before:translate-x-0
        data-[state=active]:before:translate-x-0" v-for="item in navMenuBase" :value="item.index">
            {{ $t(item.label) }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="item in navMenuBase" :value="item.index" class="min-w-screen">
          <div class="grid md:grid-cols-3 dark:text-white">
            <div v-for="speaker in speakersList.filter(speaker => speaker.kind === item.content)">
              <Interoduction :speakers="speaker" class="mx-4 my-2" />
            </div>
          </div>
        </TabsContent>
      </TabsRoot>
    </div>

    <div class="md:hidden">
      <div v-for="item in navMenu">
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
          <div v-show="item.show" class="dark:text-white/90">
            <div v-for="speaker in kindSpeakers">
              <Interoduction :speakers="speaker" class="mx-10 my-5" />
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>