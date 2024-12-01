<script setup lang="ts">
const route = useRoute()

interface BreadsItem {
    label: string,
    to: string,
}

const links = ref<Array<BreadsItem>>()

watch(() => route.matched, (newVal, oldVal) => {
    links.value = newVal.map((item) => {
        return {
            label: item.meta.title as string,
            to: item.path,
        }
    },
        { immediate: true }
    )
})

</script>

<template>
    <div>
        <UBreadcrumb divider=">" :links="links" />
    </div>
</template>