<script lang="ts" setup>

definePageMeta({
  keepalive: true,
})

import SubSwiper from '~/components/homeIndex/SubSwiper.vue';
const { t } = useI18n()


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

interface Contact {
  id: string;
  topic: string;
  mail: string;
  link?: string;
}

const contactData = computed(() => {
  return [{
    id: t('server.Poster.id0.index'),
    topic: t('server.Poster.id0.name'),
    mail: t('SendTo') + 'lujijian@hznu.edu.cn',
    link: '/sub-symposium/0',
  },
  {
    id: t('server.Poster.id1.index'),
    topic: t('server.Poster.id1.name'),
    mail: t('SendTo') + 'xiaoyanchu@zju.edu.cn',
    link: '/sub-symposium/1',
  },
  {
    id: t('server.Poster.id2.index'),
    topic: t('server.Poster.id2.name'),
    mail: t('SendTo') + 'mtt@snnu.edu.cn',
    link: '/sub-symposium/2',
  },
  {
    id: t('server.Poster.id3.index'),
    topic: t('server.Poster.id3.name'),
    mail: t('SendTo') + 'mhyin@nenu.edu.cn',
    link: '/sub-symposium/3',
  },
  {
    id: t('server.Poster.id4.index'),
    topic: t('server.Poster.id4.name'),
    mail: t('SendTo') + 'celab2208@163.com',
    link: '/sub-symposium/4',
  },
  {
    id: t('server.Poster.id5.index'),
    topic: t('server.Poster.id5.name'),
    mail: t('SendTo') + 'hnubai@hainan.edu.cn',
    link: '/sub-symposium/5',
  }, {
    id: t('pSession.index'),
    topic: t('pSession.poster') + '(' + t("Above All") + ')',
    mail: t('SendToLink') + 'https://www.wjx.top/vm/tdLaPJt.aspx#',
    link: "/sub-symposium/6"
  }] as Contact[];
})

const contact = ref<Contact[]>([]);
watchEffect(() => {
  contact.value = contactData.value;
});

</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24">
    <div class="h-full w-full max-w-6xl justify-self-center hidden md:block bg-white/80 justify-center items-center">
      <div class="flex flex-col justify-center items-center">
        <div class="text-2xl font-bold text-center my-5">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-20 bg-black"></div>
          <h1 class="mx-4">{{ $t("Sub-symposium Sessions Submit") }} </h1>
          <div class="h-0.5 w-20 bg-black"></div>
        </div>
      </div>
        <div class="text-red-500/90 text-base mb-2">
          <strong><i>{{ $t("Due") }}</i></strong>
          <br>
          <span class="text-black"><strong><i>* {{ $t("session more") }}</i></strong></span>
        </div>
        <div class="flex justify-center items-center w-full self-center">
          <UTable
            :ui="{ td: { size: 'md:text-base text-sm', color: 'text-black' }, th: { size: 'md:text-base text-base', } }"
            :rows="contact" :columns="columns">
            <template #topic-data="{ row }">
              <NuxtLink v-if="row.link" :to="row.link" class="hover:text-green-500">
                {{ row.topic }}
              </NuxtLink>
              <span v-else>{{ row.topic }}</span>
            </template>
          </UTable>
        </div>
      </div>

      <div class="text-2xl font-bold text-center my-5">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-20 bg-black"></div>
          <h1 class="mx-4">{{ $t("Session") }} </h1>
          <div class="h-0.5 w-20 bg-black"></div>
        </div>
      </div>

      <div class="min-w-screen">
        <SubSwiper :cards="true" />
      </div>

    </div>

    <div class="md:hidden h-full w-full justify-self-center bg-white/80 justify-center items-center">
      <div class="justify-center items-center px-8">
        <h1 class="text-center font-bold py-3">
          {{ $t("Sub-symposium Sessions Submit") }}
        </h1>
        <h2 class="text-red-500/90 text-sm">
          <strong><i>{{ $t("Due") }}</i></strong>
        </h2>
        <div class="flex justify-center items-center w-full self-center">
          <UTable
            :ui="{ td: { size: 'text-sm', color: 'text-black drak:text:white hover:text-green-600' }, th: { size: 'text-base', } }"
            :rows="contact" :columns="columns">
            <template #topic-data="{ row }">
              <NuxtLink v-if="row.link" :to="row.link" class="hover:text-green-500">
                {{ row.topic }}
              </NuxtLink>
              <span v-else>{{ row.topic }}</span>
            </template>
          </UTable>
        </div>
      </div>
      <div class="text-lg font-bold text-center my-5">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-20 bg-black"></div>
          <h1 class="mx-4">{{ $t("Session") }} </h1>
          <div class="h-0.5 w-20 bg-black"></div>
        </div>
      </div>

      <div class="min-w-screen">
        <SubSwiper :cards="true" />
      </div>

    </div>
  </div>
</template>
