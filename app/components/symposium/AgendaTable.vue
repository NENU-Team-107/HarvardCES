<script setup lang="ts">
import { computed, ref } from 'vue'

const daySwitch = ref(1)
const daySwitchOptions = ref([
  { label: 'Day 1 (Friday, 15 May 2026)', value: 1, short: 'Day 1', pdf: '/pdf/symposium/Agenda_Day1.pdf' },
  { label: 'Day 2 (Saturday, 16 May 2026)', value: 2, short: 'Day 2', pdf: '/pdf/symposium/Agenda_Day2.pdf' }
])

const currentPdfSrc = computed(() => (
  daySwitchOptions.value.find(item => item.value === daySwitch.value)?.pdf || ''
))
const currentPdfEmbedSrc = computed(() => (
  currentPdfSrc.value
    ? `${currentPdfSrc.value}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit&view=FitH`
    : ''
))

// 旧版表格数据结构与渲染逻辑（按要求保留，不删除）
// import type { TableColumn } from '@nuxt/ui'
// interface ScheduleItem {
//   time: string
//   event: string
//   location: string
//   host: string
// }
// const columns: TableColumn<ScheduleItem>[] = [
//   { accessorKey: 'time', header: 'Time' },
//   { accessorKey: 'event', header: 'Event' },
//   { accessorKey: 'location', header: 'Location' },
//   { accessorKey: 'host', header: 'Host' }
// ]
// const day1Schedule = ref<ScheduleItem[]>([])
// const day2Schedule = ref<ScheduleItem[]>([])
// const currentSchedule = computed(() => (daySwitch.value === 1 ? day1Schedule.value : day2Schedule.value))
// const { t, locale } = useI18n()
// const translateHtml = (key: string) => t(key).replace(/\n/g, '<br>')
// const tableRenderKey = computed(() => (
//   `${locale.value}-${daySwitch.value}-${currentSchedule.value.map(row => translateHtml(row.time)).join('|')}`
// ))
// const day1HostRowSpanMap: Record<number, number> = {
//   2: 3,
//   10: 1,
//   11: 2
// }
// const currentHostRowSpanMap = computed<Record<number, number>>(() => (daySwitch.value === 1 ? day1HostRowSpanMap : {}))
// const shouldRenderHostCell = (index: number) => {
//   for (const [startIndexText, span] of Object.entries(currentHostRowSpanMap.value)) {
//     const startIndex = Number(startIndexText)
//
//     if (index > startIndex && index < startIndex + span) {
//       return false
//     }
//   }
//
//   return true
// }
// const getHostRowSpan = (index: number) => currentHostRowSpanMap.value[index] ?? 1
// const getHostCellClass = (index: number) => {
//   const baseClass = 'p-2 border-l border-r border-black align-top'
//
//   if (daySwitch.value === 1 && (index === 6 || index === 14)) {
//     return `${baseClass} border-t border-b`
//   }
//
//   return baseClass
// }
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
    <div class="w-full h-full justify-center items-center mt-4">
      <iframe
        v-if="currentPdfEmbedSrc"
        :key="`${daySwitch}-${currentPdfEmbedSrc}`"
        :src="currentPdfEmbedSrc"
        class="w-full md:w-[85vw] xl:w-[78vw] max-w-[1400px] mx-auto h-[calc(100vh-140px)] min-h-[920px] border border-black rounded bg-white"
        title="Symposium Agenda PDF"
      />
      <div v-else class="text-center text-gray-500 py-8">
        PDF not available
      </div>

      <!--
      旧版表格展示（按要求保留，不删除）
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
      -->
    </div>
  </div>
</template>
