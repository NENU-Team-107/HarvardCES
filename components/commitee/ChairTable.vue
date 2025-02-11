<script lang="ts" setup>
import type { ChairListItem } from '~/lib/model';
import Loading from '~/components/common/Loading.vue';

const props = defineProps<{
  title: string,
  flag: boolean,
}>();

const pending = ref(true);
const lines = ref<ChairListItem[]>([]);
const fetchList = async () => {
  const resp = await $fetch('/api/speaker/listChairAll', {
    method: 'GET',
    query: {
      kind: props.title
    }
  });
  console.log(resp);
  const { status, data } = resp;
  console.log(status, data);
  if (status === "Success" && data !== null) {
    if (props.flag) {
      lines.value = data.map((row: ChairListItem) => ({
        title: t(row.title).replace(/\n/g, '<br>'),
        name: t(row.name).replace(/\n/g, '<br>'),
        inc: t(row.inc).replace(/\n/g, '<br>')
      }));
    } else {
      lines.value = data.map((row: ChairListItem) => ({
        name: t(row.name).replace(/\n/g, '<br>'),
        inc: t(row.inc).replace(/\n/g, '<br>')
      }));
    }
    pending.value = false;
    console.log(data);
    console.log(lines.value);
  }
};

const { t } = useI18n();

onMounted(() => {
  fetchList(); // 组件挂载时调用 fetchList
});

const columns = computed(() => {
  if (props.flag)
    return [{ key: 'title', }, { key: 'name', }, { key: 'inc', }];
  return [{ key: 'name', }, { key: 'inc', }];
});

</script>

<template>
  <div class="w-full h-full">
    <h1 class="text-2xl text-green-900 font-bold text-left pl-5">{{ $t(props.title + ".Name") }}</h1>
    <!-- {{ props.title }}
    {{ lines }} -->
    <div v-if="pending" class="flex justify-center items-center">
      <Loading></Loading>
    </div>
    <div v-else>
      <UTable :rows="lines" :columns="columns"
        :ui="{ base: 'min-w-full table-fixed', td: { base: 'text-left min-w-full table-fixed', size: 'text-lg', color: 'text-black drak:text:white' }, th: { base: 'hidden', }, tr: { base: 'h-fit' } }">
        <template #name-data="{ row }">
          <div v-html="row.name"></div>
        </template>
        <template #title-data="{ row }">
          <div v-html="row.title"></div>
        </template>
        <template #inc-data="{ row }">
          <div v-html="row.inc"></div>
        </template>
      </UTable>
    </div>
  </div>
</template>