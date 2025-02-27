<script lang="ts" setup>

const columns = [
  { key: "index" }, { key: "col1" }, { key: "col2" }, { key: "col3" }, { key: "col4" }, { key: "col5" }
];

const rows = [
  {
    "index": "Recommended Hotels.Name",
    "col1": "Recommended Hotels.Details.line1.Name",
    "col2": "Recommended Hotels.Details.line2.Name",
    "col3": "Recommended Hotels.Details.line3.Name",
    "col4": "Recommended Hotels.Details.line4.Name",
    "col5": "Recommended Hotels.Details.line5.Name",
  },
  {
    "index": "Recommended Hotels.Address",
    "col1": "Recommended Hotels.Details.line1.Address",
    "col2": "Recommended Hotels.Details.line2.Address",
    "col3": "Recommended Hotels.Details.line3.Address",
    "col4": "Recommended Hotels.Details.line4.Address",
    "col5": "Recommended Hotels.Details.line5.Address",
  },
  {
    "index": "Recommended Hotels.Contact",
    "col1": "Recommended Hotels.Details.line1.Contact",
    "col2": "Recommended Hotels.Details.line2.Contact",
    "col3": "Recommended Hotels.Details.line3.Contact",
    "col4": "Recommended Hotels.Details.line4.Contact",
    "col5": "Recommended Hotels.Details.line5.Contact",
  },
]

</script>
<template>
  <div class="max-w-7xl mx-10 mt-5 pt-24 bg-white/50 w-full">

    <h1 class="px-2 text-3xl font-bold text-center py-6 justify-self-center mx-5">
      {{ $t('Guide for Guests Visiting The Education University of Hong Kong (Tai Po Campus)') }}
    </h1>

    <div class="w-full h-full max-w-6xl justify-self-center">
      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-24 bg-black"></div>
        <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
          {{ $t('From Airport.Title') }}
        </h1>
        <div class="h-0.5 w-24 bg-black"></div>
      </div>
      <div class="md:mx-16">
        <div class="mt-2 text-2xl font-semibold text-gray-950 @max-[theme(--breakpoint-sm)]:hidden dark:text-white">
          <div> {{ $t('From Airport.Airport Express.Title') }}</div>
          <div class="pl-6 ml-1 text-xl font-normal text-gray-950 flex flex-col">
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Airport.Airport Express.Route.Title') }}:</div>
              <div>{{ $t('From Airport.Airport Express.Route.content') }}</div>
            </div>
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Airport.Airport Express.Ticket.Title') }}:</div>
              <div>{{ $t('From Airport.Airport Express.Ticket.content') }}</div>
            </div>
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Airport.Airport Express.Tip.Title') }}:</div>
              <div>{{ $t('From Airport.Airport Express.Tip.content') }}</div>
            </div>
          </div>
        </div>
        <div class="mt-2 text-2xl font-semibold text-gray-950 @max-[theme(--breakpoint-sm)]:hidden dark:text-white">
          <div> {{ $t('From Airport.Taxi.Title') }}</div>
          <div class="pl-6 ml-1 text-xl font-normal text-gray-950 flex flex-col">
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Airport.Taxi.Time.Title') }}:</div>
              <div>{{ $t('From Airport.Taxi.Time.content') }}</div>
            </div>
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Airport.Taxi.Fee.Title') }}:</div>
              <div>{{ $t('From Airport.Taxi.Fee.content') }}</div>
            </div>
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Airport.Taxi.Tip.Title') }}:</div>
              <div>{{ $t('From Airport.Taxi.Tip.content') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-24 bg-black"></div>
        <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
          {{ $t('From Terminus.Title') }}
        </h1>
        <div class="h-0.5 w-24 bg-black"></div>
      </div>
      <div class="md:mx-16">
        <div class="mt-2 text-2xl font-semibold text-gray-950 @max-[theme(--breakpoint-sm)]:hidden dark:text-white">
          <div> {{ $t('From Terminus.From the West Kowloon Terminus/Kowloon Station.Title') }}</div>
          <div class="pl-6 ml-1 text-xl font-normal text-gray-950 flex flex-col">
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Terminus.From the West Kowloon Terminus/Kowloon Station.content') }}</div>
            </div>
          </div>
        </div>
        <div class="mt-2 text-2xl font-semibold text-gray-950 @max-[theme(--breakpoint-sm)]:hidden dark:text-white">
          <div> {{ $t('From Terminus.From Tai Po Market Station.Title') }}</div>
          <div class="pl-6 ml-1 text-xl font-normal text-gray-950 flex flex-col">
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Terminus.From Tai Po Market Station.Method1.Title') }}:</div>
              <div>{{ $t('From Terminus.From Tai Po Market Station.Method1.content') }}</div>
            </div>
            <div class="flex flex-row mt-2">
              <div class="pr-2">{{ $t('From Terminus.From Tai Po Market Station.Method2.Title') }}:</div>
              <div>{{ $t('From Terminus.From Tai Po Market Station.Method2.content') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-24 bg-black"></div>
        <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
          {{ $t('Recommended Hotels.Title') }}
        </h1>
        <div class="h-0.5 w-24 bg-black"></div>
      </div>
    </div>
    <UTable :rows="rows" :columns="columns"
      :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
      :ui="{ base: 'min-w-full table-fixed', td: { base: 'break-words text-left min-w-full table-fixed', size: ' text-sm', color: 'text-black drak:text:white' }, tr: { base: 'h-fit' } }">
      <template #index-data="{ row }">
        <div class="font-bold" v-html="$t(row.index).replace(/\n/g, '<br>')"></div>
      </template>
      <template #col1-data="{ row }">
        <div v-html="$t(row.col1).replace(/\n/g, '<br>')"></div>
      </template>
      <template #col2-data="{ row }">
        <div v-html="$t(row.col2).replace(/\n/g, '<br>')"></div>
      </template>
      <template #col3-data="{ row }">
        <div v-html="$t(row.col3).replace(/\n/g, '<br>')"></div>
      </template>
      <template #col4-data="{ row }">
        <div v-html="$t(row.col4).replace(/\n/g, '<br>')"></div>
      </template>
      <template #col5-data="{ row }">
        <div v-html="$t(row.col5).replace(/\n/g, '<br>')"></div>
      </template>
    </UTable>

    <span class="italic">{{ $t("Recommended Hotels.Tip") }}</span>
    <div class="flex justify-center items-center ">
      <div class="h-0.5 w-24 bg-black"></div>
      <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
        {{ $t('Campus Map.Title') }}
      </h1>
      <div class="h-0.5 w-24 bg-black"></div>
    </div>
    <div class="flex justify-center items-center ">
      <NuxtImg :src="$t('Campus Map.src')" loading="lazy" class="w-5/6 object-cover" />
    </div>
  </div>
</template>