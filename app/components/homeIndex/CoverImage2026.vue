<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

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

// 计算显示的图片索引（包括前后图片）
const visibleSlides = computed(() => {
  const total = slides.length;
  const prevIndex = (currentIndex.value - 1 + total) % total;
  const nextIndex = (currentIndex.value + 1) % total;
  const prev2Index = (currentIndex.value - 2 + total) % total;
  const next2Index = (currentIndex.value + 2) % total;
  
  return [
    { ...slides[prev2Index], position: 'far-left', index: prev2Index },
    { ...slides[prevIndex], position: 'left', index: prevIndex },
    { ...slides[currentIndex.value], position: 'center', index: currentIndex.value },
    { ...slides[nextIndex], position: 'right', index: nextIndex },
    { ...slides[next2Index], position: 'far-right', index: next2Index }
  ];
});

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
  }, 4000); // 稍微延长自动播放间隔
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? slides.length - 1 : currentIndex.value - 1;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

const handleImageClick = (slide: any, event: Event) => {
  if (slide.type === 'post') {
    event.stopPropagation(); 
    navigateTo('/2026/symposium');
  }
};

// 点击侧边图片跳转
const handleSideImageClick = (targetIndex: number) => {
  currentIndex.value = targetIndex;
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
    
    <!-- 层叠轮播容器 -->
    <div v-else class="w-full flex justify-center items-center mt-4 relative carousel-container" 
         @mouseenter="stopAutoPlay" 
         @mouseleave="startAutoPlay">
      
      <!-- 图片层叠容器 -->
      <div class="relative w-full max-w-8xl h-[700px] flex items-center justify-center"> <!-- 调整高度从500px到700px -->
        <div 
          v-for="slide in visibleSlides" 
          :key="slide.index"
          :class="[
            'absolute transition-all duration-700 ease-out cursor-pointer',
            {
              // 远左侧图片
              'far-left-slide': slide.position === 'far-left',
              // 左侧图片
              'left-slide': slide.position === 'left',
              // 中心图片
              'center-slide': slide.position === 'center',
              // 右侧图片
              'right-slide': slide.position === 'right',
              // 远右侧图片
              'far-right-slide': slide.position === 'far-right'
            }
          ]"
          @click="slide.position === 'center' ? handleImageClick(slide, $event) : handleSideImageClick(slide.index)">
          <img 
            :src="slide.src" 
            :alt="`2026论坛海报 ${slide.index + 1}`"
            :class="[
              'w-full h-full object-cover box-shadow transition-all duration-700',
              slide.type === 'post' && slide.position === 'center' ? 'hover:opacity-90' : '',
              slide.position !== 'center' ? 'hover:scale-105' : ''
            ]"
            draggable="false"
          />
          
          <!-- 侧边图片遮罩 -->
          <div 
            v-if="slide.position !== 'center'"
            class="absolute inset-0 bg-black transition-opacity duration-700"
            :class="{
              'opacity-60': slide.position === 'left' || slide.position === 'right',
              'opacity-75': slide.position === 'far-left' || slide.position === 'far-right'
            }">
          </div>
        </div>
        
        <!-- 左右箭头 -->
        <button 
          @click="prevSlide" 
          class="absolute left-8 top-1/2 transform -translate-y-1/2 bg-green-800 text-white p-4 rounded-full hover:bg-green-900 transition-all duration-300 z-20 hover:scale-110 shadow-lg border-2 border-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          @click="nextSlide" 
          class="absolute right-8 top-1/2 transform -translate-y-1/2 bg-green-800 text-white p-4 rounded-full hover:bg-green-900 transition-all duration-300 z-20 hover:scale-110 shadow-lg border-2 border-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      
      <!-- 指示器 -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300',
            currentIndex === index ? 'bg-blue-600 scale-125' : 'bg-white bg-opacity-60 hover:bg-opacity-80'
          ]"
          :title="slide.type === 'post' ? '点击图片可跳转到论坛页面' : ''">
        </button>
      </div>
      
      <!-- 提示文字 -->
      <div class="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-500 z-20">
        <span v-if="slides[currentIndex]?.type === 'post'" class="text-blue-600">
          💡 点击图片可跳转到第二届论坛（2026）页面
        </span>
        <span v-else>
          📸 第一届论坛现场照片
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  perspective: 1000px;
}

.box-shadow {
  border-radius: 10px;
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
}

/* 中心图片样式 - 1.4倍放大 */
.center-slide {
  z-index: 15;
  transform: translateX(0) scale(1);
  width: 896px;  /* 640 × 1.4 = 896px */
  height: 504px; /* 360 × 1.4 = 504px */
}

/* 左侧图片样式 - 1.4倍放大 */
.left-slide {
  z-index: 10;
  transform: translateX(-250px) scale(0.8) rotateY(15deg); /* 从-350px调整为-250px */
  width: 717px;  /* 512 × 1.4 = 717px */
  height: 403px; /* 288 × 1.4 = 403px */
}

/* 右侧图片样式 - 1.4倍放大 */
.right-slide {
  z-index: 10;
  transform: translateX(250px) scale(0.8) rotateY(-15deg); /* 从350px调整为250px */
  width: 717px;  /* 512 × 1.4 = 717px */
  height: 403px; /* 288 × 1.4 = 403px */
}

/* 远左侧图片样式 - 1.4倍放大 */
.far-left-slide {
  z-index: 5;
  transform: translateX(-420px) scale(0.6) rotateY(25deg); /* 从-588px调整为-420px */
  width: 538px;  /* 384 × 1.4 = 538px */
  height: 302px; /* 216 × 1.4 = 302px */
}

/* 远右侧图片样式 - 1.4倍放大 */
.far-right-slide {
  z-index: 5;
  transform: translateX(420px) scale(0.6) rotateY(-25deg); /* 从588px调整为420px */
  width: 538px;  /* 384 × 1.4 = 538px */
  height: 302px; /* 216 × 1.4 = 302px */
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .center-slide {
    width: 717px;  /* 512 × 1.4 = 717px */
    height: 403px; /* 288 × 1.4 = 403px */
  }
  
  .left-slide, .right-slide {
    width: 574px;  /* 410 × 1.4 = 574px */
    height: 322px; /* 230 × 1.4 = 322px */
    transform: translateX(-180px) scale(0.75) rotateY(15deg); /* 从-252px调整为-180px */
  }
  
  .right-slide {
    transform: translateX(180px) scale(0.75) rotateY(-15deg); /* 从252px调整为180px */
  }
  
  .far-left-slide, .far-right-slide {
    width: 430px;  /* 307 × 1.4 = 430px */
    height: 242px; /* 173 × 1.4 = 242px */
    transform: translateX(-300px) scale(0.55) rotateY(25deg); /* 从-420px调整为-300px */
  }
  
  .far-right-slide {
    transform: translateX(300px) scale(0.55) rotateY(-25deg); /* 从420px调整为300px */
  }
}

@media (max-width: 768px) {
  .center-slide {
    width: 538px;  /* 384 × 1.4 = 538px */
    height: 302px; /* 216 × 1.4 = 302px */
  }
  
  .left-slide, .right-slide {
    width: 430px;  /* 307 × 1.4 = 430px */
    height: 242px; /* 173 × 1.4 = 242px */
    transform: translateX(-120px) scale(0.7) rotateY(20deg); /* 从-168px调整为-120px */
  }
  
  .right-slide {
    transform: translateX(120px) scale(0.7) rotateY(-20deg); /* 从168px调整为120px */
  }
  
  .far-left-slide, .far-right-slide {
    display: none; /* 在小屏幕上隐藏最远的图片 */
  }
}
</style>