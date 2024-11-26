<template>
  <div v-if="showPopup" class="bg-green-800/80  text-white/80 p-4 shadow-xl z-50 w-full hidden md:block">
    <div class="md:flex md:flex-col md:justify-center px-20">
      <div class="flex justify-between ">
        <span class="text-2xl font-bold"> Privacy Notice</span>
      </div>
      <div class="flex justify-between items-center mt-2">
        <span class="text-justify leading-tight text-xl">This site uses cookies to offer you a better browsing
          experience. By continuing, you are agreeing to the use of cookies on your device as described in our
          <a href="https://www.eduhk.hk/en/cookies" class="hover:text-red-500/95 underline">privacy policy. </a>
        </span>
        <button @click="togglePopup" class="bg-red-600/80 text-white w-32 mb-2 mx-5 rounded-lg">
          <span class="text-xl font-bold">Got it!</span>
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
