import { defineStore } from 'pinia'
import type { Badge } from "#ui/types"

export const usePricingStore = defineStore({
  id: 'PricingStore',
  state: () => ({
    overview: 'Pages,',
    plans: [
      {
        title: 'Basic',
        price: 259,
        description: 'Best for personal use',
        features: [
          'Single Page Application (1 page)',
          'Page Design',
          'Theme (light only)',
          'English only',
        ]
      },
      {
        title: 'Standard',
        price: 559,
        description: 'Best for small businesses',
        features: [
          '5 pages',
          'All Page Design',
          'Theme (light only)',
          'English only',
          'Basic Google SEO',
          'Basic Security'
        ]
      },
      {
        title: 'Premium',
        price: 1099,
        discount: 799,
        highlight: true,
        badge: { label: 'Popular', variant: 'subtle' } as Badge,
        description: 'Best for educational, e-commerce and medium size businesses',
        features: [
          '10-30 pages',
          'All Page Design',
          'Theme (light & dark)',
          '2 languages(English and Thai)',
          'SEO: Google, Bing, and Yandex SEO',
          'Full Security',
          'GDPR Compliance Worldwide'
        ]
      },
      {
        title: 'Enterprise',
        price: 'Custom',
        description: 'Best for big organizations',
        features: [
          'Unlimited Pages',
          'All Page Design with components',
          'Theme (light & dark)',
          '3+ languages(English and others)',
          'SEO: Google, Bing, and Yandex SEO',
          'Full Security',
          'GDPR Compliance Worldwide',
          'Privacy Policy',
          'Third Party integrations',
          '99% uptime SLA'
        ]
      },
    ],
    selectedPlan: {} as any
  }),
  actions: {
    selectById(id: number) {
      this.selectedPlan = this.plans[id]
    }
  }
})
