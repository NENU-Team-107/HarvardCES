<script lang="ts" setup></script>
<template>
  <div class="w-full h-full font-display">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '楷体', 'KaiTi', "Times New Roman", 'Arial', 'sans-serif';
}

body {
  background: #fff;
  color: #333;
  margin: auto;
  max-width: 1920px
}

canvas {
  max-width: 100%;
  height: auto;
}
div:has(> canvas) {
  display: flex!important;
  justify-content: center;
  align-items: center;
}
</style>
