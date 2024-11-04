<script lang="ts" setup>
import { ref } from "vue";
import LangSwitch from "./LangSwitch.vue";

interface RouterItem {
  name: string;
  path: string;
}

const routerArray = ref<RouterItem[]>([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Speakers",
    path: "/speakers",
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  },
]);

</script>

// 最开始写样式的时候可以随便找个颜色填一下背景，确定一下元素的范围，调整好位置之后再去掉背景色

<template>
  <div class="w-full flex h-16 bg-gray-100 justify-between items-center px-3">
    <div class="h-full flex justify-center items-center">
      <NuxtLinkLocale to="/" class="text-blue-500">
        <!-- TODO 更改 LOGO 的大小以及导航栏的背景颜色 -->
        <NuxtImg src="/img/logo/HostLogo_small.jpg" class="w-11/12"></NuxtImg>
        <!-- 也可以插入图片, NuxtLink包裹可以点击跳转 -->
      </NuxtLinkLocale>
    </div>
    <!-- 不太确定对导航栏这一块的动态路由的意思，如果是希望样式一样，但是内容不同的话，把路由当作参数传进来就行 -->
    <div class="h-full flex justify-center items-center flex-row">
      <NuxtLinkLocale v-for="item in routerArray" :to="item.path" class="text-blue-500 pl-3">
        <span class="underline">{{ $t(item.name) }}</span>
      </NuxtLinkLocale>
      <LangSwitch>
      </LangSwitch>
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