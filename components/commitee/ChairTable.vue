<script lang="ts" setup>

interface ChairListItem {
  title?: string;
  name: string;
  inc: string;
}

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
  const { status, data } = resp;
  if (status === "Success" && data) {
    lines.value = data ?? [];
    pending.value = false;
  } else {
    console.error('Failed to fetch data');
    pending.value = false;
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
    <h1 class="md:text-xl text-lg text-green-900 font-bold text-left pl-5 md:min-h-7">{{ $t(props.title + ".Name") }}
    </h1>
    <div>
      <UTable :rows="lines" :columns="columns"
        :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
        :ui="{ base: 'min-w-full table-fixed ', td: { base: 'break-words text-left min-w-full table-fixed', size: 'md:text-base text-sm', color: 'text-black drak:text:white' }, tr: { base: 'h-fit' } }">
        <template #name-data="{ row }">
          <div v-html="$t(row.name).replace(/\n/g, '<br>')"></div>
        </template>
        <template #title-data="{ row }">
          <div v-html="$t(row.title).replace(/\n/g, '<br>')"></div>
        </template>
        <template #inc-data="{ row }">
          <div v-html="$t(row.inc).replace(/\n/g, '<br>')"></div>
        </template>
      </UTable>
    </div>
  </div>
</template>