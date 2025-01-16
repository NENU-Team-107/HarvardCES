<script setup lang="ts">
import MaTabs from '~/components/maProgram/MaTabs.vue';

</script>
<template>
  <div class="w-full h-full mx-10 my-5 pt-24 min-h-full md:max-w-6xl max-xl:max-w-8xl">
    <div class="min-h-screen w-full max-w-8xl px-6 md:px-0 justify-self-center bg-white/80 justify-center items-center">
      <!-- 标题 -->
      <div class="font-bold text-3xl px-10 pt-16 text-orange-700/90">
        <span> {{ $t("About Us.New MA Program.title") }}</span>
      </div>
      <!-- Disclaimer -->
      <div class="text-sm text-orange-900 px-10 my-5">
        <p>如中英文版本資料信息不一致，又或於課程內容詮釋上出現歧義，則以本校之最後決定作準。</p>
        <p>我們已盡力確保本網站所提供之資訊的準確性 。
          由於課程資訊可能因情況之轉變而時有變動，大學保留在其認為合適及在不事先通知的情況下修改本網站中任何資訊的權利。若因使用、誤用或依據本網站提供的資訊而導致的任何損失或損害，大學概不負上法律責任。
        </p>
        <p>
          大學保留 一切修訂課程開辦及其任何有關事項的權利，如有需要，可隨時酌情調整課程（包括但不限於課程內容和授課方式等）。在不限制大學修訂課程和開辦課程的廣泛酌情權的前提下，考慮到教學人員編制 、
          報讀人數、實際具體安排、課程內容變動以及其他情況的轉變等因素 ，大學可能需要更改課程。已繳學費將不予退還 。
        </p>
      </div>
      <!-- 表单 -->
      <div class="w-full px-10 mt-5">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:divide-x lg:divide-x divide-y md:divide-y-0 lg:divide-y-0 gap-1 shadow-lg justify-self-center">
          <!-- TODO form -->
          <div class="px-4">
            <div class="font-bold md:text-2xl text-xl ">
              {{ $t("About Us.New MA Program.Programme Leader.title") }}
            </div>
            <div class="text-gray-700/85 my-4 md:text-lg text-sm">
              {{ $t("About Us.New MA Program.Programme Leader.name") }}
            </div>
          </div>
          <div class="px-4">
            <div class="font-bold md:text-2xl text-xl ">
              {{ $t("About Us.New MA Program.Associate Programme Leader.title") }}
            </div>
            <div class="text-gray-700/85 my-4 md:text-lg text-sm">
              {{ $t("About Us.New MA Program.Associate Programme Leader.name") }}
            </div>
          </div>
          <div class="px-4">
            <div class="font-bold md:text-2xl text-xl ">
              {{ $t("About Us.New MA Program.Enquiry.title") }}
            </div>
            <div class="text-gray-700/85 my-4 md:text-lg text-sm"
              v-html="$t('About Us.New MA Program.Enquiry.content')"></div>
          </div>
        </div>
      </div>
      <!-- 详细信息 -->
      <div class="w-full px-10 my-5">
        <MaTabs />
      </div>
    </div>
  </div>
</template>