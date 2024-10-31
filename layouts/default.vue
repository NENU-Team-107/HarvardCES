<template>
  <div class="w-full h-full min-h-full flex flex-col">
    <AppHeader />
    <div class="flex-1 flex flex-col justify-center items-center">
      <!-- 
      slot是默认插入的位置，
      如果本文件的组件一组括号包裹了某个内容，
      这个内容会默认渲染在这个位置，
      如果想要多个插槽，可以添加多个slot，但是要分别命名，如<slot #other/>
      使用的时候，可以在组件中使用<template #other>...</template>来使用 -->
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/common/AppHeader.vue";
import AppFooter from "~/components/common/AppFooter.vue";
// 可以注意一下引入的路径的写法，~符号表示从项目根目录开始查找，/表示从public/开始查找
</script>
