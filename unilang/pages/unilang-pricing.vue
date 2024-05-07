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

const sendData = async () => {
    const res = await usePricingFormStore().saveForm()

    if (res.state) {
        useToastSuccess('You will hear from us soon')
        showPricingForm.value = false
        usePricingFormStore().$reset()
        pricingStore.$reset()
        navigateTo('/thank-you')
    }

}

const faqStore = useFaqStore()
const { faqs } = storeToRefs(faqStore)
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

        <SectionHeroV2 title="Frequently Asked Questions" description="Below are common questions and answers.">

            <UAccordion :items="faqs" multiple :ui="{ item: { padding: 'px-3' } }">

                <template #default="{ item, index, open }">
                    <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700"
                        :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }">

                        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

                        <template #trailing>
                            <UIcon name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                                :class="[open && 'rotate-90']" />
                        </template>
                    </UButton>
                </template>
            </UAccordion>
        </SectionHeroV2>

        <ModalTitleButton @send="sendData" v-model="showPricingForm" title="Questionnaire"
            button-confirm-label="Submit">

            <FormPricingFormV1 />

        </ModalTitleButton>
    </UContainer>
</template>