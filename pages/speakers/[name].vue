<script lang="ts" setup>

definePageMeta({
  layout: 'speakers',
  key: route => route.fullPath
})

</script>

<template>
  <div>
    <h1>There is {{ $route.params }}</h1>
  </div>
</template>