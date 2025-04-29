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
          name: 'description', 
          content: 'Portfolio von Adrian Janka - Mediamatiker und Student Multimedia Production aus Chur. Entdecke meine Projekte in Grafikdesign, Fotografie, Video und Webentwicklung.' 
        },
        // Social Media Meta Tags
        { property: 'og:title', content: 'Adrian Janka - Portfolio' },
        { property: 'og:description', content: 'Mediamatiker und Multimedia Production Student aus Chur mit Fokus auf Grafikdesign, Fotografie und Webentwicklung' },
        { property: 'og:image', content: 'https://adrianjanka.ch/images/og-image.jpg' },
        { property: 'og:url', content: 'https://adrianjanka.ch' },
        { property: 'og:type', content: 'website' },
        // Keywords
        { name: 'keywords', content: 'Adrian Janka, Portfolio, Mediamatiker, Multimedia Production, Chur, Grafikdesign, Fotografie, Webentwicklung, FH Graubünden' }
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