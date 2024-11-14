<script setup lang="ts">
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import "@tato30/vue-pdf/style.css";

const props = defineProps<{
  pdfPath: string
}>()

// TODO 似乎有 bug，如果去掉打印的这一行，就会导致不显示 pdf
console.log(props.pdfPath)

const { pdf, pages } = usePDF(props.pdfPath)


</script>

<template>
  <div v-for="page in pages" :key="page" class="w-full flex justify-center items-center px-auto">
    <VuePDF :pdf="pdf" :page="page" class="w-full h-auto flex justify-center items-center relative" />
  </div>
</template>
