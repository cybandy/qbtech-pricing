<script setup lang='ts'>

const { questions: state } = storeToRefs(usePricingFormStore())
</script>

<template>
    <form class="grid gap-5 w-full">
        <UFormGroup v-for="(question, ind) of state" :label="question.label">
            <UInput v-if="question.type == 'short'" v-model="state[ind].value" />
            <UTextarea v-if="question.type == 'long'" v-model="state[ind].value" />
        </UFormGroup>
    </form>
</template>