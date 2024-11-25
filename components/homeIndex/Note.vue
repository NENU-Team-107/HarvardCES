<template>
  <div>
    <div v-if="showPopup"
      class="fixed bottom-10 left-10 bg-white dark:bg-black/80 p-4 flex rounded-xl shadow-xl z-50 w-1/2">
      <div class="md:flex md:flex-col md:justify-center hidden">
        <span class="text-xl font-bold"> Privacy Notice</span>
        <div class="flex justify-between items-center dark:text-white/90 mt-2">
          <span class="text-justify leading-tight">This site uses cookies to offer you a better browsing experience. By
            continuing, you areagreeing to the use of cookies on your device as described in our
            <a href="https://www.eduhk.hk/en/cookies" class="text-red-400">privacy policy. </a> </span>
        </div>
        <button @click="togglePopup" class="bg-red-600/80 text-white w-28 mt-4 rounded-lg">
          <span class="text-xl font-bold">Close</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ensure = useCookie('ensure', {
  expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
  default: () => "0"
})

const showPopup = ref()
const togglePopup = () => {
  ensure.value = "1"
  showPopup.value = !showPopup.value
}

onMounted(() => {
  if (ensure.value && ensure.value == "1") {
    showPopup.value = false
  } else {
    showPopup.value = true
  }
})

</script>
