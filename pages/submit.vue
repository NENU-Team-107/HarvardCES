<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
const { t } = useI18n();

const tabMenu = ref<TabItems[]>(
    [
        {
            label: t("Sub-symposium Sessions Submit"),
            content: "Sub-symposium Sessions",
            show: false,
            index: 0
        },

    ]
)

const toggleShowMore = async (index: number) => {

    tabMenu.value[index].show = !tabMenu.value[index].show;

}

</script>

<template>
    <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
        <NuxtPage />
        <UTabs :items="tabMenu" orientation="vertical"
            :ui="{ wrapper: 'hidden md:flex gap-4 px-10', list: { width: 'w-60', tab: { size: 'text-base text-nowrap', padding: 'py-5' } } }"
            class="bg-white/80 w-full h-full min-h-screen">
            <template #item>
                <div class="min-h-full flex flex-col px-20 py-10 bg-white/80">
                    <div class="flex justify-center items-center w-full flex-1">

                    </div>
                </div>
            </template>
        </UTabs>

        <!-- TODO 补全样式 -->
        <div class="md:hidden">
            <div v-for="item in tabMenu">
                <UCard>

                    <template #header>
                        <div>
                            <span>{{ item.label }}</span>
                            <button @click="toggleShowMore(item.index)">
                                <span v-if="item.show">▲ {{ $t("Collapse") }}</span>
                                <span v-else>▼ {{ $t("Show More") }}</span>
                            </button>
                        </div>
                    </template>

                </UCard>
            </div>
        </div>
    </div>
</template>
