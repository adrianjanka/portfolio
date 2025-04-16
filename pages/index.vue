<template>
  <div>
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
// import Contact from '~/components/Contact.vue';
</script>

<style>
/* Globale Stile können hier hinzugefügt werden */
</style>