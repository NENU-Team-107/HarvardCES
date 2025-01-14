<script lang="ts" setup>

</script>

<template>
    <div class="w-full h-full mx-10 my-5 pt-24">
        <div
            class="h-full w-full max-w-6xl justify-self-center hidden md:block bg-white/80 justify-center items-center pb-4">

            <div class="text-2xl font-bold text-center my-5">
                <div class="flex justify-center items-center ">
                    <div class="h-0.5 w-20 bg-black"></div>
                    <h1 class="mx-4">{{ $t("Workshop") }}</h1>
                    <div class="h-0.5 w-20 bg-black"></div>
                </div>
            </div>

            <div class="my-5 font-bold text-lg px-5 text-rose-600 text-center">
                <span>
                    <i>
                        {{ $t("workshop page.comment") }}
                    </i>
                </span>
            </div>

            <div class="px-10 text-lg">
                <div class="font-semibold text-xl mx-auto">
                    <div v-html="$t('workshop page.reg1')"></div>
                </div>
                <br>
                <ul class="list-disc">
                    <li>
                        <span v-html="$t('workshop page.reg-eduhk')"></span>
                    </li>
                    <li>
                        <span v-html="$t('workshop page.reg-nonlocal')"></span>
                    </li>
                </ul>
                <br>
                <span v-html="$t('workshop page.reg-link')">
                </span>
            </div>

            <div id="container" class="text-lg px-20">

                <div>
                    <div v-for="i in [1, 2, 3]">

                        <div class="text-2xl font-bold text-center my-5">
                            <div class="flex justify-center items-center ">
                                <div class="h-0.5 w-20 bg-black"></div>
                                <h1 class="mx-4">{{ $t("Workshop") + " " + i }} </h1>
                                <div class="h-0.5 w-20 bg-black"></div>
                            </div>
                        </div>

                        <div class="text-xl font-bold text-center my-4">
                            {{ $t("workshop page.workshop" + i + ".title") }}
                        </div>

                        <div class="flex">
                            <div class="font-bold mr-2 w-1/5">
                                {{ $t("workshop page.description") }}
                            </div>
                            <div>
                                {{ $t('workshop page.workshop' + i + '.description') }}
                            </div>
                        </div>

                        <div class="flex">
                            <div class="font-bold mr-2 w-1/5">
                                {{ $t("workshop page.takeaways") }}
                            </div>
                            <div>
                                {{ $t('workshop page.workshop' + i + '.takeaways') }}
                            </div>
                        </div>

                        <div class="my-2 flex">
                            <div class="font-bold mr-4">
                                {{ $t("workshop page.Speakers") }}
                            </div>
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
        <div class="md:hidden h-full w-full justify-self-center bg-white/80 justify-center items-center py-4">
            <div class="min-w-screen">

                <div class="text-lg font-bold text-center my-5">
                    <div class="flex justify-center items-center ">
                        <div class="h-0.5 w-20 bg-black"></div>
                        <h1 class="mx-4">{{ $t("Workshop") }}</h1>
                        <div class="h-0.5 w-20 bg-black"></div>
                    </div>
                </div>

                <div class="my-5 font-bold text-sm px-5 text-rose-600 text-center">
                    <span>
                        <i>
                            {{ $t("workshop page.comment") }}
                        </i>
                    </span>
                </div>

                <div class="px-10">
                    <div class="font-semibold text-lg mx-auto">
                        <div v-html="$t('workshop page.reg1')"></div>
                    </div>
                    <br>
                    <ul class="list-disc">
                        <li>
                            <span v-html="$t('workshop page.reg-eduhk')"></span>
                        </li>
                        <li>
                            <span v-html="$t('workshop page.reg-nonlocal')"></span>
                        </li>
                    </ul>
                    <br>
                    <span v-html="$t('workshop page.reg-link')">
                    </span>
                </div>

                <div id="container" class="text-base px-20">

                    <div>
                        <div v-for="i in [1, 2, 3]">

                            <div class="text-lg font-bold text-center my-5">
                                <div class="flex justify-center items-center ">
                                    <div class="h-0.5 w-20 bg-black"></div>
                                    <h1 class="mx-4">{{ $t("Workshop") + " " + i }} </h1>
                                    <div class="h-0.5 w-20 bg-black"></div>
                                </div>
                            </div>

                            <div class="font-bold text-center my-4">
                                {{ $t("workshop page.workshop" + i + ".title") }}
                            </div>

                            <div class="flex">
                                <div class="font-bold mr-2 w-1/5">
                                    {{ $t("workshop page.description") }}
                                </div>
                                <div>
                                    {{ $t('workshop page.workshop' + i + '.description') }}
                                </div>
                            </div>

                            <div class="flex">
                                <div class="font-bold mr-2 w-1/5">
                                    {{ $t("workshop page.takeaways") }}
                                </div>
                                <div>
                                    {{ $t('workshop page.workshop' + i + '.takeaways') }}
                                </div>
                            </div>

                            <div class="my-2 flex">
                                <div class="font-bold mr-4">
                                    {{ $t("workshop page.Speakers") }}
                                </div>
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
:deep(#container) a {
    color: rgb(24, 107, 231);
}
</style>
