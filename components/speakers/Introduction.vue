<script setup lang="ts">
import type { Speaker } from '~/lib/model';

const props = defineProps<{
    speakers: Speaker
}>()
</script>

<template>
    <UCard>
        <template #header>
            {{ props.speakers.bio.details.title }}
        </template>

        <div>
            <UAvatar :src="props.speakers.photo" icon="i-heroicons-photo"></UAvatar>
            <div class="font-bold">
                {{ props.speakers.name }}
            </div>
            <div>
                {{ props.speakers.bio.details.description }}
            </div>
        </div>

        <template #footer>
            <ULink :to="props.speakers.bio.details.link">Details</ULink>
        </template>

    </UCard>
</template>