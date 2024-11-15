<template>
  <!-- <div class="w-full justify-center items-center flex h-ful">
    <CoverImage :Slides="slides" :ImgSize="'300'" />
     </div> -->
  <div class="grid md:grid-cols-3 gap-4 pl-10">
    <div v-for="slide in slides" class="dark:text-white">
      <UCard v-if="slide.details" :ui="{
        divide: '',
        ring: '',
        rounded: '',
        shadow: '',
        background: 'dark:bg-gray-900/80'
      }">
        <NuxtImg :src="slide.src" fit="contain" :class="slide.link ? 'mx-1 hover:cursor-pointer' : 'mx-1'"
          :sizes="ImgSize" @click="jump(slide.link ? slide.link : '-1')" />
        <template #footer>
          <div class="flex justify-end w-full">
            <div v-if="slide.details" class="right-20 w-32 h-20 text-sm">
              <div class="font-semibold text-white bg-red-800 text-center p-2">
                <ULink :to="slide.link">
                  {{ $t("About Us.EduHK.link") }}
                </ULink>
                <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
<script setup lang="ts">
// import CoverImage from '~/components/homeIndex/CoverImage.vue'
import type { Poster, SwiperItem } from '~/lib/model';
import { useRouter } from 'vue-router';

const router = useRouter();

const fetchPosters = async () => {
  const resp = await $fetch('/api/poster/listAll', {
    method: 'GET'
  })
  const { status, data } = resp
  if (status === "Success" && data !== null) {
    posterList.value = data;
    console.log(posterList.value)
    slides.value = data.map((poster) => {
      return {
        src: poster.path,
        link: poster.link,
        details: true
      } as SwiperItem;
    })
  }
}

onMounted(() => {
  fetchPosters()
})

const posterList = ref<Poster[]>([]);

const slides = ref<SwiperItem[]>([]);

const ImgSize = defineModel('ImgSize', {
  required: false,
  type: String,
  default: ''
});

const jump = (link: string) => {
  if (link === "-1")
    return;
  console.log(link)
  if (!link.startsWith('/')) {
    link = '/' + link
  }
  router.push(link)
}


</script>