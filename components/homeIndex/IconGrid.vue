<template>
  <div class="grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 gap-0 w-full justify-items-center justify-center items-center text-center">
    <div class="w-40 h-40 flex flex-col justify-center items-center gap-2">
      <UIcon name="i-file-icons-keynote" class="w-28 h-28 bg-red-500" />
      <div>Keynote & Invited Talk</div>
    </div>
    <div class="w-40 h-40 flex flex-col justify-center items-center gap-2">
      <NuxtImg src="/img/logo/workshop.png" height="100" loading="lazy" />
      <div>Workshop</div>
    </div>
    <div class="w-40 h-40 flex flex-col justify-center items-center gap-2">
      <UIcon name="i-healthicons-group-discussion-meetingx3" class="w-28 h-28" />
      <div>Panel Discussion</div>
    </div>
    <div class="w-40 h-40 flex flex-col justify-center items-center gap-2">
      <UIcon name="i-streamline-group-meeting-call-solid" class="w-28 h-28" />
      <div>Symposium</div>
    </div>
    <div class="w-40 h-40 flex flex-col justify-center items-center gap-2">
      <NuxtImg src="/img/logo/round-table.png" height="100" loading="lazy"/>
      <div>Round Table</div>
    </div>
    <div class="w-40 h-40 flex flex-col justify-center items-center gap-2">
      <UIcon name="i-mdi-projector-screen" class="w-28 h-28" />
      <div>Onsite Demo and Exhibition</div>
    </div>
  </div>
</template>