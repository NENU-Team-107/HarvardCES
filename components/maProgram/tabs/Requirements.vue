<script setup lang="ts">
</script>
<template>
  <div class="w-full mx-5 my-5">
    <div class="m-4">
      <h2 class="text-3xl my-4 font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        授課語言
      </h2>
      <p class="indent-8 text-xl">本課程以普通話授課。</p>
    </div>
    <div class="m-4">
      <h2 class="text-3xl my-4 font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        學費
      </h2>
      <p class="indent-8 text-xl">HK$168000</p>
    </div>
    <div class="m-4">
      <h2 class="text-3xl my-4 font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        獎學金
      </h2>
      <p class="indent-8 text-xl">優秀的候選人將獲得某些獎學金的資助</p>
    </div>
    <div class="m-4">
      <h2 class="text-3xl my-4 font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        {{ $t('About Us.New MA Program.Entrance Requirements.name') }}
      </h2>
      <p class="indent-8 text-xl">
        {{ $t("About Us.New MA Program.Entrance Requirements.condition1") }}
      </p>
      <br>
      <!-- ChineseLanguageExams -->
      <p class="indent-8 text-xl">
        {{ $t("About Us.New MA Program.Entrance Requirements.CLE.condition") }}
      </p>
      
      <br>

      <ul class="indent-8 text-xl">
        <li v-for="i in 2">
          <font-awesome icon="fa-solid fa-circle" size="2xs" />
          <span class="pl-2">
            {{ $t("About Us.New MA Program.Entrance Requirements.CLE.condition" + i) }}
          </span>
        </li>
      </ul>
      <br>
      <!-- EnglishLanguageExams -->
      <p class="indent-8 text-xl">
        {{ $t("About Us.New MA Program.Entrance Requirements.ELE.condition") }}
      </p>
      <br>
      <p class="indent-8 text-xl">
        {{ $t("About Us.New MA Program.Entrance Requirements.ELE.following") }}
      </p>
      <ul class="indent-8 text-xl">
        <li v-for="i in 5">
          <font-awesome icon="fa-solid fa-circle" size="2xs" />
          <span class="pl-2">
            {{ $t("About Us.New MA Program.Entrance Requirements.ELE.condition" + i) }}
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>