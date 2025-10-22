<script setup lang="ts">
// 2026年论坛新闻稿、照片及视频页面（内容来自2025年第一届论坛）
definePageMeta({
  keepalive: true,
})

const { t } = useI18n()

// 照片画廊数据
const photos = ref([
  '图片压缩5P6A3150.JPG',
  '图片压缩5P6A3202.JPG',
  '图片压缩5P6A3254.JPG',
  '图片压缩5P6A3274.JPG',
  '图片压缩Academy讯飞withAAPSEF 2.jpg',
  '图片压缩ChrisDede.JPG',
  '图片压缩DSC00294.JPG',
  '图片压缩DSC00664.jpg',
  '图片压缩DSC01227.JPG',
  '图片压缩DSC01417.JPG',
  '图片压缩DSC01622.JPG',
  '图片压缩DSC01629.JPG',
  '图片压缩DSC01769.JPG',
  '图片压缩DSC02165.JPG',
  '图片压缩DSC02498.JPG',
  '图片压缩DSC02603.JPG',
  '图片压缩DSC02669.JPG',
  '图片压缩DSC02891.JPG',
  '图片压缩DSC03154.JPG',
  '图片压缩DSC03192.JPG',
  '图片压缩DSC03202.JPG',
  '图片压缩DSC03365.JPG',
  '图片压缩DSC03520.JPG',
  '图片压缩GIET_01.jpg',
  '图片压缩GIET成立仪式觀眾合影.jpg',
  '图片压缩GIET成立儀式領導合影.jpg',
  '图片压缩GIET成立儀式領導合影2.jpg',
  '图片压缩HarvardStanford_InnovationWorkshop.JPG',
  '图片压缩MutluCukurova.JPG',
  '图片压缩PSpeaking.jpg',
  '图片压缩PSpeaking2.jpg',
  '图片压缩PandVP.JPG',
  '图片压缩Panel Discussion.JPG',
  '图片压缩PaulKim.JPG',
  '图片压缩PresidentSoloSmile.jpg',
  '图片压缩ProfWang_P_VPs.JPG',
  '图片压缩Pspeaking_overview.jpg',
  '图片压缩ShaanXiNormalUni.jpg',
  '图片压缩Symposium_AllwithP.jpg',
  '图片压缩WANGShijin.jpg',
  '图片压缩YUE06028.JPG',
  '图片压缩YUE06051.JPG',
  '图片压缩YUE06052.JPG',
  '图片压缩YUE06071.JPG',
  '图片压缩YUE06207.jpg',
  '图片压缩YUE06590.jpg',
  '图片压缩YUE06651.jpg',
  '图片压缩YUE06725.jpg',
  '图片压缩YUE06803.jpg',
  '图片压缩YUE06836.jpg',
  '图片压缩YuChangxue.JPG',
  '图片压缩簽到處1.JPG',
  '图片压缩簽到處2.JPG',
  '图片压缩簽到處3.jpg',
  '图片压缩訊飛學習機展出.JPG',
  '图片压缩高影響力國際期刊論文發表工作坊的編輯們與鄭美紅副校長合影留念.JPG'
])

// 轮播图相关状态
const currentSlide = ref(0)
const carouselPhotos = ref<string[]>([])
const showGallery = ref(false)

// 选中的图片用于模态框显示
const selectedPhoto = ref('')
const showModal = ref(false)

// 随机选择8张图片用于轮播
const getRandomPhotos = () => {
  const shuffled = [...photos.value].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 8)
}

// 初始化轮播图片
onMounted(() => {
  carouselPhotos.value = getRandomPhotos()
})

// 轮播图自动播放
const autoPlay = ref(true)
let intervalId: NodeJS.Timeout | null = null

const startAutoPlay = () => {
  if (autoPlay.value && carouselPhotos.value.length > 0) {
    intervalId = setInterval(() => {
      nextSlide()
    }, 4000) // 每4秒切换一张
  }
}

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselPhotos.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? carouselPhotos.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// 监听轮播图片变化，重新开始自动播放
watch(carouselPhotos, () => {
  stopAutoPlay()
  currentSlide.value = 0
  nextTick(() => {
    startAutoPlay()
  })
}, { immediate: true })

// 组件卸载时清理定时器
onUnmounted(() => {
  stopAutoPlay()
})

// 打开图片模态框
const openPhotoModal = (photo: string) => {
  selectedPhoto.value = photo
  showModal.value = true
}

// 关闭模态框
const closeModal = () => {
  showModal.value = false
  selectedPhoto.value = ''
}

// 打开照片画廊
const openGallery = () => {
  showGallery.value = true
}

// 关闭照片画廊
const closeGallery = () => {
  showGallery.value = false
}

// 获取图片完整路径
const getPhotoPath = (filename: string) => {
  return `/Press Relaese Photo/${filename}`
}
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
        
        <!-- 视频部分 -->
        <div class="w-full max-w-6xl px-8 py-6">
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">{{ $t("Videos") }}</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="w-full max-w-4xl mx-auto">
                <video 
                  class="w-full h-auto rounded-lg shadow-lg"
                  controls
                  preload="metadata"
                  poster=""
                >
                  <source src="/vedio.mp4" type="video/mp4">
                  <p class="text-gray-600">{{ $t("Video Not Supported Message") }}</p>
                </video>
                <div class="mt-4 text-center">
                  <p class="text-sm text-gray-600">{{ $t("Video Description") }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 新闻稿部分 -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">{{ $t("Press Release") }}</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- 新闻稿卡片1 -->
              <a 
                href="https://aapsef.eduhk.hk/news-and-events/photo-gallery/harvard-eduhk-stanford-joint-symposium-emerging-technologies-and-future-talents-held-at-eduhk"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{{ $t("Press Card 1 Title") }}</h3>
                     <p class="text-base text-gray-600 mb-4 leading-relaxed">{{ $t("Press Card 1 Description") }}</p>
                    <span class="text-sm text-gray-500">aapsef.eduhk.hk</span>
                  </div>
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>

              <!-- 新闻稿卡片2 -->
              <a 
                href="https://www.eduhk.hk/en/press-releases/harvard-eduhk-stanford-joint-symposium-emerging-technologies-and-future-talents-held-at-eduhk"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{{ $t("Press Card 2 Title") }}</h3>
                     <p class="text-base text-gray-600 mb-4 leading-relaxed">{{ $t("Press Card 2 Description") }}</p>
                    <span class="text-sm text-gray-500">eduhk.hk</span>
                  </div>
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>

              <!-- 新闻稿卡片3 -->
              <a 
                href="https://aapsef.eduhk.hk/news-and-events/events/harvard-eduhk-stanford-joint-symposium-emerging-technologies-and-future-talents"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{{ $t("Press Card 3 Title") }}</h3>
                     <p class="text-base text-gray-600 mb-4 leading-relaxed">{{ $t("Press Card 3 Description") }}</p>
                    <span class="text-sm text-gray-500">aapsef.eduhk.hk</span>
                  </div>
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>

              <!-- 新闻稿卡片4 -->
              <a 
                href="https://www.eduhk.hk/en/conferences/harvard-eduhk-stanford-joint-symposium-emerging-technologies-and-future-talents"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{{ $t("Press Card 4 Title") }}</h3>
                     <p class="text-base text-gray-600 mb-4 leading-relaxed">{{ $t("Press Card 4 Description") }}</p>
                    <span class="text-sm text-gray-500">eduhk.hk</span>
                  </div>
                  <svg class="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Photos Section -->
          <section class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
              {{ t('press.photos') }}
            </h2>
            
            <!-- 轮播图容器 -->
            <div class="relative max-w-5xl mx-auto mb-6">
              <div class="overflow-hidden rounded-lg shadow-lg">
                <div 
                  class="flex transition-transform duration-500 ease-in-out"
                  :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                  @mouseenter="stopAutoPlay"
                  @mouseleave="startAutoPlay"
                >
                  <div 
                    v-for="(photo, index) in carouselPhotos" 
                    :key="index"
                    class="w-full flex-shrink-0"
                  >
                    <div class="aspect-[16/10] w-full">
                      <img 
                        :src="getPhotoPath(photo)" 
                        :alt="`Photo ${index + 1}`"
                        class="w-full h-full object-cover cursor-pointer"
                        @click="openPhotoModal(photo)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 轮播图控制按钮 -->
              <button 
                @click="prevSlide"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              <button 
                @click="nextSlide"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              
              <!-- 轮播图指示器 -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  v-for="(photo, index) in carouselPhotos"
                  :key="index"
                  @click="goToSlide(index)"
                  class="w-3 h-3 rounded-full transition-all"
                  :class="currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'"
                ></button>
              </div>
            </div>
            
            <!-- 查看更多图片链接 -->
            <div class="text-center">
              <button 
                @click="openGallery"
                class="text-green-800 hover:text-green-900 underline text-sm font-medium"
              >
                {{ t('press.viewMorePhotos') }}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

  <!-- 照片画廊模态框 -->
  <div 
    v-if="showGallery" 
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    @click="closeGallery"
  >
    <div 
      class="bg-white rounded-lg max-w-6xl max-h-[90vh] w-full mx-4 overflow-hidden"
      @click.stop
    >
      <!-- 画廊头部 -->
      <div class="flex items-center justify-between p-6 border-b">
        <h3 class="text-2xl font-bold text-gray-900">
          {{ t('press.photos') }}
        </h3>
        <button 
          @click="closeGallery"
          class="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- 画廊内容 -->
      <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div 
            v-for="photo in photos" 
            :key="photo"
            class="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            @click="openPhotoModal(photo)"
          >
            <div class="aspect-square bg-gray-100">
              <img 
                :src="getPhotoPath(photo)" 
                :alt="photo"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full p-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 图片模态框 -->
  <div 
    v-if="showModal" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
    @click="closeModal"
  >
    <div class="relative max-w-4xl max-h-full">
      <button 
        @click="closeModal"
        class="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors duration-200"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <img 
        :src="getPhotoPath(selectedPhoto)" 
        :alt="selectedPhoto"
        class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        @click.stop
      />
    </div>
  </div>
</template>

<style scoped>
/* 隐藏滚动条但保持滚动功能 */
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}
</style>