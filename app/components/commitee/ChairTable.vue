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
  pending.value = true; // 设置为加载中状态
  if (status === "Success" && data) {
    lines.value = data ?? [] as ChairListItem[];
    pending.value = false;
  } else {
    console.error('Failed to fetch data');
    pending.value = false;
  }
};

onMounted(() => {
  fetchList(); // 组件挂载时调用 fetchList
});

const columns = computed(() => {
  if (props.flag)
    return [{ key: 'title', id: 'title', }, { key: 'name', id: 'name', }, { key: 'inc', id: 'inc', }];
  return [{ key: 'name', id: 'name', }, { key: 'inc', id: 'name', }];
});

</script>

<template>
  <div class="w-full h-full">
    <h1 class="md:text-xl text-lg text-green-900 font-bold text-left pl-5 md:min-h-7">{{ $t(props.title + ".Name") }}
    </h1>
    <div class="">
      <UTable
:data="lines" :columns="columns"
        :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
        :ui="{ base: 'min-w-full table-fixed ', td: { base: 'break-words text-left min-w-full table-fixed', size: 'md:text-base text-sm', color: 'text-black drak:text:white' }, tr: { base: 'h-fit' } }">
        <template #name-cell="{ row }">
          <div
class="md:text-base text-sm text-black drak:text:white break-words text-left min-w-full table-fixed"
            v-html="$t(row.original.name).replace(/\n/g, '<br>')" />
        </template>
        <template #title-cell="{ row }">
          <div
class="md:text-base text-sm text-black drak:text:white break-words text-left min-w-full table-fixed"
            v-html="$t(row.original.title).replace(/\n/g, '<br>')" />
        </template>
        <template #inc-cell="{ row }">
          <div
class="md:text-base text-sm text-black drak:text:white break-words text-left min-w-full table-fixed"
            v-html="$t(row.original.inc).replace(/\n/g, '<br>')" />
        </template>
      </UTable>
    </div>
  </div>
</template>