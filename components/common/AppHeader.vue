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
    name: "Registration",
    path: "/registration",
  },
  {
    name: "Speakers",
    path: "/speakers",
  },
  {
    name: "Contact",
    path: "/contact"
  },
]);

</script>

<template>
  <div class="w-full flex h-22 bg-white/80 justify-between items-center px-16 z-10">
    <div class="h-full flex justify-center items-center">
      <NuxtLinkLocale to="/" class="text-blue-500">
        <!-- TODO 更改 LOGO 的大小以及导航栏的背景颜色 -->
        <NuxtImg src="/img/logo/HostLogo_small.jpg" class="w-11/12"></NuxtImg>
        <!-- 也可以插入图片, NuxtLink包裹可以点击跳转 -->
      </NuxtLinkLocale>
    </div>
    <!-- 不太确定对导航栏这一块的动态路由的意思，如果是希望样式一样，但是内容不同的话，把路由当作参数传进来就行 -->
    <div class="h-full flex justify-center items-center flex-row">
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
      <LangSwitch />
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
  background: #007BFF;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.underline:hover::after {
  transform: scaleX(1);
}
</style>

// 比较好用的样式: 水平垂直居中: flex justify-center items-center
// justify-xxxx还有其他属性, 基本可以满足大部分需求