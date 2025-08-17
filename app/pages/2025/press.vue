<script setup lang="ts">
// 2025年论坛新闻稿、照片及视频页面
definePageMeta({
  keepalive: true,
})

const { t } = useI18n()
</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24">
    <div class="h-full w-full max-w-6xl justify-self-center bg-white/80 justify-center items-center">
      <div class="flex flex-col justify-center items-center">
        <div class="text-2xl font-bold text-center my-5">
          <div class="flex justify-center items-center">
            <div class="h-0.5 w-20 bg-black" />
            <h1 class="mx-4">{{ $t("Press Release, Photo and Video") }}</h1>
            <div class="h-0.5 w-20 bg-black" />
          </div>
        </div>
        
        <!-- 新闻稿部分 -->
        <div class="w-full max-w-4xl px-8 py-6">
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">{{ $t("Press Release") }}</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="text-gray-600 mb-4">论坛新闻稿内容将在此处展示...</p>
              <!-- 这里可以添加具体的新闻稿内容 -->
            </div>
          </div>
          
          <!-- 照片部分 -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">{{ $t("Photos") }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <!-- 这里可以添加照片画廊 -->
              <div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <span class="text-gray-500">照片展示区域</span>
              </div>
            </div>
          </div>
          
          <!-- 视频部分 -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">{{ $t("Videos") }}</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="text-gray-600">论坛视频内容将在此处展示...</p>
              <!-- 这里可以添加视频播放器或视频链接 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>