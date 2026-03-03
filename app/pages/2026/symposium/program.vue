<script lang="ts" setup>
import AgendaTable from '~/components/symposium/AgendaTable.vue'

useHead({
  title: '论坛日程 - 第二届论坛(2026)'
})
</script>

<template>
  <div class="max-w-8xl mx-10 my-5 pt-24 w-full h-full bg-white/50 shadow-2xl">
    <div class="md:flex flex-col px-8 md:px-16 py-4 h-full w-full rounded-lg self-center">
      <!-- 页面标题 -->
      <div class="flex justify-center items-center md:text-4xl text-2xl my-4 font-bold">
        <div class="h-0.5 md:w-20 w-10 bg-black" />
        <h1 class="mx-4">{{ $t("Symposium Tabs.schedule") }}</h1>
        <div class="h-0.5 md:w-20 w-10 bg-black" />
      </div>

      <!-- 论坛日程内容 -->
      <div class="w-full h-full">
        <div class="bg-white/80 p-6 rounded-lg">
          <div class="flex justify-center items-center text-2xl font-bold mb-6">
            <div class="h-0.5 w-16 bg-black" />
            <h2 class="mx-4">{{ $t("Symposium Time.title") }}</h2>
            <div class="h-0.5 w-16 bg-black" />
          </div>
          <div class="w-full justify-center items-center py-3 md:py-6">
            <AgendaTable />
          </div>
          <span class="text-center md:text-base text-xs mt-4 block">
            <i>{{ $t("Agenda Note") }}</i>
          </span>
          <!-- 敬请期待提示
          <div class="flex justify-center items-center min-h-[400px]">
            <div class="text-center">
              <p class="text-gray-500 text-xl md:text-2xl leading-relaxed">
                我們正在精心規劃本次論壇的議程，敬請期待。<br>
                我们正在精心规划本次论坛的议程，敬请期待。<br>
                We are thoughtfully curating the agenda for this symposium—stay tuned.
              </p>
            </div>
          </div>
          -->
        </div>
      </div>
    </div>
  </div>
</template>
