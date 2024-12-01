<script lang="ts" setup>
import SubSwiper from '~/components/homeIndex/SubSwiper.vue';
const { t } = useI18n()

const router = useRouter()

const columns = computed(() => {
    return [{
        key: 'id',
        label: t('SubmitNumber')
    }, {
        key: 'topic',
        label: t('SubmitTopic')
    }, {
        key: 'mail',
        label: t('SubmitMethod')
    }]
})

const contact = computed(() => {
    return [{
        id: 'Parallel Session 1 ',
        topic: 'Al for Teaching, Learning and Traning',
        mail: t('SendTo') + 'lujijian@hznu.edu.cn',
    }, {
        id: 'Parallel Session 2',
        topic: 'Furistics Mindset and Trends of Teaching and Training',
        mail: t('SendTo') + 'xiaoyanchu@zju.edu.cn',
    }, {
        id: 'Parallel Session 3',
        topic: 'AI Enabsed Science Education',
        mail: t('SendTo') + 'mtt@snnu.edu.cn',
    }, {
        id: 'Parallel Session 4',
        topic: 'Large Language Model & Computing Education',
        mail: t('SendTo') + 'mhyin@nenu.edu.cn',
    }, {
        id: 'Parallel Session 5',
        topic: 'Ethical and Fairness in AI Application Decisions',
        mail: t('SendTo') + 'celab2208@163.com',
    }, {
        id: 'Parallel Session 6',
        topic: 'Research and Learning Analytics in the Age of AI',
        mail: t('SendTo') + 'hnubai@hainan.edu.cn',
    }, {
        id: 'Poster and Showcase Session',
        topic: 'Above all',
        mail: t('SendToLink') + 'https://www.wjx.top/vm/tdLaPJt.aspx#',
    }]
})
</script>

<template>
    <div class="w-full h-full mx-10 my-5 pt-24">
        <div
            class="h-full w-full max-w-6xl justify-self-center hidden md:block bg-white/80 justify-center items-center">
            <div class="flex flex-col justify-center items-center">
                <h1 class="text-center font-bold md:text-xl text-lg py-3">
                    {{ $t("Sub-symposium Sessions Submit") }}
                </h1>
                <h2 class="text-red-500/90 text-base">
                    <strong><i>Due 31 December, 2024; Notification by 31 January, 2025; Extension upon
                            request</i></strong>
                </h2>
                <div class="flex justify-center items-center w-full self-center">
                    <UTable
                        :ui="{ td: { size: 'md:text-base text-sm', color: 'text-black drak:text:white hover:text-green-600' }, th: { size: 'md:text-base text-base', } }"
                        :rows="contact" :columns="columns">
                    </UTable>
                </div>
            </div>

            <div class="text-2xl font-bold text-center my-5">
                <div class="flex justify-center items-center ">
                    <div class="h-0.5 w-24 bg-black"></div>
                    <h1 class="mx-4">{{ $t("Session") }} </h1>
                    <div class="h-0.5 w-20 bg-black"></div>
                </div>
            </div>

            <div class="min-w-screen">
                <SubSwiper :cards="true" />
            </div>

            <div class="text-2xl font-bold text-center my-5">
                <div class="flex justify-center items-center ">
                    <div class="h-0.5 w-24 bg-black"></div>
                    <h1 class="mx-4">{{ $t("pSession.poster") }} </h1>
                    <div class="h-0.5 w-20 bg-black"></div>
                </div>
            </div>

            <div class="justify-self-center mx-10">
                <div class="grid grid-cols-2 grid-flow-row-dense gap-4">
                    <div>
                        <NuxtImg :src="t('Showcase-1')" loading="lazy" />
                    </div>
                    <div>
                        <NuxtImg :src="t('Showcase-2')" loading="lazy" />
                    </div>
                </div>
            </div>

        </div>

        <div class="md:hidden">

        </div>
    </div>
</template>
