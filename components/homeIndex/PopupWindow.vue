<template>
  <div>
    <div v-if="showPopup" class="fixed bottom-30 right-10 bg-blue-500 p-4 flex rounded-xl shadow-xl z-50">
      <a :href="submitLink" target="_blank" class="text-red-500 hover:text-red-700">
        <div class="md:m-2">
          <NuxtImg src="/img/paper_icon.png" sizes="50" />
        </div>
      </a>
      <div class="md:flex md:flex-col md:justify-center hidden">
        <div class="flex justify-between items-center text-white text-center">
          <span class="text-center">{{ $t("PopWindow.Title") }}</span>
          <button @click="togglePopup" class="text-red-500 hover:text-red-200">
            <font-awesome icon="fa-solid fa-xmark" style="color: #ff0000;" />
          </button>
        </div>
        <a :href="submitLink" target="_blank" class="text-yellow-400 hover:text-red-200">
          {{ $t("PopWindow.Content") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const submitLink = ref("/submit")
const showPopup = ref(true)
const togglePopup = () => {
  showPopup.value = !showPopup.value
}
</script>

<style scoped></style>