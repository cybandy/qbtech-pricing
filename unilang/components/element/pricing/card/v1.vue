<script setup lang='ts'>
import type { Badge, Button } from "#ui/types"
const props = defineProps({
    title: {
        type: String,
        default: 'Basic'
    },
    description: {
        type: String,
        default: 'Best for personal use'
    },
    cycle: {
        type: String,
    },
    price: {
        type: Number || String,

    },
    highlight: Boolean,
    badge: Object as PropType<Badge>,
    features: Array<string>,
    button: {
        type: Object as PropType<Button>,

    },
    align: {
        type: String as PropType<'top' | 'bottom'>,
        default: 'top'
    },
    discount: {
        type: Number || String
    }
})

const emits = defineEmits(['selected'])
</script>

<template>
    <div
        class="divide-y divide-gray-200 dark:divide-gray-800 shadow bg-white dark:bg-gray-900 relative flex flex-col self-stretch w-full">
        <div class="flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col sm:p-6 p-6 lg:p-8 xl:p-10 rounded-xl"
            :class="[highlight ? 'ring-2 ring-primary dark:ring-primary' : 'ring-1 ring-gray-200 dark:ring-gray-800']">
            <div>
                <div class="flex items-center gap-3">
                    <p class="text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate">{{ title }}</p>
                    <UBadge v-if="badge" v-bind="badge" />
                </div>
                <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">{{ description }}</p>
            </div>

            <div v-if="price" class="flex flex-row items-baseline gap-x-1">
                <p :class="[discount ? 'line-through text-xl sm:text-2xl font-medium' : 'text-2xl sm:text-4xl']"
                    class="text-gray-900 dark:text-white font-semibold">
                    <template v-if="typeof price === 'number'">
                        {{ usePricing(price) }}
                    </template>
                    <template v-else>
                        {{ price }}
                    </template>
                </p>
                <p class="text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold">
                    <template v-if="typeof discount === 'number'">
                        {{ usePricing(discount) }}
                    </template>
                    <template v-else>
                        {{ discount }}
                    </template>
                </p>
                <p v-if="cycle"
                    class="text-gray-500 dark:text-text-gray-400 text-sm/6 sm:text-4xl font-medium truncate">{{ cycle }}
                </p>
            </div>

            <div :class="align == 'top' ? 'order-last' : ''">
                <ul class="space-y-3">
                    <ElementPricingFeatureRow v-for="item of features" :label="item" is="li"
                        icon="i-heroicons-check-circle-20-solid" />
                </ul>
            </div>

            <div v-if="button">
                <UButton @click="emits('selected', props)" v-bind="button" block />
            </div>
        </div>
    </div>
</template>