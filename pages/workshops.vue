<script lang="ts" setup>

definePageMeta({
    keepalive: true,
})

const { t } = useI18n()

const router = useRouter();

const posters = ref([
    {
        title: "Register.EduAI",
        subtitle: "Register.EduAIHost",
        path: "workshop/ws3-poster.png",
        to: "workshop/3"
    }
])

const jump = (link: string) => {
    if (link === "-1")
        return;
    if (!link.startsWith('/')) {
        link = '/' + link
    }
    router.push(link)
}


</script>

<template>
    <div class="w-full h-full mx-10 my-5 pt-24">
        <div
            class="h-full w-full max-w-6xl justify-self-center hidden md:block bg-white/80 justify-center items-center">

            <div class="text-2xl font-bold text-center my-5">
                <div class="flex justify-center items-center ">
                    <div class="h-0.5 w-20 bg-black"></div>
                    <h1 class="mx-4">{{ $t("Workshop") }} </h1>
                    <div class="h-0.5 w-20 bg-black"></div>
                </div>
            </div>

            <div class="flex">
                <div v-for="poster in posters" class="w-full h-full flex-1">
                    <div class="block w-3/5 h-3/5">
                        <div>

                        </div>
                        <NuxtImg :src="poster.path" class="w-full justify-center"></NuxtImg>
                        <div class="grid-cols-2 grid gap-14">
                            <div class="font-semibold text-black ">
                                <div class="justify-start text-start">
                                    {{ $t(poster.title) }}
                                </div>
                                <div class="justify-end text-end">
                                    {{ $t(poster.subtitle) }}
                                </div>
                            </div>
                            <div
                                class="font-semibold text-white bg-green-800 hover:bg-green-600 text-center p-2 h-fit  w-4/5">
                                <ULink :to="poster.to">
                                    {{ $t("About Us.EduHK.link") }}
                                </ULink>
                                <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
