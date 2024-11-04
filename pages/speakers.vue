<script lang="ts" setup>
definePageMeta({
    layout: 'details',
})
</script>

<template>
    <div>
        <NuxtPage />
        这里是嘉宾的显示（需要显示全部的）
        <div>
            <!-- TODO 左侧为一个菜单栏，选择嘉宾的种类，一共有如下几种： -->

            Invite Speakers

            Guest of Honor

            Keynote Speakers

            Track Workshop Chair 0508-0510

            Organizing Committee

            <!-- TODO 通过选择种类进行切换，这里在 model.ts 中 Speaker 的 kind 可以用来区分 -->
        </div>
    </div>
</template>