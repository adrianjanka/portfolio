// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-11-01',
  // devtools: { enabled: true },

  ssr: false,

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon'
  ],

  css: [
    '~/assets/css/main.css',
    '~/assets/css/animations.css'
  ],

  app: {
    // Verwende eine Umgebungsvariable
    baseURL: process.env.BASE_URL,
    head: {
      title: 'Adrian Janka - Portfolio für Design, Multimedia & Webentwicklung',
      titleTemplate: '%s | Adrian Janka',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Portfolio von Adrian Janka - Mediamatiker und Student Multimedia Production aus Chur. Entdecke meine Projekte in Grafikdesign, Fotografie, Video und Webentwicklung.' 
        },
        // Social Media Meta Tags
        { property: 'og:title', content: 'Adrian Janka - Portfolio für Design, Multimedia & Webentwicklung' },
        { property: 'og:description', content: 'Mediamatiker und Multimedia Production Student aus Chur mit Fokus auf Grafikdesign, Fotografie und Webentwicklung' },
        { property: 'og:image', content: 'https://adrianjanka.ch/images/me.jpg' },
        { property: 'og:url', content: 'https://adrianjanka.ch' },
        { property: 'og:type', content: 'website' },
        // Erweiterte Keywords mit deinem Namen
        { name: 'keywords', content: 'Adrian Janka, Portfolio, Mediamatiker, Multimedia Production, Adrian Janka Chur, Grafikdesign, Fotografie, Webentwicklung, FH Graubünden, Adrian Janka Portfolio' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' 
        },
        // Canonical URL hinzufügen
        { rel: 'canonical', href: 'https://adrianjanka.ch' }
      ]
    }
  },

  // Stelle die Konfiguration dem Client zur Verfügung
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL
    }
  },


  // Optimale Einstellungen für SEO
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    } 
  },
  
  compatibilityDate: '2025-05-02'
})