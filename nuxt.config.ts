// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
 devtools: {
    enabled: true // or false to disable
  },
  app: {
    head: {
      title: 'CoffeeX',

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: process.env.NUXT_PUBLIC_META_KEYWORDS },
        { property: 'og:type', content: 'website' },
        { name: 'description', content: 'We serve the best Coffee' },
      ],
    },
  },
  
  router: {
    options: {
      strict: true,
    },
  },
 
  runtimeConfig: {
    apiUrl: process.env.NUXT_PUBLIC_API_URL,

    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      cdnURL: process.env.NUXT_PUBLIC_CDN_URL,
      productImgURL: process.env.NUXT_PRODUCT_IMAGE_URL,
      menuImgURL: process.env.NUXT_MENU_IMAGE_URL,
    },
  },

  css: ['~/assets/css/index.css'],

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    // ['nuxt-stripe-module', {
    //   publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx'
    // }],
    'nuxt-mdi',
    '@unlok-co/nuxt-stripe',
    
  ],

})