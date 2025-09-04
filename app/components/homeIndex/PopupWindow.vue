<template>
  <div class="w-full h-full">
    <div v-if="showPopup" class="fixed bottom-32 right-10 bg-blue-100 p-4 rounded-xl shadow-xl z-50 max-w-xs">
      <div class="flex flex-col">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-lg font-bold text-gray-800">{{ $t("SymposiumBulletin.Title") }}</h3>
          <button class="text-red-500 hover:text-red-700" @click="togglePopup">
            <font-awesome icon="fa-solid fa-xmark" />
          </button>
        </div>
        <p class="text-gray-700">{{ $t("SymposiumBulletin.Content") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showPopup = ref(true)
const togglePopup = () => {
  showPopup.value = !showPopup.value
}
</script>

<style scoped></style>