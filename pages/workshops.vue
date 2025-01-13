<script lang="ts" setup>

const posters = ref([
    {
        title: "Register.EduAI",
        subtitle: "Register.EduAIHost",
        path: "workshop/ws3-poster.png",
        to: "workshop/3"
    },
])

</script>

<template>
    <div class="w-full h-full mx-10 my-5 pt-24">
        <div
            class="h-full w-full max-w-6xl justify-self-center hidden md:block bg-white/80 justify-center items-center pb-4">

            <div class="text-2xl font-bold text-center my-5">
                <div class="flex justify-center items-center ">
                    <div class="h-0.5 w-20 bg-black"></div>
                    <h1 class="mx-4">{{ $t("Workshop Session") }}</h1>
                    <div class="h-0.5 w-20 bg-black"></div>
                </div>
            </div>

            <div id="container" class="text-lg px-20">
                <div v-html="$t('workshop page.description').replace(/\n/g, '<br>')"></div>

                <br>

                <div>
                    <div v-for="i in [1, 2, 3]">
                        <div class="font-bold text-xl my-2">
                            {{ $t("workshop page.workshop" + i + ".title") }}
                        </div>

                        <div v-html="$t('workshop page.workshop' + i + '.description').replace(/\n/g, '<br>')">
                        </div>

                        <div class="my-2 flex">
                            <span class="font-bold mr-4">Speaker: </span>
                            <div v-html="$t('workshop page.workshop' + i + '.speaker').replace(/\n/g, '<br>')"></div>
                        </div>

                        <div>
                            <div v-html="$t('workshop page.workshop' + i + '.slides')"></div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div class="md:hidden h-full w-full justify-self-center bg-white/80 justify-center items-center py-4">
            <div class="text-lg font-bold text-center my-5">
                <div class="flex justify-center items-center ">
                    <div class="h-0.5 w-20 bg-black"></div>
                    <h1 class="mx-4">{{ $t("Workshop") }} </h1>
                    <div class="h-0.5 w-20 bg-black"></div>
                </div>
            </div>

            <div class="min-w-screen">

                <div id="container" class="text-base px-10">
                    <div v-html="$t('workshop page.description').replace(/\n/g, '<br>')"></div>

                    <br>

                    <div>
                        <div v-for="i in [1, 2, 3]">
                            <div class="font-bold text-lg my-2">
                                {{ $t("workshop page.workshop" + i + ".title") }}
                            </div>

                            <div v-html="$t('workshop page.workshop' + i + '.description').replace(/\n/g, '<br>')">
                            </div>

                            <div class="my-2 flex">
                                <span class="font-bold mr-4">Speaker: </span>
                                <div v-html="$t('workshop page.workshop' + i + '.speaker').replace(/\n/g, '<br>')">
                                </div>
                            </div>

                            <div>
                                <div v-html="$t('workshop page.workshop' + i + '.slides')"></div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
:deep(#container) a:hover {
    color: #fb7185;
}

:deep(#container) a {
    text-decoration: none;
    /* 移除默认下划线 */
    border-bottom: 1px solid currentColor;
    /* 使用当前文字颜色作为下划线颜色 */
    padding-bottom: 1px;
    /* 可选：调整下划线与文字的距离 */
}
</style>
