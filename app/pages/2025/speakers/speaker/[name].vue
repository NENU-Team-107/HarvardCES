<script setup lang="ts">
import Details from '~/components/speakers/Details.vue';
import type { ApiResponse, Speaker } from '~/lib/model.ts';

const route = useRoute()

const speaker = ref<Speaker>();

const getSpeaker = async (idWithName: string) => {
  const id = idWithName.split(' ')[0];
  const resp = await $fetch<ApiResponse<Speaker>>('/api/speaker/queryByID', {
    method: 'GET',
    query: {
      id: id,
    }
  });
  if (resp && 'status' in resp && 'data' in resp) {
    const { status, data } = resp;
    if (status === 'Success' && data !== null) {
      speaker.value = data;
    }
  }
}

onMounted(() => {
  console.log(route.params.name)
  getSpeaker(decodeURIComponent(route.params.name as string))
    .then(async () => {
      if (speaker.value) {
        const image: Blob = await $fetch('/api/speaker/photo', {
          method: 'GET',
          query: {
            photo: speaker.value.photo
          }
        })
        speaker.value.photo = window.URL.createObjectURL(image)
      }
    })
})

</script>

<template>
  <div class="w-full h-full min-h-screen mx-0 y-5 pt-24">
    <Details v-if="speaker !== undefined" :speaker="speaker" />
  </div>
</template>