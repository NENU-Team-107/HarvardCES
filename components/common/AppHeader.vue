<script lang="ts" setup>
import { ref } from "vue";
import LangSwitch from "./LangSwitch.vue";

interface RouterItem {
  name: string;
  path: string;
  children?: RouterItem[];
}

const routerArray = ref<RouterItem[]>([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Session",
    path: "/session",
  },
  {
    name: "Speakers",
    path: "/speakers",
  },
  {
    name: "Contact",
    path: "/contact"
  }
]);

const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

</script>

<template>
  <div class="w-full flex h-24 bg-nav-bg justify-between items-center px-16 z-50 fixed top-0 shadow-sm">
    <div class="h-full flex justify-center items-center">
      <NuxtLinkLocale to="/" class="text-blue-500">
        <NuxtImg src="img/logo/HostLogo_small.jpg" class="h-full" sizes="600"></NuxtImg>
      </NuxtLinkLocale>
    </div>
    <div class="h-full justify-center items-center flex-row hidden md:flex">
      <div v-for="item in routerArray" :key="item.path" class="relative group mr-6 text-lg font-semibold">
        <NuxtLinkLocale :to="item.path" class="text-blue-500 pl-3">
          <span class="underline">{{ $t(item.name) }}</span>
        </NuxtLinkLocale>
        <div v-if="item.children"
          class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <NuxtLinkLocale v-for="child in item.children" :key="child.path" :to="child.path"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            {{ $t(child.name) }}
          </NuxtLinkLocale>
        </div>
      </div>
      <div class="relative group mr-6 text-lg font-semibold">
        <LangSwitch />
      </div>
    </div>
    <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="text-blue-500 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div v-show="isMenuOpen"
      class="absolute top-0 right-0 mt-16 w-48 bg-white border border-gray-200 rounded shadow-lg md:hidden">
      <div v-for="item in routerArray" :key="item.path" class="relative group text-lg font-semibold">
        <NuxtLinkLocale :to="item.path" class="block px-4 py-2 text-blue-500" @click="closeMenu">
          <span class="underline">{{ $t(item.name) }}</span>
        </NuxtLinkLocale>
        <div v-if="item.children" class="mt-2 bg-white border border-gray-200 rounded shadow-lg">
          <NuxtLinkLocale v-for="child in item.children" :key="child.path" :to="child.path"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100" @click="closeMenu">
            {{ $t(child.name) }}
          </NuxtLinkLocale>
        </div>
      </div>
      <LangSwitch class="block px-4 py-2" @languageChanged="closeMenu" />
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