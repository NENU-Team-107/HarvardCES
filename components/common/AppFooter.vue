<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const footeri18n = ref({
    contact: {
        title: "Host.Title",
        intro: {
            host: "Host.Name",
            language: "Host.Language",
            date: "Host.Date",
            location: "Host.Location"
        },
        details: {
            host: "Host.Details.Name",
            language: "Host.Details.Language",
            date: "Host.Details.Date",
            location: "Host.Details.Location"
        }
    },
    social: {
        redbook: {
            name: "Media.Redbook.Name",
            intro: "Media.Redbook.Intro",
            details: "Media.Redbook.Details"
        },
        wechat: {
            name: "Media.Wechat.Name",
            intro: "Media.Wechat.Intro",
            details: "Media.Wechat.Details"
        },
        email: {
            name: "Media.Email.Name",
            intro: "Media.Email.Intro",
            details: "Media.Email.Details"
        }
    }
})

</script>

<template>
    <UContainer class="min-w-full">
        <!-- TODO 背景颜色 + 文字颜色 -->
        <span class="text-xl font-bold pt-10 pl-10">{{ $t(footeri18n.contact.title) }}</span>
        <div class="flex items-center justify-center min-h-28">
            <div class="flex">
                <div class="flex-1 items-center justify-center">
                    <ul>
                        <li v-for="item in footeri18n.contact.intro">
                            <span>{{ $t(item) }} : </span>
                        </li>
                    </ul>
                </div>
                <div class="flex-1 items-center justify-center">
                    <ul>
                        <li v-for=" item in footeri18n.contact.details">
                            <span>{{ $t(item) }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </UContainer>
</template>