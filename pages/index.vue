<template>
  <div>
    <!-- SEO Meta-Tags für diese Seite -->
    <PageMeta 
      title="Adrian Janka - Portfolio für Design, Multimedia & Entwicklung" 
      description="Portfolio von Adrian Janka - Mediamatiker und Student Multimedia Production aus Chur. Erfahre mehr über meine Projekte in Grafikdesign, Fotografie und Webentwicklung."
      image="/images/me.jpg"
    />
    
    <Navbar />
    
    <!-- Hero Section -->
    <Header />

    <!-- Hauptinhalt -->
    <AboutMe />
    <Skills />
    <AnalogImages />
    <GraphicDesign />
    <Projects />
    <Videos />
    <!-- <Contact /> -->
    
    <!-- Strukturierte Daten mit Schema.org -->
    
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
import Header from '~/components/Header.vue';
import AboutMe from '~/components/AboutMe.vue';
import Skills from '~/components/Skills.vue';
import AnalogImages from '~/components/AnalogImages.vue';
import GraphicDesign from '~/components/GraphicDesign.vue';
import Projects from '~/components/Projects.vue';
import Videos from '~/components/Videos.vue';
import PageMeta from '~/components/PageMeta.vue';
// import Contact from '~/components/Contact.vue';
</script>

<style>
/* Globale Stile können hier hinzugefügt werden */
</style>