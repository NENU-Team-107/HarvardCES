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
  label: t('SubmitNumber')
}, {
  key: 'topic',
  label: t('SubmitTopic')
}, {
  key: 'mail',
  label: t('SubmitMethod')
}]

const contact = [{
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
  <div class="md:w-fit md:min-h-fit w-screen min-h-screen md:mx-10 mx-0 my-5 pt-24">
    <NuxtPage />
    <div class="flex flex-col md:px-20 px-2 py-10 bg-white/80  justify-center items-center w-full">
      <h1 class="text-center font-bold md:text-3xl text-2xl py-6">
        {{ $t("Sub-symposium Sessions Submit") }}
      </h1>
      <h2 class="text-red-500/90 text-lg">
        <strong><i>Due 31 December, 2024; Notification by 31 January, 2025; Extension upon request</i></strong>
      </h2>
      <div class="flex mt-10 justify-center items-center w-full self-center">
        <UTable
          :ui="{ td: { size: 'md:text-lg text-sm', color: 'text-black drak:text:white hover:text-green-600' }, th: { size: 'md:text-xl text-lg', } }"
          :rows="contact" :columns="columns" @select="select">
        </UTable>
      </div>
    </div>
  </div>
</template>
