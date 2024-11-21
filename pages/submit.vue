<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
const { t } = useI18n();

const tabMenu = ref<TabItems[]>(
    [
        {
            label: t("Sub-symposium Sessions Submit"),
            content: "Parallel Sessions",
            show: false,
            index: 0
        },

    ]
)

const toggleShowMore = async (index: number) => {
    tabMenu.value[index].show = !tabMenu.value[index].show;
}

const columns = [{
    key: 'id',
    label: '分论坛序号 Number'
}, {
    key: 'topic',
    label: '分论坛主题 Parallel Topic'
}, {
    key: 'mail',
    label: '征稿联系方式 Call for Proposal'
}]

const contact = [{
    id: 'Parallel Session 1 ',
    topic: 'Al for Teaching, Learning and Traning',
    mail: '发送至邮箱：lujijian@hznu.edu.cn',
}, {
    id: 'Parallel Session 2',
    topic: 'Furistics Mindset and Trends of Teaching and Training',
    mail: '发送至邮箱：xiaoyanchu@zju.edu.cn',
}, {
    id: 'Parallel Session 3',
    topic: 'AI Enabsed Science Education',
    mail: '发送至邮箱：mtt@snnu.edu.cn',
}, {
    id: 'Parallel Session 4',
    topic: 'Large Language Model & Computing Education',
    mail: '发送至邮箱：mhyin@nenu.edu.cn',
}, {
    id: 'Parallel Session 5',
    topic: 'Ethical and Fairness in AI Application Decisions',
    mail: '发送至邮箱：celab2208@163.com',
}, {
    id: 'Parallel Session 6',
    topic: 'Research and Learning Analytics in the Age of AI',
    mail: '发送至邮箱：hnubai@hainan.edu.cn',
}, {
    id: 'Poster and Showcase Session',
    topic: 'Above all',
    mail: '问卷星在线提交：https://www.wjx.top/vm/tdLaPJt.aspx#',
}]
</script>


<template>
    <div class="w-full min-h-screen mx-10 my-5 pt-24">
        <NuxtPage />
        <!-- TODO 样式，本页只有一个标题栏目，后续需要填写渲染的均为链接内容 -->
        <div
            class="flex flex-col px-20 py-10 bg-white/80 dark:bg-gray-800/80 dark:text-white justify-center items-center min-h-screen w-full">
            <h1 class="text-center font-bold text-2xl py-6">
                {{ $t("Sub-symposium Sessions Submit") }}
            </h1>
            <h2 class="text-red-600/80">
                <strong><i>Due 31 December, 2024; Notification by 31 January, 2025, Extension upon request</i></strong>
            </h2>
            <div class="flex mt-10 justify-center w-full flex-1 text-xl">
                <UTable
                    :ui="{ td: { size: 'text-base', color: 'text-black drak:text:white' }, th: { size: 'text-lg' } }"
                    :rows="contact" :columns="columns" />
            </div>
        </div>
    </div>
</template>
