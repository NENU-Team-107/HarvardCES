<script lang="ts" setup>
import type { Speaker } from '~/lib/model.ts'
const props = defineProps<{
  speaker: Speaker,
}>()

const { t } = useI18n();

console.log(props.speaker.bio.details.description)

const description = computed(() => {
  return t(props.speaker.bio.details.description).replace(/\n/g, '<br>')
})

const title = computed(() => {
  return t(props.speaker.bio.details.title).replace(/\n/g, '<br>')
})

</script>

<template>
  <div class="flex w-4/5 justify-self-center flex-col h-full py-20 px-10 justify-center items-center">
    <div class="w-11/12 my-2 dark:text-white/90">
      <div
        class="font-semibold cursor-pointer items-center flex bg-slate-300 justify-center px-4 py-2 w-fit link-with-gradient">
        <NuxtLink to="/speakers">
          <font-awesome icon="fa-solid fa-arrow-left" />
          {{ t("Back") }}
        </NuxtLink>
      </div>
    </div>
    <div
      class="w-11/12 relative flex flex-col bg-white/80 dark:bg-gray-800/90 dark:text-white/90 rounded-lg py-6 md:px-20 px-2 m-auto">
      <div class="text-start">
        <h3 class="text-xl py-2">
          {{ t(speaker.kind) }}
        </h3>
      </div>
      <div class="w-full h-fit">
        <NuxtImg class=" min-w-4/5 mx-auto rounded-full py-3" :src="props.speaker.photo" :alt="props.speaker.name" />
      </div>
      <div class="w-full text-start flex flex-col justify-center items-center">
        <h1 class="text-slate-900 md:text-3xl text-xl tracking-tight font-extrabold dark:text-white/90">
          {{ t(speaker.name) }}
        </h1>
        <div class="text-center w-full text-lg font-semibold text-slate-900 dark:text-white py-2 ">
          <div v-html="title"></div>
        </div>
        <div class="px-10 text-justify ">
          <div v-html="description" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-with-gradient {
  position: relative;
  display: inline-block;
  color: inherit;
  text-decoration: none;
  background: linear-gradient(to top, rgb(93, 93, 99) 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: 0 0;
  transition: background-position 0.3s, color 0.3s;
  border-radius: 0.375rem;
}

.link-with-gradient:hover {
  background-position: 0 100%;
  color: white;
}
</style>