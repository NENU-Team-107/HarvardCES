<template>
  <div class="w-full h-full">
    <div v-if="showPopup" class="fixed bottom-32 right-10 bg-blue-500 p-4 flex rounded-xl shadow-xl z-50">
      <a :href="submitLink" target="_blank" class="text-red-500 hover:text-red-700">
        <div class="md:m-2">
          <NuxtImg src="/img/register_code.jpeg" sizes="60"/>
        </div>
      </a>
      <div class="md:flex md:flex-col md:justify-center hidden">
        <div class="flex justify-between items-center text-white text-center">
          <span class="text-center">{{ $t("PopWindow.Content") }}</span>
          <button class="text-red-500 hover:text-red-200 relative -top-8" @click="togglePopup">
            <font-awesome icon="fa-solid fa-xmark" style="color: #ff0000;" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const submitLink = ref("https://eduhk.au1.qualtrics.com/jfe/form/SV_agWfa1tf9UtiVU2")
const showPopup = ref(true)
const togglePopup = () => {
  showPopup.value = !showPopup.value
}
</script>

<style scoped></style>