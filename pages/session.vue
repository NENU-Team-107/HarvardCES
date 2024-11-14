<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
const { t } = useI18n();

const tabMenuBase = ref<TabItems[]>([
    {
        label: t("pSession.sub-symposium"),
        content: "",
        show: true,
        index: 0,
    },
    {
        label: t("pSession.poster"),
        content: "",
        show: false,
        index: 1,
    }
])

const tabMenu = computed(() => {
    return tabMenuBase.value.map(item => ({
        ...item,
    }));
})

const toggleShowMore = (index: number) => {
    tabMenu.value[index].show = !tabMenu.value[index].show;
}
</script>

<template>
    <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
        <NuxtPage />
        <UTabs :items="tabMenu" orientation="vertical"
            :ui="{ wrapper: 'hidden md:flex gap-4 px-10 dark:bg-black', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5', font: 'font-bold' } } }"
            class="bg-white/80 w-full h-full min-h-screen">
            <template #item>
                <div class="min-h-full w-full flex flex-col px-20 py-5 bg-white/80  dark:bg-gray-800/80">

                    <!-- OK: 样式问题，主要是 ULink 部分的样式和位置(可以使用红色粗体/蓝色粗体)，上面 pdf 与 图片的顺序不要改变，从上到下即可 -->
                </div>
            </template>
        </UTabs>
        <div class="md:hidden">
            <div v-for="item in tabMenu">
                <UCard :ui="{
                    base: '',
                    background: 'bg-white dark:bg-gray-900',
                    divide: 'divide-y divide-gray-200 dark:divide-gray-800',
                    ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
                    rounded: 'rounded-lg',
                    shadow: 'shadow',
                    body: {
                        base: '',
                        background: '',
                        padding: ''
                    },
                    header: {
                        base: '',
                        background: 'bg-tabs-header',
                        padding: 'px-4 py-3 sm:px-6'
                    },
                }">
                    <template #header>
                        <div class="flex w-full justify-between">
                            <span>{{ item.label }}</span>
                            <button @click="toggleShowMore(item.index)">
                                <span v-if="item.show">
                                    <font-awesome icon="fa-solid fa-angle-up" />
                                    {{ $t("Collapse") }}
                                </span>
                                <span v-else>
                                    <font-awesome icon="fa-solid fa-angle-down" />
                                    {{ $t("Show More") }}
                                </span>
                            </button>
                        </div>
                    </template>

                    <div class="w-full max-w-screen-md">



                    </div>

                </UCard>
            </div>
        </div>
    </div>
</template>
