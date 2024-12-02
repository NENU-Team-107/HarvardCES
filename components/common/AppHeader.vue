<script lang="ts" setup>
import { ref } from "vue";
import LangSwitch from "./LangSwitch.vue";
import { routerArray } from "~/lib/data";

const routers = ref(routerArray);

const isMenuOpen = ref<boolean>(false);

const submenu = ref(routers.value.map((item) => {
  return {
    show: false
  };
}))

const handleSubMenu = (index: number) => {
  console.log(index)
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
</script>

<template>
  <div>
    <div
      class="w-full flex md:h-24 h-20 bg-nav-bg justify-between items-center md:px-16 px-5 z-50 fixed top-0 shadow-sm">
      <div class="h-full flex justify-center items-center">
        <NuxtLink to="/" class="text-blue-500" target="_top">
          <div class="flex">
            <NuxtImg src="img/logo/HostLogo_small.jpg" class="h-full md:max-h-24 max-h-20" sizes="md:600 200"></NuxtImg>
            <NuxtImg src="img/logo/Unesco logo.pic.jpg"
              class="justify-items-center items-center my-auto md:max-h-14 max-h-10" sizes="md:600 200"></NuxtImg>
          </div>
        </NuxtLink>
      </div>
      <!-- 客户端显示 -->
      <div class="h-full justify-center items-center flex-row hidden md:flex">
        <div v-for="item in routers" :key="item.path" class="relative group mr-6 text-lg font-semibold">
          <div v-if="item.children">
            <NuxtLink :to="item.children[0].path" class="text-blue-500 pl-3">
              <span class="underline">{{ $t(item.name) }}</span>
            </NuxtLink>
            <div
              class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <NuxtLink v-for="child in item.children" :key="child.path" :to="child.path"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base z-50">
                <span class="underline">{{ $t(child.name) }}</span>
              </NuxtLink>
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
          <LangSwitch />
        </div>
      </div>
      <!-- 移动端显示 -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="text-blue-500 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div v-show="isMenuOpen"
        class="absolute top-0 right-0 mt-16 w-48 bg-white border border-gray-200 rounded shadow-lg md:hidden">
        <div v-for="(item, index) in routerArray" :key="item.path" class="relative group text-lg font-semibold">
          <div v-if="item.children" class="bg-white border">
            <span @click="handleSubMenu(index)" class="underline cursor-pointer block w-full px-4 py-2 text-gray-700">
              {{ $t(item.name) }}
            </span>
            <div v-if="submenu[index].show">
              <NuxtLink v-for="child in item.children" :key="child.path" :to="child.path"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="closeMenu">
                <span class="text-sm">{{ $t(child.name) }}</span>
              </NuxtLink>
            </div>
          </div>
          <div v-else>
            <NuxtLink :to="item.path" class="underline cursor-pointer block w-full px-4 py-2 text-gray-700"
              @click="closeMenu">
              <span>{{ $t(item.name) }}</span>
            </NuxtLink>
          </div>
        </div>
        <LangSwitch class="block px-4 py-2" @languageChanged="closeMenu" />
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

.cursor-pointer {
  cursor: pointer;
}
</style>