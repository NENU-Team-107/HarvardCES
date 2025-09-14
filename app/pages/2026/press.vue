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
  '图片压缩GIET成立儀式觀眾合影.jpg',
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

// 选中的图片用于模态框显示
const selectedPhoto = ref('')
const showModal = ref(false)

// 图片画廊折叠状态
const isExpanded = ref(false)
const photosPerRow = 6 // xl屏幕下每行6张图片
const visibleRows = 4 // 默认显示4行
const maxVisiblePhotos = photosPerRow * visibleRows // 最多显示24张图片

// 计算显示的图片
const visiblePhotos = computed(() => {
  if (isExpanded.value) {
    return photos.value
  }
  return photos.value.slice(0, maxVisiblePhotos)
})

// 切换展开/收起状态
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

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
        
        <!-- 新闻稿部分 -->
        <div class="w-full max-w-4xl px-8 py-6">
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">{{ $t("Press Release") }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- 新闻稿卡片1 -->
              <a 
                href="https://aapsef.eduhk.hk/news-and-events/photo-gallery/harvard-eduhk-stanford-joint-symposium-emerging-technologies-and-future-talents-held-at-eduhk"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{{ $t("Press Card 1 Title") }}</h3>
                     <p class="text-sm text-gray-600 mb-3">{{ $t("Press Card 1 Description") }}</p>
                    <span class="text-xs text-gray-500">aapsef.eduhk.hk</span>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>

              <!-- 新闻稿卡片2 -->
              <a 
                href="https://www.eduhk.hk/en/press-releases/harvard-eduhk-stanford-joint-symposium-emerging-technologies-and-future-talents-held-at-eduhk"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{{ $t("Press Card 2 Title") }}</h3>
                     <p class="text-sm text-gray-600 mb-3">{{ $t("Press Card 2 Description") }}</p>
                    <span class="text-xs text-gray-500">eduhk.hk</span>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>

              <!-- 新闻稿卡片3 -->
              <a 
                href="https://aapsef.eduhk.hk/news-and-events/events/harvard-eduhk-stanford-joint-symposium-emerging-technologies-and-future-talents"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{{ $t("Press Card 3 Title") }}</h3>
                     <p class="text-sm text-gray-600 mb-3">{{ $t("Press Card 3 Description") }}</p>
                    <span class="text-xs text-gray-500">aapsef.eduhk.hk</span>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>

              <!-- 新闻稿卡片4 -->
              <a 
                href="https://www.eduhk.hk/en/conferences/harvard-eduhk-stanford-joint-symposium-emerging-technologies-and-future-talents"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{{ $t("Press Card 4 Title") }}</h3>
                     <p class="text-sm text-gray-600 mb-3">{{ $t("Press Card 4 Description") }}</p>
                    <span class="text-xs text-gray-500">eduhk.hk</span>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <!-- 照片部分 -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold mb-4">{{ $t("Photos") }}</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
              <div 
                v-for="photo in visiblePhotos" 
                :key="photo"
                class="relative group cursor-pointer overflow-hidden rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                @click="openPhotoModal(photo)"
              >
                <div class="w-full h-32 bg-gray-100">
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
            
            <!-- 展开/收起按钮 -->
             <div v-if="photos.length > maxVisiblePhotos" class="flex justify-center mt-6">
               <button 
                 @click="toggleExpanded"
                 class="w-12 h-12 bg-gray-100 hover:bg-gray-200 hover:scale-110 text-gray-600 hover:text-gray-800 rounded-full transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
               >
                 <svg 
                   class="w-6 h-6 transition-transform duration-200" 
                   :class="{ 'rotate-180': isExpanded }"
                   fill="none" 
                   stroke="currentColor" 
                   viewBox="0 0 24 24"
                 >
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                 </svg>
               </button>
             </div>
          </div>
          
          <!-- 视频部分 -->
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