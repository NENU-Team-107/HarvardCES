<template>
  <div>
    <div v-if="showPopup" class="fixed bottom-10 right-10 bg-white p-4 flex ring-4 ring-cover-left/20 rounded-xl shadow-xl">
      <div class="m-3">
        <NuxtImg src="/img/paper_icon.png" sizes="50" />
      </div>
      <div class="flex flex-col justify-center">
        <div class="flex justify-between items-center">
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