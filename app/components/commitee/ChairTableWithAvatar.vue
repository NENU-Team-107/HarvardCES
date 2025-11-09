<script setup lang="ts">

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
  const route = useRoute();
  const apiPath = route.path.includes('2026') ? '/api/speaker/listChairAll2026' : '/api/speaker/listChairAll';
  
  const resp = await $fetch(apiPath, {
    method: 'GET',
    query: {
      kind: props.title
    }
  });
  const { status, data } = resp;
  pending.value = true;
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
  return [{ key: 'name', id: 'name', }, { key: 'inc', id: 'inc', }];
});

// 为“Program Chair”提供头像映射，仅该类别生效
const getAvatarSrc = (nameKey: string) => {
  if (props.title !== 'Program Chair')
    return '';
  const map: Record<string, string> = {
    'Program Chair.Details.line1.name': '/avatars/taosisi.jpg',
    'Program Chair.Details.line2.name': '/avatars/yangyin.jpg',
  };
  return map[nameKey] || '';
};

</script>

<template>
  <div class="w-full h-full">
    <h1 class="md:text-xl text-lg text-green-900 font-bold text-left pl-5 md:min-h-7">{{ $t(props.title + ".Name") }}
    </h1>
    <div class="">
      <UTable
        :data="lines" :columns="columns"
        :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
        :ui="{ base: 'min-w-full table-fixed ', td: 'break-words text-left min-w-full table-fixed md:text-base text-sm text-black drak:text:white', tr: 'h-fit' }">
        <template #name-cell="{ row }">
          <div class="flex items-center gap-2 md:text-base text-sm text-black drak:text:white break-words text-left min-w-full table-fixed">
            <NuxtImg v-if="props.title === 'Program Chair' && getAvatarSrc(row.original.name)" :src="getAvatarSrc(row.original.name)" alt="avatar" width="28" height="28" class="rounded-full object-cover" />
            <span v-html="$t(row.original.name).replace(/\n/g, '<br>')" />
          </div>
        </template>
        <template #title-cell="{ row }">
          <div
            class="md:text-base text-sm text-black drak:text:white break-words text-left min-w-full table-fixed"
            v-html="$t(row.original.title || '').replace(/\n/g, '<br>')" />
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