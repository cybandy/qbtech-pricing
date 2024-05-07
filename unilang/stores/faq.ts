import { defineStore } from 'pinia'

export const useFaqStore = defineStore({
  id: 'FaqStore',
  state: () => ({
    faqs: [
      {
        label: 'Is any of the plans customizable?',
        content: 'Yes. All the plans are generic standards and will be tailored to suit your business goals.'
      },
      {
        label: 'Is the price the same even after customizing the selected plan?',
        content: 'It depends on the additional changes that were made to the plan.'
      },
      {
        label: 'How long will it take to complete the work?',
        content: 'Every project is unique and a detailed timeline and milestones projection will be finalized and agreed on before the project will start.'
      },
      {
        label: 'Can I make any further alterations after the project has begun?',
        content: 'Yes. Further changes can be made at an additional cost. Our team will send you the quote upon request.'
      },
      {
        label: 'What is the next step?',
        content: 'We will contact you upon receiving your request and take it from there.'
      },
      {
        label: 'Is project completion guaranteed?',
        content: 'Yes. We are bounded by the legal contract signed by both parties to ensure completion of every project.'
      },
    ]
  }),
  actions: {}
})
