<template>
  <div>
    <div v-if="showPopup" class="bg-green-800/80 dark:bg-green-800/80 text-white/80 p-4 shadow-xl z-50 w-full">
      <div class="md:flex md:flex-col md:justify-center hidden">
        <div class="flex justify-between ">
          <span class=" text-xl font-bold"> Privacy Notice</span>
          <button @click="togglePopup" class="text-red-500 hover:text-red-700">
            <font-awesome icon="fa-solid fa-xmark" style="color: #ff0000; size: 5vw;" />
          </button>
        </div>
        <div class="flex justify-between items-center dark:text-white/80 mt-2">
          <span class="text-justify leading-tight text-lg">This site uses cookies to offer you a better browsing
            experience. By
            continuing, you are agreeing to the use of cookies on your device as described in our
            <a href="https://www.eduhk.hk/en/cookies" class="hover:text-red-500/95 underline">privacy policy. </a>
          </span>
        </div>
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
