import { defineStore } from 'pinia'
import type { Database } from '~/types/supabase'

export const usePricingFormStore = defineStore({
  id: 'PricingFormStore',
  state: () => ({
    questions: [
      {
        label: 'Tell us your name',
        value: '',
        type: 'short'
      },
      {
        label: 'E-mail',
        value: '',
        type: 'short'
      },
      {
        label: 'What do you need that was not in the selected package?',
        value: '',
        type: 'long'
      },
      {
        label: 'Ask us anything',
        value: '',
        type: 'long'
      },
    ]
  }),
  actions: {
    async saveForm() {
      const client = useSupabaseClient<Database>()

      const pricingStore = usePricingStore()
      // console.log(pricingStore.selectedPlan);
      // console.log(this.questions);

      const { data, error } = await client.from('pricingForm').insert({
        name: this.questions[0].value,
        email: this.questions[1].value,
        needs: this.questions[2].value,
        questions: this.questions[3].value,
        plan: {
          price: pricingStore.selectedPlan.price,
          title: pricingStore.selectedPlan.title,
          features: pricingStore.selectedPlan.features,
          description: pricingStore.selectedPlan.description
        }
      }).select()

      if (data) {
        // console.log(data);

        return {
          state: true,
          data: data
        }
      } else {
        return {
          state: false,
          data: {}
        }
      }
    }
  }
})
