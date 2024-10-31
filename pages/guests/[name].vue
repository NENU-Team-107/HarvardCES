<script lang="ts" setup>

definePageMeta({
  layout: 'guests',
})

</script>

<template>
  <div>
    <h1>There is {{ $route.params.name }}</h1>
  </div>
</template>