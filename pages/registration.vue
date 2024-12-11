<script setup lang="ts">
const { t } = useI18n()

const columns = computed(() => {
    return [{
        key: 'type',
        label: t('Register.type')
    }, {
        key: 'banquet',
        label: t('Register.banquet') + '(' + t('Register.banquetDate') + ')'
    }, {
        key: 'fee',
        label: t('Register.fee') + '*'
    }]
})

interface RegistrationInfo {
    type: string;
    banquet: number;
    fee: string;
}

const contactData = computed(() => {
    return [
        {
            type: t('Register.non-student'),
            banquet: 1,
            fee: '1920 ' + t('Register.HKD') + ' (' + t('Register.about') + ' 244 ' + t('Register.USD') + ')'
        },
        {
            type: '',
            banquet: 0,
            fee: '1320 ' + t('Register.HKD') + ' (' + t('Register.about') + ' 168 ' + t('Register.USD') + ')'
        },
        {
            type: t('Register.student'),
            banquet: 1,
            fee: '1230 ' + t('Register.HKD') + '(' + t('Register.about') + ' 156 ' + t('Register.USD') + ')'
        },
        {
            type: '',
            banquet: 0,
            fee: '600 ' + t('Register.HKD') + '(' + t('Register.about') + ' 80 ' + t('Register.USD') + ')'
        },
        {
            type: t('Register.virtual'),
            banquet: -1,
            fee: t("Register.Free")
        }
    ] as RegistrationInfo[];
})

const contact = ref<RegistrationInfo[]>([]);
watchEffect(() => {
    contact.value = contactData.value;
});

</script>

<template>
    <div class="w-full h-screen mx-10 my-5 pt-24">
        <div class="h-full w-full max-w-5xl justify-self-center bg-white/80 justify-center items-center">
            <div class="flex flex-col justify-center items-center">
                <h1 class="text-center font-bold md:text-2xl text-xl py-3">
                    {{ $t("Register.title") }}
                </h1>
                <div class="flex justify-center items-center w-full self-center">
                    <UTable
                        :ui="{ td: { size: 'md:text-base text-sm text-center', color: 'text-black' }, th: { size: 'md:text-base text-base text-center', } }"
                        :rows="contact" :columns="columns">
                        <template #type-data="{ row }">
                            <div><span class="text-center">{{ row.type }}</span></div>
                        </template>
                        <template #banquet-data="{ row }">
                            <div v-if="row.banquet === 1">
                                <UIcon name="i-material-symbols-check-small" class="w-7 h-7 text-green-400" />
                            </div>
                            <div v-else-if="row.banquet === 0">
                                <UIcon name="i-material-symbols-close" class="w-7 h-7 text-red-400" />
                            </div>
                            <div v-else>
                                <UIcon name="i-material-symbols-close" class="w-7 h-7 text-red-400" />
                            </div>
                        </template>
                    </UTable>
                </div>
                <div class="my-5 text-left font-bold text-sm px-5">
                    <div>
                        <i>* {{ $t('Register.FeeDetails1') }}</i>
                    </div>
                    <div>
                        <i>* {{ $t('Register.FeeDetails2') }}</i>
                    </div>
                </div>
                <div class="md:text-xl text-sm md:w-1/4 w-1/2 h-full py-5 hover:scale-110 transition-all">
                    <UButton :ui="{ rounded: 'rounded-full' }" icon="i-ic-round-arrow-forward" size="md" color="rose"
                        variant="solid" trailing padded to="https://eduhk.au1.qualtrics.com/jfe/form/SV_agWfa1tf9UtiVU2"
                        target="_blank" block>
                        {{ $t("Register.click") }}
                    </UButton>
                </div>
            </div>

        </div>
    </div>




</template>