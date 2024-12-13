<script lang="ts" setup>

definePageMeta({
  keepalive: true,
})

import SubSwiper from '~/components/homeIndex/SubSwiper.vue';
const { t } = useI18n()

const lang = useCookie("i18n_redirected")

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
        <h1 class="text-center font-bold md:text-xl text-lg py-3">
          {{ $t("Sub-symposium Sessions Submit") }}
        </h1>
        <h2 class="text-red-500/90 text-base">
          <strong><i>{{ $t("Due") }}</i></strong>
        </h2>
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

      <!-- <div v-if="lang !== 'zh-cn'"
        class="text-center text-red-500 font-bold text-lg flex justify-center items-center my-8">
        <div class="h-0.5 w-32 bg-red-500"></div>
        <div><i>{{ $t("UnderConstruct") }}</i></div>
        <div class="h-0.5 w-32 bg-red-500"></div>
      </div> -->

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

      <div class="text-2xl font-bold text-center my-5">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-20 bg-black"></div>
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
        <div class="my-5 justify-self-end py-4 px-4">
          <ULink to="/sub-symposium/6" class="italic font-semibold text-lg  hover:text-rose-400">
            {{ $t("Symposium.Click") }}
            <font-awesome icon="fa-solid fa-arrow-right" />
          </ULink>
        </div>
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
            <template #topic-data="{ contact }">
              <span>123</span>
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

      <div class="text-lg font-bold text-center my-5">
        <div class="flex justify-center items-center ">
          <div class="h-0.5 w-16 bg-black"></div>
          <h1 class="mx-2">{{ $t("pSession.poster") }} </h1>
          <div class="h-0.5 w-16 bg-black"></div>
        </div>
      </div>

      <div class="justify-self-center mx-10">
        <div class="grid grid-cols-1 grid-flow-row-dense gap-4">
          <div>
            <NuxtImg :src="t('Showcase-1')" loading="lazy" />
          </div>
          <div>
            <NuxtImg :src="t('Showcase-2')" loading="lazy" />
          </div>
        </div>
        <div class="my-3 justify-self-end py-2 px-2">
          <ULink to="/sub-symposium/6"
            class="italic font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            {{ $t("Symposium.Click") }}
            <font-awesome icon="fa-solid fa-arrow-right" />
          </ULink>
        </div>
      </div>

    </div>
  </div>
</template>
