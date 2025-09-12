<script lang="ts" setup>
import { ref, watch } from "vue";
import LangSwitcher from "./LangSwitcher.vue";
import type { RouterItem } from "~/lib/model";

const route = useRoute();

const routerArray = async (year: number) => {
    const resp = await $fetch('/api/route/getByYear', {
        method: 'GET',
        query: {
          year: year
        }
    })
    const { status, data } = resp
    if (status === "Success" && data !== null) {
        routers.value = data;
        // 初始化三级菜单状态
        initThirdLevelMenus();
    }
}

onBeforeMount(() => {
  const currentYear = route.path.split('/')[1] || '2026';
  const year = parseInt(currentYear)
  routerArray(year);
});

// 监听路由变化，当年份改变时重新加载导航栏
watch(() => route.path, (newPath) => {
  const currentYear = newPath.split('/')[1] || '2026';
  const year = parseInt(currentYear);
  routerArray(year);
}, { immediate: false });

const routers = ref<RouterItem[]>([]);

const isMenuOpen = ref<boolean>(false);

const submenu = ref<{ show: boolean }[]>([]);

// 初始化submenu状态
const initSubmenu = () => {
  submenu.value = routers.value.map(() => ({ show: false }));
};

// 监听routers变化，重新初始化submenu
watch(routers, () => {
  initSubmenu();
}, { immediate: true });

// 三级菜单状态管理
const thirdLevelMenus = ref<{ [key: string]: boolean }>({});

// 初始化三级菜单状态
const initThirdLevelMenus = () => {
  const menuStates: { [key: string]: boolean } = {};
  routers.value.forEach((item, itemIndex) => {
    if (item.children) {
      item.children.forEach((child, childIndex) => {
        if (child.children) {
          const key = `${itemIndex}-${childIndex}`;
          menuStates[key] = false;
        }
      });
    }
  });
  thirdLevelMenus.value = menuStates;
};

// 切换三级菜单显示状态
const toggleThirdLevelMenu = (itemIndex: number, childIndex: number, event: Event) => {
  event.preventDefault();
  event.stopPropagation();
  
  const key = `${itemIndex}-${childIndex}`;
  
  // 关闭其他所有三级菜单
  Object.keys(thirdLevelMenus.value).forEach(k => {
    if (k !== key) {
      thirdLevelMenus.value[k] = false;
    }
  });
  
  // 切换当前三级菜单状态
  thirdLevelMenus.value[key] = !thirdLevelMenus.value[key];
};

// 检查三级菜单是否显示
const isThirdLevelMenuVisible = (itemIndex: number, childIndex: number): boolean => {
  const key = `${itemIndex}-${childIndex}`;
  return thirdLevelMenus.value[key] || false;
};

const handleSubMenu = (index: number) => {
  if (index >= 0 && index < submenu.value.length) {
    submenu.value[index].show = !submenu.value[index].show;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// 点击外部区域关闭所有三级菜单
const closeAllThirdLevelMenus = () => {
  Object.keys(thirdLevelMenus.value).forEach(key => {
    thirdLevelMenus.value[key] = false;
  });
};

// 监听全局点击事件
onMounted(() => {
  document.addEventListener('click', closeAllThirdLevelMenus);
});

onUnmounted(() => {
  document.removeEventListener('click', closeAllThirdLevelMenus);
});
</script>

<template>
  <div>
    <div class="w-full flex md:h-24 h-20 bg-nav-bg justify-between items-center md:px-16 px-5 z-50 fixed top-0 shadow-sm">
      <div class="h-full flex justify-center items-center">
        <NuxtLink to="/" target="_top">
          <div class="flex">
            <NuxtImg src="img/logo/HostLogo_small.jpg" class="h-full md:max-h-24 max-h-20" sizes="md:600 200" />
            <NuxtImg src="img/logo/sym_logo.png" class="h-full md:max-h-16 max-h-10 mt-6" sizes="md:600 200" />
          </div>
        </NuxtLink>
      </div>
      <!-- 客户端显示 -->
      <div class="h-full justify-center items-center flex-row hidden md:flex">
        <div v-for="(item, itemIndex) in routers" :key="item.path" class="relative group mr-6 text-lg font-semibold">
          <div v-if="item.children">
            <NuxtLink :to="item.path" class="text-blue-500 pl-3">
              <span class="underline">{{ $t(item.name) }}</span>
            </NuxtLink>
            <div class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[60]">
              <div v-for="(child, childIndex) in item.children" :key="child.path" class="relative">
                <!-- 有子菜单的二级菜单项 -->
                <div v-if="child.children" class="relative">
                  <div 
                    class="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm cursor-pointer relative flex items-center justify-between"
                    @click="toggleThirdLevelMenu(itemIndex, childIndex, $event)"
                  >
                    <span class="underline text-sm">{{ $t(child.name) }}</span>
                    <svg 
                      :class="[
                        'w-3 h-3 transform transition-transform duration-200 flex-shrink-0',
                        isThirdLevelMenuVisible(itemIndex, childIndex) ? 'rotate-180' : 'rotate-90'
                      ]" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <!-- 三级菜单 - 点击控制显示 -->
                  <div 
                    v-show="isThirdLevelMenuVisible(itemIndex, childIndex)"
                    class="absolute left-0 top-full w-48 bg-white border border-gray-200 rounded shadow-lg z-[70] mt-1 transition-all duration-200"
                    @click.stop
                  >
                    <NuxtLink
                      v-for="grandchild in child.children" 
                      :key="grandchild.path" 
                      :to="grandchild.path"
                      class="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors duration-150"
                      @click="closeAllThirdLevelMenus"
                    >
                      <span class="underline">{{ $t(grandchild.name) }}</span>
                    </NuxtLink>
                  </div>
                </div>
                <!-- 没有子菜单的二级菜单项 -->
                <NuxtLink
                  v-else
                  :to="child.path"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors duration-150"
                >
                  <span class="underline">{{ $t(child.name) }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div v-else>
            <NuxtLink v-if="item.name === 'Home'" :to="item.path" class="text-blue-500 pl-3" target="_top">
              <span class="underline">{{ $t(item.name) }}</span>
            </NuxtLink>
            <NuxtLink v-else :to="item.path" class="text-blue-500 pl-3">
              <span class="underline">{{ $t(item.name) }}</span>
            </NuxtLink>
          </div>
        </div>
        <div class="relative group mr-6 text-lg font-semibold">
          <LangSwitcher />
        </div>
      </div>
      <!-- 移动端显示 -->
      <div class="md:hidden flex items-center">
        <button class="text-blue-500 focus:outline-none" @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <!-- 移动端菜单 -->
      <div
        v-show="isMenuOpen"
        class="absolute top-full left-0 right-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden z-50"
      >
        <div class="max-h-96 overflow-y-auto">
          <div v-for="(item, index) in routers" :key="item.path" class="border-b border-gray-100 last:border-b-0">
            <div v-if="item.children" class="bg-white">
              <!-- 主菜单项链接 -->
               <NuxtLink
                 :to="item.path"
                 class="block px-4 py-2 text-gray-700 hover:bg-gray-50 font-bold border-b border-gray-100"
                 @click="closeMenu"
               >
                 {{ $t(item.name) }}
               </NuxtLink>
              <!-- 子菜单展开按钮 -->
              <button 
                class="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 flex items-center justify-between text-sm"
                @click="handleSubMenu(index)"
              >
                <span>{{ $t('More Options') }}</span>
                <svg 
                  :class="[
                    'w-4 h-4 transform transition-transform duration-200',
                    submenu[index]?.show ? 'rotate-180' : 'rotate-0'
                  ]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div v-if="submenu[index]?.show" class="bg-gray-50">
                <div v-for="child in item.children" :key="child.path">
                  <!-- 有三级菜单的二级菜单项 -->
                  <div v-if="child.children" class="border-b border-gray-200 last:border-b-0">
                    <div class="px-6 py-2 text-sm font-medium text-gray-600 bg-gray-100">
                      {{ $t(child.name) }}
                    </div>
                    <NuxtLink
                      v-for="grandchild in child.children" 
                      :key="grandchild.path" 
                      :to="grandchild.path"
                      class="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                      @click="closeMenu"
                    >
                      {{ $t(grandchild.name) }}
                    </NuxtLink>
                  </div>
                  <!-- 没有三级菜单的二级菜单项 -->
                  <NuxtLink
                    v-else
                    :to="child.path"
                    class="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    @click="closeMenu"
                  >
                    {{ $t(child.name) }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div v-else>
              <NuxtLink
                :to="item.path" 
                class="block w-full px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                @click="closeMenu"
              >
                {{ $t(item.name) }}
              </NuxtLink>
            </div>
          </div>
          <!-- 语言切换器 -->
          <div class="px-4 py-3 border-t border-gray-200 bg-gray-50">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.underline {
  position: relative;
  display: inline-block;
  color: #333;
  text-decoration: none;
}

.underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: #0d9d57;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.underline:hover::after {
  transform: scaleX(1);
}
</style>