<script setup lang="ts">

const sequenceTabs = [
  {
    key: 'One-year full-time mode',
    label: '全日制',
  },
  {
    key: 'Two-year part-time mode',
    label: '兩年兼讀制',
  }
];
const coursesTabs = [
  {
    key: 'Core Courses',
    label: '必修科目',
  },
  {
    key: 'Elective Courses',
    label: '選修科目',
  }
];
const activeTab = ref('One-year full-time mode');
</script>
<template>
  <div class="w-full mx-5 my-5">
    <p class="text-center">本課程設有24個學分，包括四門必修課和四門選修課，每科3個學分。學員可在一年內（全日制）完成整個課程學習。</p>
    <div class="flex w-full justify-between items-center my-5">
      <div class="flex flex-col">
        <div class="text-lg font-bold ml-1  text-slate-900 dark:text-slate-200">
          学制
        </div>
        <ul class="hover:cursor-pointer">
          <li v-for="tab in sequenceTabs" :key="tab.key" @click="activeTab = tab.key">
            <span
              :class="['block border-l pl-4 -ml-px py-1 justify-center w-40 text-lg',
                activeTab === tab.key ? 'border-current font-bold  text-orange-700/90 rounded-sm' : ' hover:border-orange-700/90 border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900']">
              {{ tab.label }}
            </span>
          </li>
        </ul>
        <div class="text-lg font-bold ml-1  text-slate-900 dark:text-slate-200">
          课程
        </div>
        <ul class="hover:cursor-pointer">
          <li v-for="tab in coursesTabs" :key="tab.key" @click="activeTab = tab.key">
            <span
              :class="['block border-l pl-4 -ml-px py-1 justify-center w-40 text-lg',
                activeTab === tab.key ? 'border-current font-bold  text-orange-700/90 rounded-sm' : ' hover:border-orange-700/90 border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900']">
              {{ tab.label }}
            </span>
          </li>
        </ul>
      </div>
      <div class="flex-1 flex justify-center items-center bg-red-400">
        <div v-if="activeTab === 'One-year full-time mode'">
          <p>全日制</p>
        </div>
        <div v-else-if="activeTab === 'Two-year part-time mode'">
          <p>兩年兼讀制</p>
        </div>
        <div v-else-if="activeTab === 'Core Courses'">
          <p>必修科目</p>
        </div>
        <div v-else-if="activeTab === 'Elective Courses'">
          <p>選修科目</p>
        </div>
      </div>
    </div>
  </div>
</template>