<script setup lang="ts">
import Interoduction from '~/components/speakers/Introduction.vue';
import type { Speaker, TabItems } from '~/lib/model';
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

const { t } = useI18n()

const navMenuBase = ref<TabItems[]>([
  {
    label: t("Organizing Committee"),
    content: "Organizing Committee",
    show: false,
    index: 0
  },
  {
    label: t("Keynote Speakers"),
    content: "Keynote Speakers",
    show: false,
    index: 1
  },
  // {
  //   label: t("Invited Speakers"),
  //   content: "Invited Speakers",
  //   show: false,
  //   index: 2
  // },
  {
    label: t("Guest of Honor"),
    content: "Guest of Honor",
    show: false,
    index: 2
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
const pending = ref(true)

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
    pending.value = false;
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

    <div v-if="pending" class="justify-self-center">
      <UCommandPalette loading />
    </div>

    <div v-else>
      <div class="hidden md:flex justify-center w-full min-h-screen">
        <TabsRoot :default-value="navMenuBase.at(0)?.content" orientation="vertical" class="flex w-full max-w-7xl">
          <TabsList
            class="flex flex-col min-w-60 items-center h-fit sticky top-24 bg-gray-100  rounded-lg shadow-md mr-4">
            <TabsIndicator
              class="w-[3px] h-[48px] absolute left-1 top-1 translate-y-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
              <div class="bg-blue-600 w-full h-full" />
            </TabsIndicator>
            <TabsTrigger class="px-8 h-[60px] flex items-center text-base leading-none text-black  select-none
        hover:text-blue-500
        data-[state=active]:text-blue-600
        outline-none cursor-pointer transition-all
        border-b border-gray-200 
        last:border-b-0
        before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] 
        before:bg-grass9 before:transform before:-translate-x-full
        before:transition-transform before:duration-200
        hover:before:translate-x-0
        data-[state=active]:before:translate-x-0" v-for="item in navMenuBase" :value="item.content">
              {{ $t(item.content) }}
            </TabsTrigger>
          </TabsList>
          <TabsContent v-for="item in navMenuBase" :value="item.content" class="min-w-screen w-full h-fit">
            <div class="grid grid-cols-3 min-w-full gap-5 justify-items-center items-start ">
              <div v-for="speaker in speakersList.filter(speaker => speaker.kind === item.content)" class="w-full h-full">
                <Interoduction :speakers="speaker" class="mx-4 w-full h-full" />
              </div>
            </div>
          </TabsContent>
        </TabsRoot>
      </div>

      <div class="md:hidden">
        <div v-for="item in navMenu">
          <UCard :ui="{
            base: '',
            background: 'bg-white ',
            divide: 'divide-y divide-gray-200 ',
            ring: 'ring-1 ring-gray-200 ',
            rounded: 'rounded-lg',
            shadow: 'shadow',
            body: {
              base: '',
              background: '',
              padding: ''
            },
            header: {
              base: '',
              background: 'bg-tabs-header ',
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
            <div v-show="item.show">
              <div v-for="speaker in kindSpeakers">
                <Interoduction :speakers="speaker" class="mx-10 my-5 h-full " />
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>