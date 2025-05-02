<script setup lang="ts">
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
</template>
