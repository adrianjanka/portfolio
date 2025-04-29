<template>
    <!-- Diese Komponente ist unsichtbar und dient nur zum Setzen von Meta-Tags -->
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'Adrian Janka - Portfolio'
    },
    description: {
      type: String,
      default: 'Portfolio von Adrian Janka - Mediamatiker und Student Multimedia Production aus Chur'
    },
    image: {
      type: String,
      default: '/images/og-image.jpg'
    },
    url: {
      type: String,
      default: ''
    }
  });
  
  // Generiere die vollständige URL
  const config = useRuntimeConfig();
  const route = useRoute();
  const fullUrl = props.url || `https://adrianjanka.ch${route.path}`;
  
  // Meta-Tags dynamisch setzen
  useHead({
    title: props.title,
    meta: [
      { name: 'description', content: props.description },
      // Open Graph
      { property: 'og:title', content: props.title },
      { property: 'og:description', content: props.description },
      { property: 'og:image', content: props.image.startsWith('http') ? props.image : `https://deinewebseite.ch${props.image}` },
      { property: 'og:url', content: fullUrl }
    ],
    link: [
      { rel: 'canonical', href: fullUrl }
    ]
  });
  </script>