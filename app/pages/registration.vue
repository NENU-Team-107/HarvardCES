<script setup lang="ts">
const { t } = useI18n()

const trackColumns = computed(() => {
  return [
    { accessorKey: 'type', header: t('Register.type') },
    { accessorKey: 'banquet', header: t('Register.banquet') + '(' + t('Register.banquetDate') + ')' },
    { accessorKey: 'fee', header: t('Register.fee') + '*' },
  ]
})

const workshopColumns = computed(() => {
  return [
    { accessorKey: 'host', header: t('Register.wsHost') },
    { accessorKey: 'name', header: t('Register.wsName') },
  ]
})

interface TrackInfo {
  type: string;
  banquet: number;
  fee: string;
}

interface WorkshopInfo {
  name: string;
  host: string;
  link?: string;
}

const trackData = computed(() => {
  return [
    {
      type: t('Register.non-student'),
      banquet: 1,
      fee: '1545 ' + t('Register.HKD') + ' (' + t('Register.about') + ' 196 ' + t('Register.USD') + ')'
    },
    {
      type: '',
      banquet: 0,
      fee: '945 ' + t('Register.HKD') + ' (' + t('Register.about') + ' 120 ' + t('Register.USD') + ')'
    },
    {
      type: t('Register.student'),
      banquet: 1,
      fee: '915 ' + t('Register.HKD') + '(' + t('Register.about') + ' 116 ' + t('Register.USD') + ')'
    },
    {
      type: '',
      banquet: 0,
      fee: '315 ' + t('Register.HKD') + '(' + t('Register.about') + ' 40 ' + t('Register.USD') + ')'
    }
  ] as TrackInfo[];
})

const workshopData = computed(() => {
  return [
    {
      name: t('Register.HarvardHost'),
      host: t('Register.Harvard'),
      // link: "/workshop/1"
    },
    {
      name: t('Register.journals'),
      host: t('Register.journalsHost'),
      // link: "/workshop/1"
    },
    {
      name: t('Register.EduAI'),
      host: t('Register.EduAIHost'),
      link: "/workshop/3"
    }
  ]
})

const track = ref<TrackInfo[]>([]);
const ws = ref<WorkshopInfo[]>([]);

watchEffect(() => {
  track.value = trackData.value;
  ws.value = workshopData.value;
});

</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24">
    <div class="text-center font-bold md:text-2xl text-xl  my-5 px-4">
      <div class="flex justify-center items-center ">
        <div class="h-0.5 w-20 bg-black" />
        <h1 class="py-3 px-2">
          {{ $t("Register.title") }}
        </h1>
        <div class="h-0.5 w-20 bg-black" />
      </div>
      <div class="text-base text-gray-700 font-bold px-4">
        {{ $t("Register.noti") }}
      </div>
    </div>

    <div class="h-full w-full max-w-7xl px-6 md:px-0 justify-self-center bg-white/80 justify-center items-center">
      <div class="w-full h-full pt-6">
        <div class="justify-center items-center flex flex-col">
          <h1 class="text-center text-rose-500 italic font-bold">
            {{ $t("Register.earlyReg") }}
          </h1>
          <h1 class="text-center font-bold md:text-lg text-base py-3">
            {{ $t("Register.trackTitle") }}
          </h1>

          <div class="flex justify-center items-center w-full self-center">
            <UTable :data="track" :columns="trackColumns">
              <template #banquet-cell="{ row }">
                <div v-if="(row.original).banquet === 1">
                  <UIcon name="i-material-symbols-check" class="w-7 h-7 text-green-400" />
                </div>
                <div v-else-if="(row.original).banquet === 0">
                  <UIcon name="i-material-symbols-close" class="w-7 h-7 text-red-400" />
                </div>
                <div v-else>
                  <UIcon name="i-material-symbols-close" class="w-7 h-7 text-red-400" />
                </div>
              </template>
            </UTable>
          </div>
          <div class="my-5 font-bold text-sm px-5 text-gray-800/80">
            <div>
              <i>* {{ $t('Register.FeeDetails1') }}</i>
            </div>
            <div>
              <i>* {{ $t("Register.Banquet") }}: 600 {{ $t("Register.HKD") }} ( {{ $t("Register.about") }}
                76 {{
                  $t("Register.USD") }} ) </i>
            </div>
            <div>
              <i>* <span v-html="$t('Register.FeeDetails2')" /></i>
            </div>
            <div class="text-red-500/80 text-base">
              <i>* <span v-html="$t('Register.FeeDetails3')" /></i>
            </div>
            <div class="text-red-500/80 text-base">
              <i>* <span v-html="$t('Register.FeeDetails4')" /></i>
            </div>
          </div>
        </div>

        <div class="mx-auto py-4">
          <div class="h-full w-0.5 bg-green-700/70" />
        </div>

        <div class="justify-center items-center flex flex-col">
          <h1 class="text-center font-bold md:text-lg text-base py-3">
            {{ $t("Register.workshopTitle") }} [{{ $t('Register.wsLength') }}]*
          </h1>

          <div class="flex justify-center items-center w-full self-center">
            <UTable :data="ws" :columns="workshopColumns">
              <!-- <template #type-cell="{ row }">
                <div><span class="text-center">{{ row.original.type }}</span></div>
              </template> -->
              <template #name-cell="{ row }">
                <NuxtLink v-if="row.original.link" :to="row.original.link" class="text-blue-400">
                  {{ row.original.name }}
                </NuxtLink>
                <span v-else>{{ row.original.name }}</span>
              </template>
            </UTable>
          </div>

          <div class="my-5 font-bold text-lg px-5 text-green-800/90">
            <div>
              {{ $t("Register.wsFee") }}
            </div>
          </div>

          <div class="my-5 font-bold text-sm px-5 text-gray-800/80">
            <div>
              <i>* <span v-html="$t('Register.FeeDetails2')" /></i>
            </div>
            <div class="text-red-500/80 text-base">
              <i>* <span v-html="$t('Register.FeeDetails3')" /></i>
            </div>
            <div class="text-red-500/80 text-base">
              <i>* <span v-html="$t('Register.FeeDetails4')" /></i>
            </div>
          </div>
        </div>
      </div>
      <div class="py-3">
        <div class="justify-self-center md:text-xl text-sm md:w-1/4 w-1/2 h-full py-5 hover:scale-110 transition-all">
          <UButton icon="i-ic-round-arrow-forward" size="xl" color="info" variant="solid" trailing padded
            to="https://eduhk.au1.qualtrics.com/jfe/form/SV_agWfa1tf9UtiVU2" target="_blank" block>
            {{ $t("Register.click") }}
          </UButton>
        </div>
      </div>

      <div class="py-4 px-10 text-justify">
        <div class="italic text-orange-600 font-semibold">
          *{{ $t("Register.policy") }}*
        </div>
      </div>

    </div>
  </div>

</template>