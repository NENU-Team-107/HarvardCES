<script lang="ts" setup>
import WorkshopItem from '~/components/workshops/WorkShopItem.vue'
</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24">
    <div class="h-full w-full max-w-6xl justify-self-center  bg-white/80 justify-center items-center pb-4">

      <div class="text-2xl font-bold text-center my-5">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-20 bg-black"/>
          <h1 class="mx-4">{{ $t("Workshop") }}</h1>
          <div class="h-0.5 w-20 bg-black"/>
        </div>
      </div>

      <div class="my-5 font-bold md:text-lg text-sm px-5 text-rose-600 text-center">
        <span>
          <i>
            {{ $t("workshop page.comment") }}
          </i>
        </span>
      </div>

      <div class="px-10 md:px-24  md:text-lg text-sm">
        <div class="font-semibold md:text-xl text-lg mx-auto">
          <div v-html="$t('workshop page.reg1')"/>
        </div>
        <span v-html="$t('workshop page.reg-link')"/>
      </div>

      <!-- WorkShops 1~3 -->
      <div id="container" class="md:text-lg md:px-20 text-sm px-6">
        <div class="w-full">
          <div v-for="i in [1, 2, 3]" :key="i">
            <WorkshopItem :index="i" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
:deep(#container) a {
  color: rgb(24, 107, 231);
}

:deep(#container) a:hover {
  color: rgb(90, 191, 222);
}
</style>
