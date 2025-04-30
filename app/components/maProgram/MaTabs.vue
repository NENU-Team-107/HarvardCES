<script lang="ts" setup>
import Introduction from './tabs/Introduction.vue';
import Overview from './tabs/Overview.vue';
import Requirements from './tabs/Requirements.vue';
const tabs = [
  {
    key: 'Introduction',
    label: 'Introduction',
  },
  {
    key: 'Overview',
    label: 'Overview',
  },
  {
    key: 'Admission',
    label: 'Admission',
  }
];

const activeTab = ref('Introduction');
</script>
<template>
  <div class="w-full">
    <div class="flex w-full justify-between items-center">
      <ul class="border-b border-slate-200 space-x-6 flex whitespace-nowrap mb-px">
        <li v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key">
          <h2>
            <span
              :class="['flex text-lg leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px hover:cursor-pointer justify-center w-fit',
                activeTab === tab.key ? 'text-orange-700/90 border-current' : 'text-slate-900 border-transparent hover:border-slate-300']">
              {{ $t('About Us.New MA Program.Tabs.' + tab.label) }}
            </span>
          </h2>
        </li>
      </ul>
      <div class="flex justify-end items-center ">
        <div class="hover:cursor-pointer hover:text-green-800 text-orange-700/90">
          <span class="text-xl font-bold  px-2">Apply Now</span>
          <font-awesome icon="fa-solid fa-circle-right" size="xl" />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <div v-if="activeTab === 'Introduction'">
        <Introduction />
      </div>
      <div v-else-if="activeTab === 'Overview'">
        <Overview />
      </div>
      <div v-else-if="activeTab === 'Admission'">
        <Requirements />
      </div>
    </div>
  </div>
</template>