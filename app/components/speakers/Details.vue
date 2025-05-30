<script lang="ts" setup>
import type { Speaker } from '~/lib/model.ts'

const props = defineProps<{
  speaker: Speaker,
}>()

const { t } = useI18n();
const router = useRouter()

const description = computed(() => {
  return t(props.speaker.bio.details.description).replace(/\n/g, '<br>')
})

const title = computed(() => {
  return t(props.speaker.bio.details.title).replace(/\n/g, '<br>')
})

</script>

<template>
  <div class="hidden md:flex w-4/5 justify-self-center flex-col h-full py-20 px-10 justify-center items-center">
    <div class="w-11/12 relative flex flex-col bg-white/80  rounded-lg py-6 md:px-20 px-2 m-auto border-2">
      <div class="w-11/12 my-2">
        <div
          class="font-semibold cursor-pointer items-center flex bg-blue-600 text-white justify-center px-4 py-2 w-fit rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300"
          @click="router.go(-1)">
          <font-awesome icon="fa-solid fa-arrow-left" />
          {{ t("Back") }}
        </div>
      </div>

      <div class="w-full h-full flex overflow-hidden justify-center items-center py-5">

        <div class="w-2/5 flex justify-center items-center">
          <NuxtImg
class="rounded-full border-solid border-[2px] border-black/60 transition justify-self-center w-3/5"
            :src="props.speaker.photo" :alt="props.speaker.name" preload />
        </div>
        <!-- Text Content -->
        <div class="flex-1 p-8 flex flex-col justify-center">

          <div class="text-start">
            <h3 class="text-xl py-2">
              {{ t(speaker.kind) }}
            </h3>
            <h1 class="text-slate-900 md:text-3xl text-3xl tracking-tight font-extrabold ">
              {{ t(speaker.name) }}
            </h1>
            <div class="w-full text-xl font-semibold text-slate-900  py-2 ">
              <div v-html="title"/>
            </div>
          </div>
        </div>
      </div>
      <div class="px-10 text-justify my-5">
        <div v-if="description !== ''" class=" text-lg font-bold justify-start">{{ $t("bio") }}</div>
        <div class=" text-lg" v-html="description" />
      </div>
    </div>
  </div>
  <div class="md:hidden p-5">
    <div class="w-full bg-white/80 dark:bg-gray-800/90 dark:text-white/90 rounded-lg py-6 px-2 m-auto">
      <div class="grid grid-cols-2 justify-between mb-5">
        <div
          class="font-semibold cursor-pointer items-center flex bg-blue-600 text-white justify-center px-4 py-2 w-fit rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 h-10"
          @click="router.go(-1)">
          <font-awesome icon="fa-solid fa-arrow-left" />
        </div>
        <div class="text-base font-bold py-2">
          {{ t(speaker.kind) }}
        </div>
      </div>
      <div class="w-full h-fit flex justify-center items-center flex-col">
        <NuxtImg
class="rounded-full border-solid border-[2px] border-black/60 transition justify-self-center w-2/5"
          :src="props.speaker.photo" :alt="props.speaker.name" preload />
        <div class="w-full text-start flex flex-col justify-center items-center">
          <h1 class="text-slate-900 text-lg tracking-tight font-extrabold dark:text-white/90">
            {{ t(speaker.name) }}
          </h1>
          <div class="text-center w-full text-base font-semibold text-slate-900 dark:text-white py-2 ">
            <div v-html="title"/>
          </div>
          <div class="px-10 text-justify ">
            <div v-html="description" />
          </div>
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
  background: linear-gradient(to top, rgb(237, 117, 117) 50%, transparent 50%);
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