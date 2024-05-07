<script setup lang='ts'>
definePageMeta({
    layout: 'general'
})
useHead({
    title: 'Unilang Pricing'
})

const additionalInfo = [
    'Domain and/or hosting',
    'Database or database as a service',
    'Storage for saving pictures and files',
]

const pricingStore = usePricingStore()
const { plans } = storeToRefs(pricingStore)

const selectedInd = ref(0)
const showPricingForm = ref(false)
function selectedPlanFunc(data: any) {

    pricingStore.selectById(selectedInd.value)
    showPricingForm.value = true
}
</script>

<template>
    <UContainer>

        <SectionHeroV1 title="Transparent Pricing For Every Business"
            description="Choose the perfect plan for your business needs. All plans are customizable" />
        <div class="section">
            <ElementPricingGrid>
                <ElementPricingCardV1 v-for="(item, ind) of plans" v-bind="item" :button="{ label: 'Get Started' }"
                    @selected="((d: any) => { selectedInd = ind; selectedPlanFunc(d); })" />
            </ElementPricingGrid>
        </div>

        <SectionHeroV2 title="Additional Tools & Services" description="Upon further discussion, the ff tools and services will be decided upon depending on the project and
                    client
                    requirement, and the cost related to it will be bore by solely the client.">

            <ElementPricingCardV1 :features="additionalInfo" title="General" cycle="" :price="0" description="" />
        </SectionHeroV2>

        <ModalTitleButton v-model="showPricingForm" title="Questionnaire" button-confirm-label="Submit">

            <FormPricingFormV1 />

        </ModalTitleButton>
    </UContainer>
</template>