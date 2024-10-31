<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import AboveNavBar from '../components/common/HeaderNavBar.vue';
import { ref } from 'vue';
const routerArry = ref([
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/services', name: 'Services' },
]);

</script>

<template>
  <div class="flex w-full h-full">
    <AboveNavBar :RouterArry="routerArry" />
    <!-- <main>
      <TheWelcome />
    </main> -->
    <div class="content">
       <NuxtPage />
    </div>
  </div>
</template>
