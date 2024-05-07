// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 443,
    host: 'unilang.local',
    https: {
      key: './ssl/unilang.local-key.pem',
      cert: './ssl/unilang.local.pem',
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-lodash',
    "@nuxtjs/supabase"
  ],
  supabase: {
    redirect: false,
  },
  fonts: {
    families: [
      { name: 'Nunito Sans', provider: 'google' },
      { name: 'Poppins', provider: 'google' },
    ]
  },
  lodash: {
    prefix: '_'
  },
  image: {
    inject: true,
    format: ['webp']
  }
})