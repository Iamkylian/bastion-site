// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: 'app',

  app: {
    baseURL: '/bastion-site/',
    head: {
      title: 'Bastion',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        {
          defer: true,
          src: 'https://cloud.umami.is/script.js',
          'data-website-id': '0661da96-0120-443f-b7bc-6f1176aedbbd'
        }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss'],

  components: [
    {
      path: '~/components/layout',
      pathPrefix: false
    },
    {
      path: '~/components/sections',
      pathPrefix: false
    }
  ],

  nitro: {
    preset: 'github_pages'
  }
})
