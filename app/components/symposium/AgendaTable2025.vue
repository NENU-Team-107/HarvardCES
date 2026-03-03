<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { TableColumn } from '@nuxt/ui'

const { tm, t } = useI18n()

interface ScheduleItem {
  time: string
  event: string
  location: string
  host: string
}

const daySwitch = ref(1)
const daySwitchOptions = ref([
  { label: 'Day 1 (Thursday, 8 May 2025)', value: 1, short: 'Day 1' },
  { label: 'Day 2 (Friday, 9 May 2025)', value: 2, short: 'Day 2' },
  { label: 'Day 3 (Saturday, 10 May 2025)', value: 3, short: 'Day 3' }
])

const columns: TableColumn<ScheduleItem>[] = [
  { accessorKey: 'time', header: 'Time' },
  { accessorKey: 'event', header: 'Event' },
  { accessorKey: 'location', header: 'Location' },
  { accessorKey: 'host', header: 'Host' }
]

const generateSchedule = (day: string, count: number) => {
  const schedule: ScheduleItem[] = []
  for (let i = 1; i <= count; i++) {
    schedule.push({
      time: `Symposium Agenda.${day}.line${i}.Time`,
      event: `Symposium Agenda.${day}.line${i}.Event`,
      location: `Symposium Agenda.${day}.line${i}.Location`,
      host: `Symposium Agenda.${day}.line${i}.Host`
    })
  }
  return schedule
}

const day1Schedule = ref<ScheduleItem[]>(generateSchedule('Day1', 6))
const day2Schedule = ref<ScheduleItem[]>(generateSchedule('Day2', 18))
const day3Schedule = ref<ScheduleItem[]>(generateSchedule('Day3', 14))

const currentSchedule = computed(() => {
  if (daySwitch.value === 1) return day1Schedule.value
  if (daySwitch.value === 2) return day2Schedule.value
  return day3Schedule.value
})

const isComplexEvent = (key: string) => {
  try {
    const content = tm(key)
    return typeof content === 'object' && content !== null
  } catch (e) {
    return false
  }
}

const getEventContent = (key: string) => {
  try {
    return t(key)
  } catch (e) {
    return key
  }
}
</script>

<template>
  <div class="w-4/5 grid grid-cols-3 gap-4 items-center justify-center text-center mx-auto">
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
      <table class="w-full min-w-[640px] border border-black border-collapse font-serif">
        <thead>
          <tr class="bg-orange-200 text-black border border-black">
            <th class="p-2 border border-black text-left w-28">Time</th>
            <th class="p-2 border border-black text-left">Event</th>
            <th class="p-2 border border-black text-left w-32">Location</th>
            <th class="p-2 border border-black text-left w-24">Host</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in currentSchedule" :key="index" class="border border-black">
            <td class="p-2 border border-black align-top">
              <div v-html="$t((row as ScheduleItem).time).replace(/\n/g, '<br>')" />
            </td>
            <td class="p-2 border border-black text-left align-top">
              <div v-if="isComplexEvent((row as ScheduleItem).event)">
                 <div v-for="(html, idx) in tm((row as ScheduleItem).event)" :key="idx" v-html="html" class="mb-2"></div>
              </div>
              <div v-else v-html="String(getEventContent((row as ScheduleItem).event)).replace(/\n/g, '<br>')" />
            </td>
            <td class="p-2 border border-black align-top">
              <div v-html="$t((row as ScheduleItem).location).replace(/\n/g, '<br>')" />
            </td>
            <td class="p-2 border border-black align-top">
              <div v-html="$t((row as ScheduleItem).host).replace(/\n/g, '<br>')" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
