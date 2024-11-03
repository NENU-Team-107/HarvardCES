<script setup lang="ts">

const footerTitle = ref<string>("Media.Title")

const contact = ref([
    {
        before: "Host.Name",
        after: "Host.Details.Name"
    },
    {
        before: "Host.Language",
        after: "Host.Details.Language"
    },
    {
        before: "Host.Date",
        after: "Host.Details.Date"
    },
    {
        before: "Host.Location",
        after: "Host.Details.Location"
    }
])

const media = ref([
    {
        label: "Redbook",
        image: "/img/redbook.png"
    },
    {
        label: "Wechat",
        image: "/img/wechat.png"
    },
    {
        label: "Email",
        image: undefined
    }
])

</script>

<template>
    <UContainer class="min-w-full">
        <!-- TODO 背景颜色 + 文字颜色 -->
        <div class="flex items-center justify-center min-h-28">
            <div class="flex">
                <div class="flex-1 items-center justify-center">
                    <ul>
                        <li v-for="item in contact">
                            <span>{{ $t(item.before) }} : {{ $t(item.after) }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <span class="text-xl font-bold">{{ $t(footerTitle) }}</span>
                <div class="flex">
                    <div v-for="item in media" class="felx-1">
                        <div v-if="item.label !== 'Email'">
                            <span>{{ $t("Media." + item.label + ".Intro") }}</span>
                            <NuxtImg :src="item.image" class="w-20 h-20"></NuxtImg>
                            <span> {{ $t("Media." + item.label + ".Details") }}</span>
                        </div>
                        <div v-else>
                            <span>{{ $t("Media.Email.Details", ["GIETfuture@eduhk.hk"]) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UContainer>
</template>