<script setup lang="ts">
import MaTabs from '~/components/maProgram/MaTabs.vue';

</script>
<template>
    <div class="w-full h-full mx-10 my-5 pt-24 min-h-full md:max-w-6xl max-xl:max-w-8xl">
        <div
            class="min-h-screen w-full max-w-8xl px-6 md:px-0 justify-self-center bg-white/80 justify-center items-center">
            <!-- 标题 -->
            <div class="font-bold text-3xl px-10 pt-16 text-orange-700/90">
                <!-- TODO: 2026年内容待更新 - 确认MA项目标题是否需要更新 -->
                <span> {{ $t("About Us.New MA Program.title") }}</span>
            </div>
            <!-- 表单 -->
            <div class="w-full px-10 mt-5">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:divide-x lg:divide-x divide-y md:divide-y-0 lg:divide-y-0 gap-1 shadow-lg justify-self-center">
                    <div class="px-4">
                        <div class="font-bold md:text-2xl text-xl ">
                            {{ $t("About Us.New MA Program.Programme Leader.title") }}
                        </div>
                        <div class="text-gray-700/85 my-4 md:text-lg text-sm">
                            <!-- TODO: 2026年内容待更新 - 确认项目负责人信息 -->
                            {{ $t("About Us.New MA Program.Programme Leader.name") }}
                        </div>
                    </div>
                    <div class="px-4">
                        <div class="font-bold md:text-2xl text-xl ">
                            {{ $t("About Us.New MA Program.Associate Programme Leader.title") }}
                        </div>
                        <div class="text-gray-700/85 my-4 md:text-lg text-sm">
                            <!-- TODO: 2026年内容待更新 - 确认副项目负责人信息 -->
                            {{ $t("About Us.New MA Program.Associate Programme Leader.name") }}
                        </div>
                    </div>
                    <div class="px-4">
                        <div class="font-bold md:text-2xl text-xl ">
                            {{ $t("About Us.New MA Program.Funding.title") }}
                        </div>
                        <div class="text-gray-700/85 my-4 md:text-lg text-sm">
                            <!-- TODO: 2026年内容待更新 - 确认资助金额信息 -->
                            {{ $t("About Us.New MA Program.Funding.amount") }}
                        </div>
                    </div>
                    <div class="px-4">
                        <div class="font-bold md:text-2xl text-xl ">
                            {{ $t("About Us.New MA Program.Enquiry.title") }}
                        </div>
                        <div
class="text-gray-700/85 my-4 md:text-lg text-sm"
                            v-html="$t('About Us.New MA Program.Enquiry.content')"/>
                    </div>
                </div>
            </div>
            <!-- 详细信息 -->
            <div class="w-full px-10 my-5">
                <!-- TODO: 2026年内容待更新 - 确认MaTabs组件内容是否需要更新 -->
                <MaTabs />
            </div>

            <!-- Disclaimer -->
            <div class="text-sm italic px-10 my-5">
                <!-- TODO: 2026年内容待更新 - 确认免责声明内容 -->
                <div v-html="$t('About Us.New MA Program.Disclaimer')"/>
            </div>
        </div>
    </div>
</template>