<template>
  <div>
    <div v-if="showPopup"
      class="fixed bottom-10 right-10 bg-white dark:bg-black/80 p-4 flex ring-4 ring-cover-left/20 rounded-xl shadow-xl z-50">
      <a :href="submitLink" target="_blank" class="text-blue-500 hover:text-blue-700">
        <div class="md:m-2">
          <NuxtImg src="/img/paper_icon.png" sizes="50" />
        </div>
      </a>
      <div class="md:flex md:flex-col md:justify-center hidden">
        <div class="flex justify-between items-center dark:text-white/90">
          <span>{{ $t("PopWindow.Title") }}</span>
          <button @click="togglePopup" class="text-red-500 hover:text-red-700">
            <font-awesome icon="fa-solid fa-xmark" style="color: #ff0000;" />
          </button>
        </div>
        <a :href="submitLink" target="_blank" class="text-blue-500 hover:text-blue-700">
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