<script setup lang="ts">
import AgendaTable from '~/components/symposium/AgendaTable.vue'

const activeTab = ref('overview')

const iframeWidth = ref('50vw')
const iframeHeight = ref('100vh')
const fileURL = ref("/workshop/handbook.pdf")

const adjustIframe = () => {
  const ifm = document.getElementById("bi_iframe") as HTMLEmbedElement;
  ifm.height = (document.documentElement.clientHeight).toString();
  ifm.width = (document.documentElement.clientWidth * 0.5).toString();
}

const tabs = [
  { id: 'overview', name: 'Symposium Tabs.overview', icon: 'i-heroicons-document-text' },
  { id: 'schedule', name: 'Symposium Tabs.schedule', icon: 'i-heroicons-calendar-days' },
  { id: 'handbook', name: 'Symposium Tabs.handbook', icon: 'i-heroicons-book-open' }
]
</script>

<template>
  <div class="max-w-8xl mx-10 my-5 pt-24 w-full h-full bg-white/50 shadow-2xl">
    <div class="md:flex flex-col px-8 md:px-16 py-4 h-full w-full rounded-lg self-center">
      <!-- 页面标题 -->
      <div class="flex justify-center items-center md:text-4xl text-2xl my-4 font-bold">
        <div class="h-0.5 md:w-20 w-10 bg-black" />
        <h1 class="mx-4">{{ $t("2nd Symposium (2026)") }}</h1>
        <div class="h-0.5 md:w-20 w-10 bg-black" />
      </div>

      <!-- 标签页导航 -->
      <div class="w-full flex justify-center mb-6">
        <div class="flex bg-gray-100 rounded-lg p-1">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'flex items-center px-4 py-2 rounded-md transition-all duration-200',
              activeTab === tab.id
                ? 'bg-white shadow-sm text-green-700 font-semibold'
                : 'text-gray-600 hover:text-gray-800'
            ]"
          >
            <UIcon :name="tab.icon" class="w-4 h-4 mr-2" />
            {{ $t(tab.name) }}
          </button>
        </div>
      </div>

      <!-- 内容区域 -->
      <div class="w-full flex-1">
        <!-- 论坛概述 -->
        <div v-show="activeTab === 'overview'" class="w-full h-full">
          <div class="bg-white/80 p-6 rounded-lg">
            <h2 class="text-2xl font-bold mb-4 text-center">{{ $t('Symposium2026.Name') }}</h2>
            <div class="text-xl font-semibold text-center mb-2">{{ $t('Symposium2026.Theme') }}</div>
            <div class="text-lg text-center mb-6 text-gray-600">{{ $t('Symposium2026.Date') }}</div>
            <div class="text-lg leading-7">
              <div class="text-justify" v-html="$t('Symposium2026.Intro')" />
            </div>
            
            <!-- 添加论坛介绍图片 -->
            <div class="mt-6 flex justify-center px-4">
              <img 
                src="/img/introduction2.png" 
                alt="论坛介绍图片" 
                class="w-full max-w-full h-auto rounded-lg shadow-lg md:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
                style="max-width: min(1040px, 100vw - 2rem);"
              />
            </div>
          </div>
        </div>

        <!-- 论坛日程 -->
        <div v-show="activeTab === 'schedule'" class="w-full h-full">
          <div class="bg-white/80 p-6 rounded-lg">
            <div class="flex justify-center items-center text-2xl font-bold mb-6">
              <div class="h-0.5 w-16 bg-black" />
              <h2 class="mx-4">{{ $t("Symposium Time.title") }}</h2>
              <div class="h-0.5 w-16 bg-black" />
            </div>
            <div class="w-full justify-center items-center py-3 md:py-6">
              <AgendaTable />
            </div>
            <span class="text-center md:text-base text-xs mt-4 block">
              <i>{{ $t("Agenda Note") }}</i>
            </span>
            
            <!-- 敬请期待提示
            <div class="flex justify-center items-center min-h-[400px]">
              <div class="text-center">
                <p class="text-gray-500 text-xl md:text-2xl leading-relaxed">
                  我們正在精心規劃本次論壇的議程，敬請期待。<br>
                  我们正在精心规划本次论坛的议程，敬请期待。<br>
                  We are thoughtfully curating the agenda for this symposium—stay tuned.
                </p>
              </div>
            </div>
            -->
          </div>
        </div>

        <!-- 论坛手册 -->
        <div v-show="activeTab === 'handbook'" class="w-full h-full">
          <div class="bg-white/80 p-6 rounded-lg">
            <!-- 注释掉原有的手册内容
            <div class="flex justify-center items-center text-2xl font-bold mb-6">
              <div class="h-0.5 w-16 bg-black" />
              <h2 class="mx-4">{{ $t("Symposium Handbook") }}</h2>
              <div class="h-0.5 w-16 bg-black" />
            </div>
            <div class="min-w-full min-h-max flex justify-center items-center">
              <iframe
                id="bi_iframe"
                frameborder="0"
                scrolling="auto"
                :style="{ width: iframeWidth, height: iframeHeight }"
                :src="fileURL"
                @load="adjustIframe"
                class="rounded-lg shadow-lg"
              />
            </div>
            -->
            
            <!-- 手册编制中提示 -->
            <div class="flex justify-center items-center min-h-[400px]">
              <div class="text-center">
                <p class="text-gray-500 text-xl md:text-2xl leading-relaxed">
                  論壇手冊正在編製中，將於活動前公布，敬請期待。<br>
                  论坛手册正在编制中，将于活动前公布，敬请期待。<br>
                  The Symposium handbook is currently in preparation and will be released prior to the event. Stay tuned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>