<script lang="ts" setup>

import type { WorkshopItem } from '~/lib/models';
const props = defineProps<{
  index: number
}>();
const { t } = useI18n();
const index = props.index;
const workshop = computed(() => {
  return {
    title: t(('workshop page.workshop' + index + '.title')),
    description: t(('workshop page.workshop' + index + '.description')),
    takeaways: t(('workshop page.workshop' + index + '.takeaways')),
    speaker: t(('workshop page.workshop' + index + '.speaker').replace(/\n/g, '<br>')),
    slides: t(('workshop page.workshop' + index + '.slides'))
  } as WorkshopItem;
});

</script>

<template>
  <div class="w-full flex flex-col items-center">
    <!-- 标题部分 -->
    <div class="flex justify-center items-center flex-col">
      <div class="text-2xl font-bold text-center my-5">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-20 bg-black"></div>
          <h1 class="mx-4 ">{{ $t("Workshop") + " " + index }} </h1>
          <div class="h-0.5 w-20 bg-black"></div>
        </div>
      </div>
      <div class="md:text-xl text-lg font-bold text-center mb-4">
        {{ workshop.title }}
      </div>
    </div>

    <!-- 内容 -->
    <div class="flex w-full">
      <div class="font-bold mr-2 md:w-1/11 w-1/5" v-html='$t("workshop page.description")'>
      </div>
      <div class="md:w-10/11 w-4/5">
        {{ workshop.description }}
      </div>
    </div>

    <div class="flex w-full">
      <div class="font-bold mr-2 md:w-1/11 w-1/5">
        {{ $t("workshop page.takeaways") }}
      </div>
      <div class="md:w-10/11 w-4/5">
        {{ workshop.takeaways }}
      </div>
    </div>

    <div class="my-2 flex w-full">
      <div class="font-bold mr-2 md:w-1/11 w-1/5">
        {{ $t("workshop page.Speakers") }}
      </div>
      <div class="md:w-10/11 w-4/5" v-html="workshop.speaker" />
    </div>

    <div class="w-full">
      <div v-html="workshop.slides"></div>
    </div>
  </div>
</template>