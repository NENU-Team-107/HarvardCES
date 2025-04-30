<template>
  <div
    class="md:grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 hidden gap-2 w-full justify-items-center justify-center items-center text-center text-red-500 font-bold">
    <div class="w-44 h-40 flex flex-col justify-center items-center gap-2">
      <NuxtImg src="/img/logo/keynote-red.png" height="100" loading="lazy" />
      <div>{{ $t("Keynote & Invited Talk") }}</div>
    </div>
    <div class="w-44 h-40 flex flex-col justify-center items-center gap-2">
      <NuxtImg src="/img/logo/workshop-red.png" height="100" loading="lazy" />
      <div>{{ $t("Workshop") }}</div>
    </div>
    <div class="w-44 h-40 flex flex-col justify-center items-center gap-2">
      <UIcon name="i-healthicons-group-discussion-meetingx3-outline" class="w-28 h-28 bg-red-500" />
      <div>{{ $t("Panel Discussion") }}</div>
    </div>
    <div class="w-44 h-40 flex flex-col justify-center items-center gap-2">
      <UIcon name="i-streamline-group-meeting-call" class="w-24 h-24 bg-red-500" />
      <div>{{ $t("symposium") }}</div>
    </div>
    <div class="w-44 h-40 flex flex-col justify-center items-center gap-2">
      <NuxtImg src="/img/logo/round-table-red.png" height="100" loading="lazy" />
      <div>{{ $t("Round Table") }}</div>
    </div>
    <div class="w-fit h-40 flex flex-col justify-center items-center gap-2">
      <UIcon name="i-mdi-projector-screen-outline" class="w-28 h-28 bg-red-500" />
      <div>{{ $t("Onsite Demo and Exhibition") }}</div>
    </div>
  </div>
</template>