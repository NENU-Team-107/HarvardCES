<!-- <script setup lang="ts">
import type { TabsItem, TableColumn } from '@nuxt/ui'

const items = [
  {
    label: 'Day 1 (Thursday, 8 May 2025)',
    icon: 'i-material-symbols-calendar-month-rounded',
    slot: 'day1' as const,
  },
  {
    label: 'Day 2 (Friday, 9 May 2025)',
    icon: 'i-material-symbols-calendar-month-rounded',
    slot: 'day2' as const
  },
  {
    label: 'Day 3 (Saturday, 10 May 2025)',
    icon: 'i-material-symbols-calendar-month-rounded',
    slot: 'day3' as const
  },
] satisfies TabsItem[];


interface ScheduleItem {
  time: string;
  event: string;
  location: string;
  host: string;
  subTableData?: string[];
}

const columns: TableColumn<ScheduleItem>[] = [
  { accessorKey: 'time', header: 'Time' },
  { accessorKey: 'event', header: 'Event' },
  { accessorKey: 'location', header: 'Location' },
  { accessorKey: 'host', header: 'Host' },
];

const day1Schedule = ref<ScheduleItem[]>([
  { time: 'Symposium Agenda.Day1.line1.Time', event: 'Symposium Agenda.Day1.line1.Event', location: 'Symposium Agenda.Day1.line1.Location', host: 'Symposium Agenda.Day1.line1.Host' },
  { time: 'Symposium Agenda.Day1.line2.Time', event: 'Symposium Agenda.Day1.line2.Event', location: 'Symposium Agenda.Day1.line2.Location', host: 'Symposium Agenda.Day1.line2.Host' },
  { time: 'Symposium Agenda.Day1.line3.Time', event: 'Symposium Agenda.Day1.line3.Event', location: 'Symposium Agenda.Day1.line3.Location', host: 'Symposium Agenda.Day1.line3.Host' },
  { time: 'Symposium Agenda.Day1.line4.Time', event: 'Symposium Agenda.Day1.line4.Event', location: 'Symposium Agenda.Day1.line4.Location', host: 'Symposium Agenda.Day1.line4.Host' },
  { time: 'Symposium Agenda.Day1.line5.Time', event: 'Symposium Agenda.Day1.line5.Event', location: 'Symposium Agenda.Day1.line5.Location', host: 'Symposium Agenda.Day1.line5.Host' },
  { time: 'Symposium Agenda.Day1.line6.Time', event: 'Symposium Agenda.Day1.line6.Event', location: 'Symposium Agenda.Day1.line6.Location', host: 'Symposium Agenda.Day1.line6.Host' },
]);

const day2Schedule = ref<ScheduleItem[]>([
  { time: 'Symposium Agenda.Day2.line1.Time', event: 'Symposium Agenda.Day2.line1.Event', location: 'Symposium Agenda.Day2.line1.Location', host: 'Symposium Agenda.Day2.line1.Host' },
  { time: 'Symposium Agenda.Day2.line2.Time', event: 'Symposium Agenda.Day2.line2.Event', location: 'Symposium Agenda.Day2.line2.Location', host: 'Symposium Agenda.Day2.line2.Host' },
  { time: 'Symposium Agenda.Day2.line3.Time', event: 'Symposium Agenda.Day2.line3.Event', location: 'Symposium Agenda.Day2.line3.Location', host: 'Symposium Agenda.Day2.line3.Host' },
  { time: 'Symposium Agenda.Day2.line4.Time', event: 'Symposium Agenda.Day2.line4.Event', location: 'Symposium Agenda.Day2.line4.Location', host: 'Symposium Agenda.Day2.line4.Host' },
  { time: 'Symposium Agenda.Day2.line5.Time', event: 'Symposium Agenda.Day2.line5.Event', location: 'Symposium Agenda.Day2.line5.Location', host: 'Symposium Agenda.Day2.line5.Host' },
  { time: 'Symposium Agenda.Day2.line6.Time', event: 'Symposium Agenda.Day2.line6.Event', location: 'Symposium Agenda.Day2.line6.Location', host: 'Symposium Agenda.Day2.line6.Host' },
  { time: 'Symposium Agenda.Day2.line7.Time', event: 'Symposium Agenda.Day2.line7.Event', location: 'Symposium Agenda.Day2.line7.Location', host: 'Symposium Agenda.Day2.line7.Host' },
  { time: 'Symposium Agenda.Day2.line8.Time', event: 'Symposium Agenda.Day2.line8.Event', location: 'Symposium Agenda.Day2.line8.Location', host: 'Symposium Agenda.Day2.line8.Host' },
  { time: 'Symposium Agenda.Day2.line9.Time', event: 'Symposium Agenda.Day2.line9.Event', location: 'Symposium Agenda.Day2.line9.Location', host: 'Symposium Agenda.Day2.line9.Host' },
  { time: 'Symposium Agenda.Day2.line10.Time', event: 'Symposium Agenda.Day2.line10.Event', location: 'Symposium Agenda.Day2.line10.Location', host: 'Symposium Agenda.Day2.line10.Host' },
  { time: 'Symposium Agenda.Day2.line11.Time', event: 'Symposium Agenda.Day2.line11.Event', location: 'Symposium Agenda.Day2.line11.Location', host: 'Symposium Agenda.Day2.line11.Host' },
  { time: 'Symposium Agenda.Day2.line12.Time', event: 'Symposium Agenda.Day2.line12.Event', location: 'Symposium Agenda.Day2.line12.Location', host: 'Symposium Agenda.Day2.line12.Host' },
  { time: 'Symposium Agenda.Day2.line13.Time', event: 'Symposium Agenda.Day2.line13.Event', location: 'Symposium Agenda.Day2.line13.Location', host: 'Symposium Agenda.Day2.line13.Host' },
  { time: 'Symposium Agenda.Day2.line14.Time', event: 'Symposium Agenda.Day2.line14.Event', location: 'Symposium Agenda.Day2.line14.Location', host: 'Symposium Agenda.Day2.line14.Host' },
  { time: 'Symposium Agenda.Day2.line15.Time', event: 'Symposium Agenda.Day2.line15.Event', location: 'Symposium Agenda.Day2.line15.Location', host: 'Symposium Agenda.Day2.line15.Host' },
  { time: 'Symposium Agenda.Day2.line16.Time', event: 'Symposium Agenda.Day2.line16.Event', location: 'Symposium Agenda.Day2.line16.Location', host: 'Symposium Agenda.Day2.line16.Host' },
  { time: 'Symposium Agenda.Day2.line17.Time', event: 'Symposium Agenda.Day2.line17.Event', location: 'Symposium Agenda.Day2.line17.Location', host: 'Symposium Agenda.Day2.line17.Host' },
  { time: 'Symposium Agenda.Day2.line18.Time', event: 'Symposium Agenda.Day2.line18.Event', location: 'Symposium Agenda.Day2.line18.Location', host: 'Symposium Agenda.Day2.line18.Host' }
]);

const day3Schedule = ref<ScheduleItem[]>([
  { time: 'Symposium Agenda.Day3.line1.Time', event: 'Symposium Agenda.Day3.line1.Event', location: 'Symposium Agenda.Day3.line1.Location', host: 'Symposium Agenda.Day3.line1.Host' },
  { time: 'Symposium Agenda.Day3.line2.Time', event: 'Symposium Agenda.Day3.line2.Event', location: 'Symposium Agenda.Day3.line2.Location', host: 'Symposium Agenda.Day3.line2.Host' },
  { time: 'Symposium Agenda.Day3.line3.Time', event: 'Symposium Agenda.Day3.line3.Event', location: 'Symposium Agenda.Day3.line3.Location', host: 'Symposium Agenda.Day3.line3.Host' },
  { time: 'Symposium Agenda.Day3.line4.Time', event: 'Symposium Agenda.Day3.line4.Event', location: 'Symposium Agenda.Day3.line4.Location', host: 'Symposium Agenda.Day3.line4.Host' },
  {
    time: 'Symposium Agenda.Day3.line5.Time', event: '', location: 'Symposium Agenda.Day3.line5.Location', host: 'Symposium Agenda.Day3.line5.Host', subTableData:
      ['Symposium Agenda.Day3.line5.Event.event1', 'Symposium Agenda.Day3.line5.Event.event2', 'Symposium Agenda.Day3.line5.Event.event3'],
  },
  {
    time: 'Symposium Agenda.Day3.line6.Time', event: '', location: 'Symposium Agenda.Day3.line6.Location', host: 'Symposium Agenda.Day3.line6.Host', subTableData:
      ['Symposium Agenda.Day3.line6.Event.event1', 'Symposium Agenda.Day3.line6.Event.event2', 'Symposium Agenda.Day3.line6.Event.event3'],
  },
  { time: 'Symposium Agenda.Day3.line7.Time', event: 'Symposium Agenda.Day3.line7.Event', location: 'Symposium Agenda.Day3.line7.Location', host: 'Symposium Agenda.Day3.line7.Host' },
  {
    time: 'Symposium Agenda.Day3.line8.Time', event: '', location: 'Symposium Agenda.Day3.line8.Location', host: 'Symposium Agenda.Day3.line8.Host', subTableData:
      ['Symposium Agenda.Day3.line8.Event.event1', 'Symposium Agenda.Day3.line8.Event.event2', 'Symposium Agenda.Day3.line8.Event.event3'],
  },
  {
    time: 'Symposium Agenda.Day3.line9.Time', event: '', location: 'Symposium Agenda.Day3.line9.Location', host: 'Symposium Agenda.Day3.line9.Host', subTableData: ['Symposium Agenda.Day3.line9.Event.event1', 'Symposium Agenda.Day3.line9.Event.event2', 'Symposium Agenda.Day3.line9.Event.event3',]
  },
  { time: 'Symposium Agenda.Day3.line10.Time', event: 'Symposium Agenda.Day3.line10.Event', location: 'Symposium Agenda.Day3.line10.Location', host: 'Symposium Agenda.Day3.line10.Host' },
  {
    time: 'Symposium Agenda.Day3.line11.Time', event: '', location: 'Symposium Agenda.Day3.line11.Location', host: 'Symposium Agenda.Day3.line11.Host', subTableData:
      ['Symposium Agenda.Day3.line11.Event.event1', 'Symposium Agenda.Day3.line11.Event.event2'],
  },
  {
    time: 'Symposium Agenda.Day3.line12.Time', event: '', location: 'Symposium Agenda.Day3.line12.Location', host: 'Symposium Agenda.Day3.line12.Host', subTableData:
      ['Symposium Agenda.Day3.line12.Event.event1'],
  },
  {
    time: 'Symposium Agenda.Day3.line13.Time', event: '', location: 'Symposium Agenda.Day3.line13.Location', host: 'Symposium Agenda.Day3.line13.Host', subTableData:
      ['Symposium Agenda.Day3.line13.Event.event1'],
  },
  {
    time: 'Symposium Agenda.Day3.line14.Time', event: '', location: 'Symposium Agenda.Day3.line14.Location', host: 'Symposium Agenda.Day3.line14.Host', subTableData:
      ['Symposium Agenda.Day3.line14.Event.event1'],
  }
]);

</script>

<template>

  <UTabs :items="items" variant="link" class="gap-2 w-full" :ui="{ trigger: 'flex-1' }">
    <template #day1>
      <UTable ref="tableDay1" :columns="columns" :data="day1Schedule" class="w-full my-4">
        <template #time-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).time).replace(/\n/g, '<br>')" />
        </template>
        <template #event-cell="{ row }">
          <div class="max-w-sm">
            <div v-html="$t((row.original as ScheduleItem).event).replace(/\n/g, '<br>')" />
          </div>
        </template>
        <template #location-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).location).replace(/\n/g, '<br>')" />
        </template>
        <template #host-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).host).replace(/\n/g, '<br>')" />
        </template>
      </UTable>
    </template>

    <template #day2>
      <UTable ref="tableDay2" :columns="columns" :data="day2Schedule" class="w-full my-4">
        <template #time-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).time).replace(/\n/g, '<br>')" />
        </template>
        <template #event-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).event).replace(/\n/g, '<br>')" />
        </template>
        <template #location-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).location).replace(/\n/g, '<br>')" />
        </template>
        <template #host-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).host).replace(/\n/g, '<br>')" />
        </template>
      </UTable>
    </template>

    <template #day3>
      <UTable ref="tableDay3" :columns="columns" :data="day3Schedule" class="w-full my-4 break-words" :ui="{
      }">
        <template #time-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).time).replace(/\n/g, '<br>')" />
        </template>
        <template #event-cell="{ row }">
          <div v-if="(row.original as ScheduleItem).subTableData"
            class=" w-full grid grid-rows-1 gap-0.5 container mx-auto whitespace-normal" :class="{
              'grid-cols-1': ((row.original as ScheduleItem).subTableData ?? []).length === 1,
              'grid-cols-2': ((row.original as ScheduleItem).subTableData ?? []).length === 2,
              'grid-cols-3': ((row.original as ScheduleItem).subTableData ?? []).length === 3,
            }">
            <div v-for="(item, index) in (row.original as ScheduleItem).subTableData" :key="index"
              class="w-full break-words" v-html="$t(item).replace(/\n/g, '<br>')" />
          </div>
          <div v-else>
            <div v-html="$t((row.original as ScheduleItem).event).replace(/\n/g, '<br>')" />
          </div>
        </template>
        <template #location-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).location).replace(/\n/g, '<br>')" />
        </template>
        <template #host-cell="{ row }">
          <div v-html="$t((row.original as ScheduleItem).host).replace(/\n/g, '<br>')" />
        </template>
      </UTable>
    </template>
  </UTabs>
</template> -->

<script setup lang="ts">
import { ref } from 'vue'


const daySwitch = ref(1)
const daySwitchOptions = ref([
  { label: 'Day 1 (Thursday, 8 May 2025)', value: 1, short: 'Day 1' },
  { label: 'Day 2 (Friday, 9 May 2025)', value: 2, short: 'Day 2' },
  { label: 'Day 3 (Saturday, 10 May 2025)', value: 3, short: 'Day 3' },
])

</script>

<template>


  <div class="w-4/5 grid grid-cols-3 gap-4 items-center justify-center text-center mx-auto">
    <div v-for="item in daySwitchOptions" :key="item.value" @click="daySwitch = item.value"
      class="w-full h-full text-lg underline bg-white/50 shadow-2xl self-center hover:text-blue-400 hover:cursor-pointer">
      {{ item.short }}
    </div>
  </div>

  <div class="text-2xl font-bold text-center mt-6">
    Agenda - {{ daySwitchOptions[daySwitch - 1].label }}
  </div>

  <div class="w-full h-full justify-center items-center text-center mx-auto px-4 md:px-8">
    <div class="w-full h-full justify-center items-center mt-4">
      <div v-if="daySwitch === 1">
        <table class="w-full mx-auto border-collapse font-bold">
          <thead>
            <tr class="text-xl text-green-800/70 border-b-2 border-gray-300">
              <th class="p-4">Time</th>
              <th class="p-4">Event</th>
              <th class="p-4">Location</th>
              <th class="p-4">Host</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4">09:00 - 10:00</td>
              <td class="p-4">Opening Ceremony</td>
              <td class="p-4">Grand Hall</td>
              <td class="p-4">Mr. John Doe</td>
            </tr>

            <!-- 第二行（带子表格的行） -->
            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4 align-center">13:00 - 13:10</td>
              <td class="p-0">
                <div class="grid grid-rows-2 items-center">
                  <div class="text-green-800 font-bold bg-yellow-200/50 p-2">Opening Speech</div>
                  <div class="p-2 border border-yellow-200/50">Professor May Hung Cheng, Vice President of Academics,
                    The Education University of Hong Kong</div>
                </div>
              </td>
              <td class="p-4 align-center">D1-LP-04</td>
              <td class="p-4 align-center">Professor Minjuan Wang</td>
            </tr>

            <!-- 第三行（带子表格的行） -->
            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4 align-center">14:00 - 17:00</td>
              <td class="p-0">
                <div class="text-green-800 font-bold bg-yellow-200/50 text-xl py-2">Workshop Ⅰ Innovation Education
                  (for K-12 teachers and students)</div>
                <ul class="mt-2 space-y-1">
                  <li>Ms. Anny Chan, Harvard University</li>
                  <li>Ms. Rongbing Shen, Harvard University</li>
                  <li>Ms. Clara Yue Jia, Stanford University</li>
                </ul>
              </td>
              <td class="p-4 align-center">D1-LP-03</td>
              <td class="p-4 align-center">Ms. Anny Chan</td>
            </tr>

            <!-- 第四行（带子表格的行） -->
            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4 align-center">13:10 - 15:00</td>
              <td class="p-0">
                <div class="text-green-800 font-bold text-xl bg-yellow-200/50 py-2">Workshop Ⅱ Writing and Publishing
                  in High-impact Journals</div>
                <ul class="mt-2 space-y-1">
                  <li>Professor Mutlu Cukurova, EiC of British Journal of Education Technology</li>
                  <li>Professor Minjuan Wang, EiC of IEEE-Transactions on Learning Technologies</li>
                  <li>Professor Kin-fung Chiu, EiC of Interactive Learning Environments</li>
                  <li>Dr. Weipeng Yang, EiC of the Journal of Research in Childhood Education;</li>
                  <li>Professor Hui Li, EiC of AI, Brain and Child</li>
                  <li>Dr. Ju Seong Lee, EiC of Innovation in Language Learning and Teaching</li>
                </ul>
              </td>
              <td class="p-4 align-center">D1-LP-04</td>
              <td class="p-4 align-center">Dr. Weipeng Yang <br> Dr. Ju Seong Lee</td>
            </tr>

            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4 align-center">16:00-17:30</td>
              <td class="p-0">
                <div class="text-green-800 font-bold text-xl bg-yellow-200/50 py-2">Workshop Ⅲ Leveraging Collaborative
                  Generative AI for Design and Prototyping in Innovation and Entrepreneurship Education</div>
                <ul class="mt-2 space-y-1">
                  <li>Dr. Paul Kim, Chair of the International Expert Committee on Education Technology, The World Bank
                  </li>
                  <li>Dr. Fridolin TING, Senior Lecturer of The Education University of Hong Kong</li>
                </ul>
              </td>
              <td class="p-4 align-center">D1-LP-02</td>
              <td class="p-4 align-center">Dr. Fridolin TING</td>
            </tr>


            <tr class="text-lg border-b bg-gray-500/30">
              <td class="p-4">18:00-19:00 </td>
              <td class="p-4">Welcome Reception</td>
              <td class="p-4">Corridor</td>
              <td class="p-4"></td>
            </tr>

          </tbody>
        </table>
      </div>

      <div v-else-if="daySwitch === 2">
        <table class="w-full mx-auto border-collapse font-bold">
          <thead>
            <tr class="text-xl text-green-800/70 border-b-2 border-gray-300">
              <th class="p-4">Time</th>
              <th class="p-4">Event</th>
              <th class="p-4">Location</th>
              <th class="p-4">Host</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-lg border-b border-gray-500/30">
              <td class="p-4">08:45 - 09:00</td>
              <td class="p-4">Registration</td>
              <td class="p-4">D1-LP</td>
              <td class="p-4"></td>
            </tr>

            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">09:00-09:10</td>
              <td class="p-4 text-green-800 bg-yellow-200/50 text-xl">Opening Remarks and Welcome<br>
                <span class="text-lg text-black bg-transparent">Professor John Chi-Kin Lee, President, Director of
                  the Academy for Applied Policy Studies and Education Futures (AAPSEF), EdUHK</span>
              </td>
              <td class="p-4 align-center" rowspan="6">D1-LP-02</td>
              <td class="p-4 align-center" rowspan="6">Professor Minjuan Wang<br>Mr. Xuefan Jordan Li</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">09:10-09:20</td>
              <td class="p-4">Mr ChangXue Yu, Director, China Center for International People-to-People Exchange,
                Ministry of Education, China (recorded speaking)</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">09:20-09:30</td>
              <td class="p-4">Professor Minjuan Wang, Co-Director of Global Institute for Emerging Technologies (GIET),
                EdUHK</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">09:30-09:40</td>
              <td class="p-4">Professor John Clifford Mitchell, Stanford University</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">09:40-09:50</td>
              <td class="p-4">Ms. Anny Chan, Harvard University</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">09:50-10:30</td>
              <td class="p-4 font-bold text-green-800 bg-yellow-200/50">GIET Launch Ceremony</td>
            </tr>

            <tr class="text-lg border-b bg-gray-500/30">
              <td class="p-4">10:30-10:40 </td>
              <td class="p-4">Coffee Break</td>
              <td class="p-4">Corridor</td>
              <td class="p-4"></td>
            </tr>

            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4 align-center">10:40 - 11:10</td>
              <td class="p-0">
                <div class="text-green-800 font-bold bg-yellow-200/50 text-xl py-2">Keynote Speech</div>
                <ul class="mt-2 space-y-1">
                  <li>Professor John Chi-Kin Lee, President, Director of the Academy for Applied Policy Studies and
                    Education Futures (AAPSEF), EdUHK</li>
                  <li class="font-normal"><i>Ethics and Values of Artificial Intelligence: Exploration of values
                      education implications </i>
                  </li>
                </ul>
              </td>
              <td class="p-4 align-center"></td>
              <td class="p-4 align-center"></td>
            </tr>

            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4 align-center">11:10 - 11:40</td>
              <td class="p-0">
                <ul class="mt-2 space-y-1">
                  <li>Professor John Clifford Mitchell, Stanford University</li>
                  <li class="font-normal"><i>Generative AI for Collaborative Learning and Creativity</i>
                  </li>
                </ul>
              </td>
              <td class="p-4 align-center"></td>
              <td class="p-4 align-center"></td>
            </tr>

            <tr class="text-lg border-b bg-gray-500/30">
              <td class="p-4">11:40-12:00 </td>
              <td class="p-4">Coffee Break</td>
              <td class="p-4">Corridor</td>
              <td class="p-4"></td>
            </tr>

            <tr class="text-lg border-b bg-gray-500/30">
              <td class="p-4">12:00-14:00 </td>
              <td class="p-4">Lunch - Ticketed Guests Only</td>
              <td class="p-4"></td>
              <td class="p-4"></td>
            </tr>


            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">14:00-14:40</td>
              <td class="p-4 text-green-800 bg-yellow-200/50 text-xl">Keynote Speech<br>
                <ul class="text-black">
                  <li>Dr. Yin Yang, Vice CEO of iFlytek, Inc.</li>
                  <li class="font-normal"><i>Latest Developments and Typical Applications of the Xinghuo Large Model in
                      Education</i></li>
                </ul>
              </td>
              <td class="p-4 align-center" rowspan="4">D1-LP-04</td>
              <td class="p-4 align-center" rowspan="4">Dr. Yin Yang<br>Dr. Zhengyuan Wei</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">14:40-15:30</td>
              <td class="p-4">
                <ul>
                  <li>Professor Yew-Soon Ong, Nanyang Technological University</li>
                  <li class="font-normal"><i>Teaching AI, Learning with AI: Multiple Perspectives on Education’s
                      Future</i>
                  </li>
                </ul>
              </td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">15:30-16:20</td>
              <td class="p-4">
                <ul>
                  <li>Dr. Paul Kim, World Bank</li>
                  <li class="font-normal"><i>Education Reimagined: Navigating the AI Disruption</i></li>
                </ul>
              </td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 align-top">16:20-17:00</td>
              <td class="p-4">
                <ul>
                  <li>Professor Qing Li, Hong Kong Polytechnic University</li>
                  <li class="font-normal"><i>KCUBE: A KG-based University Curriculum Framework for Student Advising and
                      Career Planning</i></li>
                </ul>
              </td>
            </tr>


            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4 align-center">17:00-17:10</td>
              <td class="p-0">
                <div class="text-green-800 font-bold text-xl bg-yellow-200/50 py-2">Closing Remarks and Logistics</div>
                <span class="text-lg text-black bg-transparent">Professor Minjuan Wang and Dr. Daner Sun, The Education
                  University of Hong Kong</span>
              </td>
              <td class="p-4 align-center">D1-LP-04</td>
              <td class="p-4 align-center">Professor Minjuan Wang</td>
            </tr>

            <tr class="text-lg border-b border-green-700/80">
              <td class="p-4 align-center">18:30-20:00</td>
              <td class="p-0">
                <div class="text-green-800 font-bold text-xl bg-yellow-200/50 py-2">President's Dinner - Invited Guests
                  Only</div>
                <span class="text-lg text-black bg-transparent">For transporation arrangement, please check Shuttle
                  schedule and boarding location online.
                  https://harvardces.eduhk.hk/symposium/guide</span>
              </td>
              <td class="p-4 align-center">Science Park</td>
              <td class="p-4 align-center"></td>
            </tr>

          </tbody>
        </table>
      </div>

      <div v-else="daySwitch === 3">
        <table class="w-full mx-auto border-collapse font-bold">
          <thead>
            <tr class="text-xl text-green-800/70 border-b-2 border-gray-300">
              <th class="p-4">Time</th>
              <th class="p-0">Event</th>
              <th class="p-0">Location</th>
              <th class="p-0">Host</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-lg border-b border-green-700/80">
              <td class="px-2 py-1 whitespace-nowrap">08:00 - 09:00</td>
              <td class="p-0">Registration</td>
              <td class="p-0">D1-LP</td>
              <td class="p-0"></td>
            </tr>

            <tr class="text-lg border-b border-gray-300">
              <td class="p-0">09:00-09:15</td>
              <td class="p-4 text-green-800 bg-yellow-200/50 text-xl">Opening Remark<br>
                <span class="text-lg text-black bg-transparent">Professor Chetwyn Che Hin Chan, Vice President of
                  Research and Development, EdUHK</span>
              </td>
              <td class="p-4 align-center" rowspan="2">D1-LP-02</td>
              <td class="p-4 align-center" rowspan="2">Dr. Daner Sun<br>Dr. Yin Yang</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-0">09:15-09:45</td>
              <td class="p-4">
                <ul>
                  <li>Professor Chris Dede, Harvard University and Senior Advisor of Global Institute for Emerging
                    Technologies
                    (GIET), EdUHK</li>
                  <li class="font-normal"><i>GenAI in Education: The Promises and the Perils</i></li>
                </ul>
              </td>
            </tr>

            <tr class="text-lg border-b bg-gray-500/30">
              <td class="p-0">11:40-12:00 </td>
              <td class="p-4">Coffee Break</td>
              <td class="p-4">Corridor</td>
              <td class="p-4"></td>
            </tr>

            <tr class="text-lg border-b border-gray-300">
              <td class="p-0 border-r border-gray-300" rowspan="4">10:00-10:30</td>
              <td class="p-4 text-green-800 bg-yellow-200/50 font-bold text-xl border-r border-gray-300">
                Parallel Session Ⅰ AI for Teaching and Learning, <span class="text-orange-700">D1-LP-02</span><br>
                <span class="font-normal text-black text-base">Chair: Dr. Liping Deng, Dr Jijian Lu</span>
              </td>
              <td class="p-4 text-green-800 bg-yellow-200/50 font-bold text-xl border-r border-gray-300">
                Parallel Session Ⅱ Talent Development & Entrepreneurship in the Age of AI, <span
                  class="text-orange-700">D1-LP-04</span><br>
                <span class="font-normal text-black text-base">Chair: Dr. Dou Diya, Professor Xuesong Zhai</span>
              </td>
              <td class="p-4 text-green-800 bg-yellow-200/50 font-bold text-xl">
                Parallel Session Ⅲ Science Education in the Age of AI, <span class="text-orange-700">D3-LP-07</span><br>
                <span class="font-normal text-black text-base">Chair: Dr. Daner Sun, Dr. Yang Zhang</span>
              </td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 text-green-800 font-bold border-r border-gray-300">Invited Speaker</td>
              <td class="p-4 text-green-800 font-bold border-r border-gray-300">Keynote Speaker</td>
              <td class="p-4 text-green-800 font-bold">Invited Speaker</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 border-r border-gray-300">Professor Leonel Caseiro Morgado, Universidade Aberta & INESC TEC
              </td>
              <td class="p-4 border-r border-gray-300">Professor Tina Grotzer, Harvard University</td>
              <td class="p-4">Professor Xiang'en Hu, Hong Kong Polytechnic University</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">
              <td class="p-4 italic text-gray-700 border-r border-gray-300">
                Redesigning Education as a Cognitive Ecosystem: Practical Insights into Emerging Roles for Educators
              </td>
              <td class="p-4 italic text-gray-700 border-r border-gray-300">
                Supporting Adaptive Expertise: What Does it Involve and Why Is it Important for the Workforce in a
                Complex and Changing World?
              </td>
              <td class="p-4 italic text-gray-700">
                Creativity in Practice: Exploring Student Engagement with AI-Supported Learning
              </td>
            </tr>

            <tr class="text-lg border-b border-red-200">
              <td class="p-2 border-r border-gray-300" rowspan="2">10:30-12:00</td>
              <td class="p-2 bg-yellow-200/50 font-bold text-green-800 border-r border-gray-300">Paper Presentation</td>
              <td class="p-2 bg-yellow-200/50 font-bold text-green-800 border-r border-gray-300">Paper Presentation</td>
              <td class="p-2 bg-yellow-200/50 font-bold text-green-800">Paper Presentation</td>
            </tr>
            <tr class="border-b border-red-200">
              <td class="p-2 border-r border-gray-300">S1-A, S1-B, S1-C, S1-D, S1-E, S1-F, S1-G, S1-H, S1-J, S1-K</td>
              <td class="p-2 border-r border-gray-300">S2-A, S2-B, S2-C, S2-D, S2-E, S2-F, S2-G, S2-H, S2-I</td>
              <td class="p-2">S3-A, S3-B, S3-C, S3-D, S3-E, S3-F, S3-G, S3-H</td>
            </tr>

            <tr class="text-lg border-b bg-gray-500/30">
              <td class="p-0">12:00-13:00</td>
              <td class="p-4">Lunch Break</td>
              <td class="p-4">Corridor</td>
              <td class="p-4"></td>
            </tr>

            <tr class="border-b border-red-200">
              <td class="p-2 align-top border-r border-gray-300" rowspan="3">13:00-13:30</td>
              <td class="p-2 text-green-800 bg-yellow-200/50 font-bold text-lg border-r border-gray-300">
                Parallel Session Ⅳ Large Language Model Enabled Computing Education, <span
                  class="text-orange-700">D1-LP-02</span><br>
                <span class="font-normal text-black text-base">Chair: Professor Guandong Xu, Professor Minghao
                  Yin</span>
              </td>
              <td class="p-2 text-green-800 bg-yellow-200/50 font-bold text-lg border-r border-gray-300">
                Parallel Session Ⅴ Ethics and Norms of Artificial Intelligence Technology, <span
                  class="text-orange-700">D1-LP-04</span><br>
                <span class="font-normal text-black text-base">Chair: Dr. Yuling Zhang, Professor Yonghe Wu</span>
              </td>
              <td class="p-2 text-green-800 bg-yellow-200/50 font-bold text-lg">
                Parallel Session Ⅵ AI Writing and Assessment, <span class="text-orange-700">D3-LP-07</span><br>
                <span class="font-normal text-black text-base">Chair: Dr. Yue Zhang, Professor LiFang Bai</span>
              </td>
            </tr>
            <tr class="border-b border-red-200">
              <td class="p-2 bg-yellow-100 text-green-800 font-bold border-r border-gray-300">Invited Speaker</td>
              <td class="p-2 bg-yellow-100 text-green-800 font-bold border-r border-gray-300">Invited Speaker</td>
            </tr>
            <tr class="border-b border-red-200">
              <td class="p-2 border-r border-gray-300">
                Dr. Jonathon Richter<br>
                <span class="italic text-gray-700">Rooted in Multimodality: Cultivating the Immersive Learning
                  Sciences</span>
              </td>
              <td class="p-2 border-r border-gray-300">
                Dr. Alberto Solís, Universidad Europea de Madrid<br>
                <span class="italic text-gray-700">A Systems Approach to Leveraging Artificial Intelligence for a Highly
                  Personalized and Effective Higher Education</span>
              </td>
              <td class="p-2"></td>
            </tr>


            <tr class="text-lg border-b border-red-200">
              <td class="p-2 border-r border-gray-300" rowspan="2">13:30-15:00</td>
              <td class="p-2 bg-yellow-200/50 font-bold text-green-800 border-r border-gray-300">Paper Presentation</td>
              <td class="p-2 bg-yellow-200/50 font-bold text-green-800 border-r border-gray-300">Paper Presentation</td>
              <td class="p-2 bg-yellow-200/50 font-bold text-green-800">Paper Presentation</td>
            </tr>
            <tr class="border-b border-red-200">
              <td class="p-2 border-r border-gray-300">S4-A, S4-B, S4-C, S4-D, S4-E, S4-F, S4-G, S4-H</td>
              <td class="p-2 border-r border-gray-300">S5-A, S5-B, S5-C, S5-D, S5-E, S5-F, S5-G, S5-H</td>
              <td class="p-2">S6-A, S6-B, S6-C, S6-D, S6-E, S6-F</td>
            </tr>
            <tr class="text-lg border-b bg-gray-500/30">
              <td class="p-0">15:00-15:30 </td>
              <td class="p-4">Coffee Break</td>
              <td class="p-4">Corridor</td>
              <td class="p-4"></td>
            </tr>

            <tr class="border-b border-red-200">
              <td class="p-2  border-r border-gray-300" rowspan="2">15:30-16:00</td>
              <td class="p-2 text-green-800 bg-yellow-200/50 font-bold text-lg border-r border-gray-300">
                Panel Discussion Challenges and Opportunities in Technology and Future Skills, <span
                  class="text-orange-700">D1-LP-02</span><br>
                <span class="font-bold text-black">Moderator: Dr. Yue Wang</span>
              </td>
              <td class="p-2 text-green-800 bg-yellow-200/50 font-bold text-lg">
                Parallel Session Ⅶ AI-Enabled Development and Application of Digital Textbooks and Innovative Talent
                Cultivation, <span class="text-orange-700">D3-LP-01, 13:00-16:00</span><br>
                <span class="font-normal text-black text-base">Chair: Professor Yuxia Du</span>
              </td>
            </tr>
            <tr class="border-b border-red-200">
              <td class="p-2 border-r border-gray-300">
                Prof. CHAN Chun Bun Henry, Hong Kong Polytechnic University<br>
                Prof. Mutlu Cukurova, University College London<br>
                Ms. Rui Zhao, NetDragon Websoft Holdings Limited
              </td>
              <td class="p-2">
                <span class="font-bold text-green-800">Paper Presentation</span>
                S8-A, S8-B, S8-C, S8-D, S8-E, S8-F, S8-G, S8-H, S8-J, S8-K, S8-L, S8-M, S8-N, S8-O
              </td>
            </tr>

            <tr class="text-lg border-b border-gray-300">
              <td class="p-0" rowspan="3">16:00-17:00</td>
              <td class="p-4 text-green-800 bg-yellow-200/50 text-xl">Closing Keynote:The Road Ahead for Al in
                Education
              </td>
              <td class="p-4 align-center" rowspan="4">D1-LP-02</td>
              <td class="p-4 align-center" rowspan="4">Ms. Clara Yue Jia</td>
            </tr>
            <tr class="text-lg border-b border-gray-300">

              <td class="p-4">
                <ul>
                  <li>Professor Ping Li, Hong Kong Polytechnic University
                  </li>
                  <li class="font-normal"><i>New Opportunities in the Integration of Humanities, Science, and
                      Education</i>
                  </li>
                </ul>
              </td>
            </tr>

            <tr class="text-lg border-b border-gray-300">
              <td class="p-4">
                <ul>
                  <li>Professor Minjuan Wang, The Education University of Hong Kong
                  </li>
                  <li class="font-normal"><i>Emerging Technology and Talent Development</i></li>
                </ul>
              </td>
            </tr>

            <tr class="text-lg border-b border-gray-300">
              <td class="p-0 ">17:00-18:00</td>
              <td class="p-4 text-green-800 bg-yellow-200/50 text-xl">Closing Keynote:The Road Ahead for Al in
                Education <br>
                <span class="text-lg text-black font-normal">Professor Minjuan Wang and Professor Hui Li (on behalf of
                  the
                  organizing committee)</span>
              </td>
            </tr>

            <tr class="text-lg border-b border-gray-300">
              <td class="p-0">19:00-21:30</td>
              <td class="p-4 text-green-800 bg-yellow-200/50 text-xl">Dinner Gala - Invited and Ticketed Guests Only
                <br>
                <span class="text-lg text-black font-normal">For transporation arrangement, please check Shuttle
                  schedule and boarding location online.</span>
              </td>
              <td class="p-4">Happiness Cuisine Restaurant, Science Park</td>
              <td class="p-4"></td>
            </tr>



          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>
