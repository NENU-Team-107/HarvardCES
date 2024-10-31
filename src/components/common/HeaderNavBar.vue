<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Title');

interface RouterType {
    path: string;
    name: string;
    children?: RouterType[];
}

// 可以在这里定义路由
const routerArry = defineModel('RouterArray',{
    required:false,
    type: Array<RouterType>,
    default: [
        { path: '/', name: '首页' },
        {path:'/guests',name :'嘉宾',children:[{path:'/guests/dodola',name:'guest-dodola'}]},
        { path: '/contact', name: '联系方式' },
    ]
})

</script>

<template>
  <header class="flex flex-row w-full h-12 bg-slate-50">
    <div class="w-full flex justify-between items-center flex-row">
      <div>{{ title }}</div>
      <nav class="flex space-x-4 flex-row">
        <ul v-for="item in routerArry" class="flex flex-row">
          <li v-for="subtitle in item.children">
            <NuxtLink :to="subtitle.path">{{ subtitle.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>