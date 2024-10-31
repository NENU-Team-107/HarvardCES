<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params.name)
</script>
<template>
    <h1>
        the guest this page is {{ route.params.name }}!
    </h1>
</template>