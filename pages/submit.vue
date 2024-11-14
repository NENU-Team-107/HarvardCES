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
        <!-- TODO 样式，本页只有一个标题栏目，后续需要填写渲染的均为链接内容 -->
        <div>
            {{ tabMenu.at(0)?.label }}
        </div>
    </div>
</template>
