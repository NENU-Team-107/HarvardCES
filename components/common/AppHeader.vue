<script lang="ts" setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import LangSwitch from "./LangSwitch.vue";
const title = "Nuxt.js";


const { locale, locales, setLocale } = useI18n()

// 如果数据结构比较复杂，可以定义一个数据结构

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
    name: "Speakers",
    path: "/speakers",
    children: [ // 我推荐不要子路由，懒得调样式了
      {
        name: "Tom",
        path: "/speakers/tom",
      },
      {
        name: "Jerry",
        path: "/speakers/jerry",
      },
    ],
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
  <div class="w-full flex h-12 bg-gray-100 justify-between items-center">
    <div class="h-full flex justify-center items-center">
      <NuxtLinkLocale to="/" class="text-blue-500">
        <span>{{ title }}</span>
        <!-- 也可以插入图片, NuxtLink包裹可以点击跳转 -->
      </NuxtLinkLocale>
    </div>
    <!-- 不太确定对导航栏这一块的动态路由的意思，如果是希望样式一样，但是内容不同的话，把路由当作参数传进来就行 -->
    <div class="h-full flex justify-center items-center flex-row">
      <NuxtLinkLocale v-for="item in routerArray" :to="item.path" class="text-blue-500 mx-3">
        <span>{{ $t(item.name) }}</span>
      </NuxtLinkLocale>
    </div>
    <LangSwitch>
    </LangSwitch>
  </div>
</template>

// 比较好用的样式: 水平垂直居中: flex justify-center items-center
// justify-xxxx还有其他属性, 基本可以满足大部分需求