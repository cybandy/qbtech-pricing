import { defineStore } from 'pinia'

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
  actions: {}
})
