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
    mail: '发送至邮箱： lujijian@hznu.edu.cn',
}, {
    id: 'Parallel Session 2',
    topic: 'Furistics Mindset and Trends of Teaching and Training',
    mail: '发送至邮箱： xiaoyanchu@zju.edu.cn',
}, {
    id: 'Parallel Session 3',
    topic: 'AI Enabsed Science Education',
    mail: '发送至邮箱： mtt@snnu.edu.cn',
}, {
    id: 'Parallel Session 4',
    topic: 'Large Language Model & Computing Education',
    mail: '发送至邮箱： mhyin@nenu.edu.cn',
}, {
    id: 'Parallel Session 5',
    topic: 'Ethical and Fairness in AI Application Decisions',
    mail: '发送至邮箱： celab2208@163.com',
}, {
    id: 'Parallel Session 6',
    topic: 'Research and Learning Analytics in the Age of AI',
    mail: '发送至邮箱： hnubai@hainan.edu.cn',
}, {
    id: 'Poster and Showcase Session',
    topic: 'Above all',
    mail: '问卷星在线提交： https://www.wjx.top/vm/tdLaPJt.aspx#',
}]

function select(row: any) {
    if (row) {
        let link = row.mail.split(' ')[1] as string
        if (row.topic !== "Above all") {
            link = "mailto:" + link
        }
        window.open(link)
    }
}

</script>


<template>
    <div class="w-fit min-h-fit mx-10 my-5 pt-24">
        <NuxtPage />
        <div class="flex flex-col px-20 py-10 bg-white/80  justify-center items-center w-full">
            <h1 class="text-center font-bold text-3xl py-6">
                {{ $t("Sub-symposium Sessions Submit") }}
            </h1>
            <h2 class="text-red-500/90 text-lg">
                <strong><i>Due 31 December, 2024; Notification by 31 January, 2025; Extension upon request</i></strong>
            </h2>
            <div class="flex mt-10 justify-center items-center w-full self-center">
                <UTable
                    :ui="{ td: { size: 'text-lg', color: 'text-black drak:text:white hover:text-green-600' }, th: { size: 'text-xl', } }"
                    :rows="contact" :columns="columns" @select="select">
                </UTable>
            </div>
        </div>
    </div>
</template>
