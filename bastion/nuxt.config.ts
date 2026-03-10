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
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/bastion-site/favicon.ico' }
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
