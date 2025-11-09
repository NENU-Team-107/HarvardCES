<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Title from '~/components/common/Title.vue';

const { t } = useI18n();

const gietIntro = computed(() => {
  return t("About Us.GIET.intro").replace(/\n/g, "<br>");
});
</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24 min-h-full md:max-w-5xl max-xl:max-w-7xl">
    <!-- 桌面版返回按钮 -->
    <div class="mb-4 hidden md:block">
      <UButton
        icon="i-heroicons-arrow-left-20-solid"
        color="neutral"
        variant="ghost"
        @click="$router.back()"
        class="hover:bg-gray-100"
      >
        {{ $t('Back') }}
      </UButton>
    </div>

    <div class="mx-auto md:block hidden">
      <div class="z-20 bg-white px-12 py-4">
        <div class="mb-5 z-20">
          <Title title-map="About Us.GIET.intro title" />
          <div class="text-justify" v-html="gietIntro" />
        </div>
      </div>
    </div>
    <div class="md:hidden">
      <!-- 移动端返回按钮 -->
      <div class="mb-4">
        <UButton
          icon="i-heroicons-arrow-left-20-solid"
          color="neutral"
          variant="ghost"
          @click="$router.back()"
          class="hover:bg-gray-100"
        >
          {{ $t('Back') }}
        </UButton>
      </div>
      <div class="w-full max-w-screen-md">
        <div class="z-20 bg-white mt-4 px-5">
          <div class="mb-5 z-20">
            <Title title-map="About Us.GIET.intro title" />
            <div class="text-justify" v-html="gietIntro" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>