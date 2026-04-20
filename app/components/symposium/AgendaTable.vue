<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TableColumn } from '@nuxt/ui'

interface ScheduleItem {
  time: string
  event: string
  location: string
  host: string
}

const daySwitch = ref(1)
const daySwitchOptions = ref([
  { label: 'Day 1 (Friday, 15 May 2026)', value: 1, short: 'Day 1' },
  { label: 'Day 2 (Saturday, 16 May 2026)', value: 2, short: 'Day 2' }
])

const columns: TableColumn<ScheduleItem>[] = [
  { accessorKey: 'time', header: 'Time' },
  { accessorKey: 'event', header: 'Event' },
  { accessorKey: 'location', header: 'Location' },
  { accessorKey: 'host', header: 'Host' }
]

const day1Schedule = ref<ScheduleItem[]>([
  { time: 'Symposium Agenda2026.Day1.line1.Time', event: 'Symposium Agenda2026.Day1.line1.Event', location: 'Symposium Agenda2026.Day1.line1.Location', host: 'Symposium Agenda2026.Day1.line1.Host' },
  { time: 'Symposium Agenda2026.Day1.line2.Time', event: 'Symposium Agenda2026.Day1.line2.Event', location: 'Symposium Agenda2026.Day1.line2.Location', host: 'Symposium Agenda2026.Day1.line2.Host' },
  { time: 'Symposium Agenda2026.Day1.line3.Time', event: 'Symposium Agenda2026.Day1.line3.Event', location: 'Symposium Agenda2026.Day1.line3.Location', host: 'Symposium Agenda2026.Day1.line3.Host' },
  { time: 'Symposium Agenda2026.Day1.line4.Time', event: 'Symposium Agenda2026.Day1.line4.Event', location: 'Symposium Agenda2026.Day1.line4.Location', host: 'Symposium Agenda2026.Day1.line4.Host' },
  { time: 'Symposium Agenda2026.Day1.line5.Time', event: 'Symposium Agenda2026.Day1.line5.Event', location: 'Symposium Agenda2026.Day1.line5.Location', host: 'Symposium Agenda2026.Day1.line5.Host' },
  { time: 'Symposium Agenda2026.Day1.line6.Time', event: 'Symposium Agenda2026.Day1.line6.Event', location: 'Symposium Agenda2026.Day1.line6.Location', host: 'Symposium Agenda2026.Day1.line6.Host' },
  { time: 'Symposium Agenda2026.Day1.line7.Time', event: 'Symposium Agenda2026.Day1.line7.Event', location: 'Symposium Agenda2026.Day1.line7.Location', host: 'Symposium Agenda2026.Day1.line7.Host' },
  { time: 'Symposium Agenda2026.Day1.line8.Time', event: 'Symposium Agenda2026.Day1.line8.Event', location: 'Symposium Agenda2026.Day1.line8.Location', host: 'Symposium Agenda2026.Day1.line8.Host' },
  { time: 'Symposium Agenda2026.Day1.line9.Time', event: 'Symposium Agenda2026.Day1.line9.Event', location: 'Symposium Agenda2026.Day1.line9.Location', host: 'Symposium Agenda2026.Day1.line9.Host' },
  { time: 'Symposium Agenda2026.Day1.line10.Time', event: 'Symposium Agenda2026.Day1.line10.Event', location: 'Symposium Agenda2026.Day1.line10.Location', host: 'Symposium Agenda2026.Day1.line10.Host' },
  { time: 'Symposium Agenda2026.Day1.line11.Time', event: 'Symposium Agenda2026.Day1.line11.Event', location: 'Symposium Agenda2026.Day1.line11.Location', host: 'Symposium Agenda2026.Day1.line11.Host' },
  { time: 'Symposium Agenda2026.Day1.line12.Time', event: 'Symposium Agenda2026.Day1.line12.Event', location: 'Symposium Agenda2026.Day1.line12.Location', host: 'Symposium Agenda2026.Day1.line12.Host' },
  { time: 'Symposium Agenda2026.Day1.line13.Time', event: 'Symposium Agenda2026.Day1.line13.Event', location: 'Symposium Agenda2026.Day1.line13.Location', host: 'Symposium Agenda2026.Day1.line13.Host' },
  { time: 'Symposium Agenda2026.Day1.line14.Time', event: 'Symposium Agenda2026.Day1.line14.Event', location: 'Symposium Agenda2026.Day1.line14.Location', host: 'Symposium Agenda2026.Day1.line14.Host' },
  { time: 'Symposium Agenda2026.Day1.line15.Time', event: 'Symposium Agenda2026.Day1.line15.Event', location: 'Symposium Agenda2026.Day1.line15.Location', host: 'Symposium Agenda2026.Day1.line15.Host' },
  { time: 'Symposium Agenda2026.Day1.line16.Time', event: 'Symposium Agenda2026.Day1.line16.Event', location: 'Symposium Agenda2026.Day1.line16.Location', host: 'Symposium Agenda2026.Day1.line16.Host' }
])

const day2Schedule = ref<ScheduleItem[]>([
  { time: 'Symposium Agenda2026.Day2.line1.Time', event: 'Symposium Agenda2026.Day2.line1.Event', location: 'Symposium Agenda2026.Day2.line1.Location', host: 'Symposium Agenda2026.Day2.line1.Host' },
  { time: 'Symposium Agenda2026.Day2.line2.Time', event: 'Symposium Agenda2026.Day2.line2.Event', location: 'Symposium Agenda2026.Day2.line2.Location', host: 'Symposium Agenda2026.Day2.line2.Host' },
  { time: 'Symposium Agenda2026.Day2.line3.Time', event: 'Symposium Agenda2026.Day2.line3.Event', location: 'Symposium Agenda2026.Day2.line3.Location', host: 'Symposium Agenda2026.Day2.line3.Host' },
  { time: 'Symposium Agenda2026.Day2.line4.Time', event: 'Symposium Agenda2026.Day2.line4.Event', location: 'Symposium Agenda2026.Day2.line4.Location', host: 'Symposium Agenda2026.Day2.line4.Host' },
  { time: 'Symposium Agenda2026.Day2.line5.Time', event: 'Symposium Agenda2026.Day2.line5.Event', location: 'Symposium Agenda2026.Day2.line5.Location', host: 'Symposium Agenda2026.Day2.line5.Host' },
  { time: 'Symposium Agenda2026.Day2.line6.Time', event: 'Symposium Agenda2026.Day2.line6.Event', location: 'Symposium Agenda2026.Day2.line6.Location', host: 'Symposium Agenda2026.Day2.line6.Host' },
  { time: 'Symposium Agenda2026.Day2.line7.Time', event: 'Symposium Agenda2026.Day2.line7.Event', location: 'Symposium Agenda2026.Day2.line7.Location', host: 'Symposium Agenda2026.Day2.line7.Host' },
  { time: 'Symposium Agenda2026.Day2.line8.Time', event: 'Symposium Agenda2026.Day2.line8.Event', location: 'Symposium Agenda2026.Day2.line8.Location', host: 'Symposium Agenda2026.Day2.line8.Host' },
  { time: 'Symposium Agenda2026.Day2.line9.Time', event: 'Symposium Agenda2026.Day2.line9.Event', location: 'Symposium Agenda2026.Day2.line9.Location', host: 'Symposium Agenda2026.Day2.line9.Host' },
  { time: 'Symposium Agenda2026.Day2.line10.Time', event: 'Symposium Agenda2026.Day2.line10.Event', location: 'Symposium Agenda2026.Day2.line10.Location', host: 'Symposium Agenda2026.Day2.line10.Host' }
])

const currentSchedule = computed(() => (daySwitch.value === 1 ? day1Schedule.value : day2Schedule.value))
const { t, locale } = useI18n()

const translateHtml = (key: string) => t(key).replace(/\n/g, '<br>')

// Force table refresh when translated schedule text changes in dev/HMR.
const tableRenderKey = computed(() => (
  `${locale.value}-${daySwitch.value}-${currentSchedule.value.map(row => translateHtml(row.time)).join('|')}`
))

const day1HostRowSpanMap: Record<number, number> = {
  2: 3,
  10: 1,
  11: 2
}

const currentHostRowSpanMap = computed<Record<number, number>>(() => (daySwitch.value === 1 ? day1HostRowSpanMap : {}))

const shouldRenderHostCell = (index: number) => {
  for (const [startIndexText, span] of Object.entries(currentHostRowSpanMap.value)) {
    const startIndex = Number(startIndexText)

    if (index > startIndex && index < startIndex + span) {
      return false
    }
  }

  return true
}

const getHostRowSpan = (index: number) => currentHostRowSpanMap.value[index] ?? 1
const getHostCellClass = (index: number) => {
  const baseClass = 'p-2 border-l border-r border-black align-top'

  // Day 1: add top/bottom horizontal lines for 12:10-14:00 (Luncheon)
  if (daySwitch.value === 1 && (index === 6 || index === 14)) {
    return `${baseClass} border-t border-b`
  }

  return baseClass
}
</script>

<template>
  <div class="w-4/5 grid grid-cols-2 gap-4 items-center justify-center text-center mx-auto">
    <div
      v-for="item in daySwitchOptions"
      :key="item.value"
      class="w-full h-full text-lg underline bg-white/50 shadow-2xl self-center hover:text-blue-400 hover:cursor-pointer"
      @click="daySwitch = item.value"
    >
      {{ item.short }}
    </div>
  </div>

  <div class="text-2xl font-bold text-center mt-6">
    Agenda - {{ daySwitchOptions[daySwitch - 1]?.label || 'No Agenda Available' }}
  </div>

  <div class="w-full h-full justify-center items-center text-center mx-auto px-4 md:px-8">
    <div class="w-full h-full justify-center items-center mt-4 overflow-x-auto">
      <table :key="tableRenderKey" class="w-full min-w-[640px] border border-black border-collapse font-serif">
        <thead>
          <tr class="bg-orange-200 text-black border border-black">
            <th class="p-2 border border-black text-left w-28">Time</th>
            <th class="p-2 border border-black text-left">Event</th>
            <th class="p-2 border border-black text-left w-32">Location</th>
            <th class="p-2 border border-black text-left w-24">Host</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in currentSchedule" :key="index">
            <td class="p-2 border border-black align-top">
              <div v-html="translateHtml((row as ScheduleItem).time)" />
            </td>
            <td class="p-2 border border-black text-left align-top">
              <div v-html="translateHtml((row as ScheduleItem).event)" />
            </td>
            <td class="p-2 border border-black align-top">
              <div v-html="translateHtml((row as ScheduleItem).location)" />
            </td>
            <td
              v-if="shouldRenderHostCell(index)"
              :rowspan="getHostRowSpan(index)"
              :class="getHostCellClass(index)"
            >
              <div v-html="translateHtml((row as ScheduleItem).host)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
