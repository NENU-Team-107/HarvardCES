<script setup lang="ts">
const route = useRoute()

const wsID = ref(Number.parseInt(route.params.id as string))

const fileURL = ref("/workshop/ws" + wsID.value + ".pdf")

</script>


<template>
    <div class="w-full h-full mx-10 pt-32 pb-4">
        <div class="w-4/5 h-screen justify-self-center">
            <iframe width="100%" height="100%" :src="fileURL"></iframe>
        </div>
    </div>
</template>