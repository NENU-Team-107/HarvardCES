<script lang="ts" setup>
const columns = [
  { key: "index", id: "index", }, { key: "col1", id: "col1" }, { key: "col2", id: "col2" }, { key: "col3", id: "col3" }, { key: "col4", id: "col4" }, { key: "col5", id: "col5" }
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

  <div class="w-full h-full mx-10 my-5 pt-24">
    <div class="text-center font-bold md:text-2xl text-xl  my-5">
      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-20 bg-black" />
        <h1 class="py-3 px-2 text-2xl">
          {{ $t('Guide for Guests Visiting The Education University of Hong Kong (Tai Po Campus)') }}
        </h1>
        <div class="h-0.5 w-20 bg-black" />
      </div>
    </div>

    <div class="h-full w-full max-w-7xl px-6 md:px-0 justify-self-center bg-white/80 justify-center items-center">
      <div class="w-full h-full max-w-6xl justify-self-center">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-24 bg-black" />
          <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
            {{ $t('From Airport.Title') }}
          </h1>
          <div class="h-0.5 w-24 bg-black" />
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
          <div class="h-0.5 w-24 bg-black" />
          <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
            {{ $t('From Terminus.Title') }}
          </h1>
          <div class="h-0.5 w-24 bg-black" />
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
          <div class="h-0.5 w-24 bg-black" />
          <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
            {{ $t('Recommended Hotels.Title') }}
          </h1>
          <div class="h-0.5 w-24 bg-black" />
        </div>
      </div>
      <UTable :rows="rows" :columns="columns"
        :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
        :ui="{ base: 'min-w-full table-fixed', td: { base: 'break-words text-left min-w-full table-fixed', size: ' text-base', color: 'text-black drak:text:white' }, tr: { base: 'h-fit' } }">
        <template #index-data="{ row }">
          <div class="font-bold" v-html="$t(row.index).replace(/\n/g, '<br>')" />
        </template>
        <template #col1-data="{ row }">
          <div v-html="$t(row.col1).replace(/\n/g, '<br>')" />
        </template>
        <template #col2-data="{ row }">
          <div v-html="$t(row.col2).replace(/\n/g, '<br>')" />
        </template>
        <template #col3-data="{ row }">
          <div v-html="$t(row.col3).replace(/\n/g, '<br>')" />
        </template>
        <template #col4-data="{ row }">
          <div v-html="$t(row.col4).replace(/\n/g, '<br>')" />
        </template>
        <template #col5-data="{ row }">
          <div v-html="$t(row.col5).replace(/\n/g, '<br>')" />
        </template>
      </UTable>

      <span class="italic font-bold">{{ $t("Recommended Hotels.Tip") }}</span>
      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-24 bg-black" />
        <h1 class="text-center font-bold text-2xl py-6 justify-self-center mx-5">
          {{ $t('Campus Map.Title') }}
        </h1>
        <div class="h-0.5 w-24 bg-black" />
      </div>
      <div class="flex justify-center items-center ">
        <NuxtImg :src="$t('Campus Map.src')" loading="lazy" class="w-5/6 object-cover" />
      </div>

      <div class="text-center font-bold md:text-2xl text-xl my-5">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-20 bg-black" />
          <h1 class="py-3 px-2 text-2xl">
            {{ $t('School Bus Schedule.Title') }}
          </h1>
          <div class="h-0.5 w-20 bg-black" />
        </div>
      </div>

      <div class="text-center font-bold md:my-5 md:mx-16 flex justify-center items-center flex-col">
        <div class="w-full">
          <div class="w-full text-left text-xl md:pl-10">{{ $t('School Bus Schedule.Info.Title') }}</div>
          <ul class="list-disc pl-6 md:pl-28 text-lg text-left">
            <li>{{ $t('School Bus Schedule.Info.line1') }}</li>
            <li>{{ $t('School Bus Schedule.Info.line2') }}</li>
            <li>{{ $t('School Bus Schedule.Info.line3') }}</li>
          </ul>
        </div>

        <!-- Day1 -->
        <div class="w-full text-left text-xl md:pl-10 md:py-3 flex justify-center items-center flex-col">
          <div class="w-full flex justify-center items-center flex-col">
            <div class="w-full text-xl md:text-2xl text-center">{{ $t('School Bus Schedule.Day1.Title') }}</div>

            <div class="w-full grid grid-col-1 justify-items-center divide-y-2 divide-dotted divided-gray-950">
              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day1.Route.Title') }}</div>
                <div class="w-full flex justify-center items-center h-40">
                  <NuxtImg :src="$t('School Bus Schedule.Day1.Route.src')" class="md:w-2/3" />
                </div>
              </div>

              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day1.Return Shuttle.Title') }}</div>
                <div class="w-full flex justify-center items-center h-40">
                  <NuxtImg :src="$t('School Bus Schedule.Day1.Return Shuttle.src')" class="w-full md:w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Day2 -->
        <div class="w-full text-left text-xl md:pl-10 md:py-3 flex justify-center items-center flex-col">
          <div class="w-full flex justify-center items-center flex-col">
            <div class="w-full text-xl md:text-2xl text-center">{{ $t('School Bus Schedule.Day2.Title') }}</div>

            <div class="w-full grid grid-col-1 justify-items-center divide-y-2 divide-dotted divided-gray-950">
              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-xl">{{ $t('School Bus Schedule.Day2.Morning Route.Title') }}</div>
                <div class="w-full flex justify-center items-center h-40">
                  <NuxtImg :src="$t('School Bus Schedule.Day2.Morning Route.src')" class="w-full md:w-2/3" />
                </div>
              </div>

              <div class="w-full md:w-3/5 py-4">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day2.Dinner.Title') }}</div>
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day2.Dinner.Time') }}</div>
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day2.Dinner.Local') }}</div>
              </div>

              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day2.Shuttle to Banquet.Title') }}
                </div>
                <div class="w-full flex justify-center items-center h-28">
                  <NuxtImg :src="$t('School Bus Schedule.Day2.Shuttle to Banquet.src')" class="w-full md:w-2/3" />
                </div>
              </div>
              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-xl">{{ $t('School Bus Schedule.Day2.Extra Shuttle.Title') }}</div>
                <div class="w-full flex justify-center items-center h-28">
                  <NuxtImg :src="$t('School Bus Schedule.Day2.Extra Shuttle.src')" class="w-full md:w-2/3" />
                </div>
              </div>

              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day2.After Dinner Shuttle.Title') }}
                </div>
                <div class="w-full flex justify-center items-center h-28">
                  <NuxtImg :src="$t('School Bus Schedule.Day2.After Dinner Shuttle.src')" class="w-full md:w-1/2" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Day3 -->
        <div class="w-full text-left text-xl md:pl-10 md:py-3 flex justify-center items-center flex-col">
          <div class="w-full flex justify-center items-center flex-col">
            <div class="w-full text-xl md:text-2xl text-center">{{ $t('School Bus Schedule.Day3.Title') }}</div>

            <div class="w-full grid grid-col-1 justify-items-center divide-y-2 divide-dotted divided-gray-950">
              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day3.Morning Route.Title') }}</div>
                <div class="w-full flex justify-center items-center h-40">
                  <NuxtImg :src="$t('School Bus Schedule.Day3.Morning Route.src')" class="w-full md:w-2/3" />
                </div>
              </div>

              <div class="w-full md:w-3/5 py-4">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day3.Dinner.Title') }}</div>
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day3.Dinner.Time') }}</div>
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day3.Dinner.Local') }}</div>
              </div>

              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day3.Shuttle to Banquet.Title') }}
                </div>
                <div class="w-full flex justify-center items-center h-28">
                  <NuxtImg :src="$t('School Bus Schedule.Day3.Shuttle to Banquet.src')" class="w-full md:w-2/3" />
                </div>
              </div>
              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day3.Return Shuttles.Title') }}</div>
                <div class="w-full flex justify-center items-center h-28">
                  <NuxtImg :src="$t('School Bus Schedule.Day3.Return Shuttles.src')" class="text-lg md:w-2/3" />
                </div>
              </div>

              <div class="w-full md:w-3/5 py-2">
                <div class="w-full text-lg md:text-xl">{{ $t('School Bus Schedule.Day3.After Dinner Shuttle.Title') }}
                </div>
                <div class="w-full flex justify-center items-center h-28">
                  <NuxtImg :src="$t('School Bus Schedule.Day3.After Dinner Shuttle.src')" class="w-2/3 md:w-1/2" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>


</template>