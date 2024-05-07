<script setup lang='ts'>
defineProps({
    icon: {
        type: String,
        default: 'i-heroicons-check-20-solid'
    },
    label: {
        type: String,
        default: 'What you get'
    },
    is: {
        type: String,
        default: 'div'
    }
})
</script>

<template>
    <component :is="is" class="flex items-center gap-x-3 min-w-0">
        <UIcon :name="icon" class="w-5 h-5 text-primary" />
        <span class="text-sm text-gray-600 dark:text-gray-400">
            <slot>{{ label }}</slot>
        </span>
    </component>
</template>