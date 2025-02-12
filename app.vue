<template>
  <div class="w-full h-full font-display">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage :keepalive="{ max: 5 }" />
    </NuxtLayout>
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fff;
  color: #333;
  margin: 0;
  overflow-wrap: break-word;
}

canvas {
  max-width: 100%;
  height: 100%;
}

div:has(> canvas) {
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.truncate {
  word-break: break-all;
  text-overflow: unset;
  white-space: inherit;
}


.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* 通用滚动条样式 */
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

html {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}
</style>
