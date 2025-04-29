// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon'
  ],
  
  css: [
    '@/assets/css/animations.css',
    '~/assets/css/main.css'
  ],
  
  app: {
    head: {
      title: 'Adrian Janka - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          // hid: 'description',
          name: 'description', 
          content: 'Portfolio von Adrian Janka - Graphic Design, Projekte und mehr' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' 
        }
      ]
    }
  }
})