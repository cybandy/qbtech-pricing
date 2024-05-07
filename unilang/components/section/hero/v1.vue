<script setup lang='ts'>
import type { Button } from "#ui/types"
defineProps({
    title: String,
    description: String,
    links: {
        type: Array<Button>,
        default: []
    }
})
</script>

<template>
    <div class="section">
        <div class="flex flex-col gap-8 sm:gap-y-16">
            <div class="flex flex-col items-center text-center">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">{{
                    title }}</h1>
                <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">{{ description }}</p>

                <div v-if="links.length > 0" class="mt-8 flex flex-wrap gap-x-3 gap-y-1 5 justify-center">
                    <UButton v-for="item of links" v-bind="item" />
                </div>
            </div>

            <slot />
        </div>
    </div>
</template>