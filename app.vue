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
</style>
