<script setup lang="ts">
const props = defineProps<{
  id: string
}>();

const fetchBusSchedule = async () => {
  const resp = await $fetch('/api/symposium/busSchedule', {
    method: 'GET',
    query: {
      id: props.id
    }
  });
  if (resp && 'status' in resp && 'data' in resp) {
    const { status, data } = resp;
    if (status === "Success" && data) {
      return data;
    }
  }
  console.error('Failed to fetch bus schedule');
  return null;
};

const data = ref<any[]>([]);
const fetchData = async () => {
  const schedule = await fetchBusSchedule();
  if (schedule) {
    data.value = schedule;
  }
};

</script>

<template>
  <!-- <UTable :data="data"></UTable> -->
  <div>{{data}}</div>
</template>