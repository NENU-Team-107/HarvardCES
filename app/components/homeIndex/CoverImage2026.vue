<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 调整图片顺序，使post与photo穿插
const slides = [
  { src: "/img/poster/cover/2026/26-photo1.jpg", type: "photo" },
  { src: "/img/poster/cover/2026/26-post1.jpg", type: "post" },
  { src: "/img/poster/cover/2026/26-photo2.jpg", type: "photo" }, 
  { src: "/img/poster/cover/2026/26-post2.jpg", type: "post" },
  { src: "/img/poster/cover/2026/26-photo3.jpg", type: "photo" },
  { src: "/img/poster/cover/2026/26-post3.jpg", type: "post" }
];

const currentIndex = ref(0);
const isLoading = ref(true);
const loadedImages = ref(0);
let autoPlayInterval: NodeJS.Timeout | null = null;

// 检查图片加载
const checkImageLoad = () => {
  loadedImages.value++;
  console.log(`图片加载成功: ${loadedImages.value}/${slides.length}`);
  if (loadedImages.value === slides.length) {
    isLoading.value = false;
    startAutoPlay();
  }
};

// 图片加载错误处理
const handleImageError = (src: string) => {
  console.error(`图片加载失败: ${src}`);
  loadedImages.value++;
  if (loadedImages.value === slides.length) {
    isLoading.value = false;
    startAutoPlay();
  }
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 3000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

// 下一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

// 上一张
const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? slides.length - 1 : currentIndex.value - 1;
};

// 跳转到指定图片
const goToSlide = (index: number) => {
  currentIndex.value = index;
};

// 处理图片点击事件
const handleImageClick = (slide: any, event: Event) => {
  // 如果是post类型的图片，跳转到2026论坛页面
  if (slide.type === 'post') {
    event.stopPropagation(); 
    navigateTo('/2026/symposium');
  }
  // photo类型的图片不做任何操作，保持轮播功能
};

onMounted(() => {
  // 预加载所有图片
  slides.forEach(slide => {
    const img = new Image();
    img.onload = checkImageLoad;
    img.onerror = () => handleImageError(slide.src);
    img.src = slide.src;
  });
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <div class="flex w-full items-center justify-center justify-self-center duration-200 mt-12">
    <!-- 加载状态 -->
    <div v-if="isLoading" class="justify-self-center">
      <div class="flex items-center justify-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span class="ml-2 text-gray-600">加载中...</span>
      </div>
    </div>
    
    <!-- 轮播容器 -->
    <div v-else class="w-full flex justify-center items-center overflow-hidden mt-4 relative" 
         @mouseenter="stopAutoPlay" 
         @mouseleave="startAutoPlay">
      
      <!-- 图片容器 -->
      <div class="relative w-full max-w-6xl">
        <div class="overflow-hidden rounded-lg">
          <div class="flex transition-transform duration-500 ease-in-out" 
               :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(slide, index) in slides" 
                 :key="index" 
                 class="w-full flex-shrink-0 flex justify-center">
              <img 
                :src="slide.src" 
                :alt="`2026论坛海报 ${index + 1}`"
                :class="[
                  'w-full max-h-[600px] object-cover box-shadow',
                  slide.type === 'post' ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''
                ]"
                draggable="false"
                @click="handleImageClick(slide, $event)"
              />
            </div>
          </div>
        </div>
        
        <!-- 左右箭头 -->
        <button 
          @click="prevSlide" 
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all text-lg z-10">
          ←
        </button>
        <button 
          @click="nextSlide" 
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all text-lg z-10">
          →
        </button>
        
        <!-- 指示器 -->
        <div class="flex justify-center mt-6 space-x-3">
          <button 
            v-for="(slide, index) in slides" 
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-4 h-4 rounded-full transition-all',
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            ]"
            :title="slide.type === 'post' ? '点击图片可跳转到论坛页面' : ''">
          </button>
        </div>
        
        <!-- 提示文字 -->
        <div class="text-center mt-2 text-sm text-gray-500">
          <span v-if="slides[currentIndex]?.type === 'post'" class="text-blue-600">
            💡 点击图片可跳转到第二届论坛（2026）页面
          </span>
          <span v-else>
            📸 论坛现场照片
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box-shadow {
  border-radius: 10px;
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
}
</style>