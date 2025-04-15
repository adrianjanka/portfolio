<template>
  <div>
    <Navbar />
    
    <!-- Hero Section mit großem Bild und Text -->
    <section class="hero" id="home">
      <div class="hero-content">
        <h1>Portfolio</h1>
        <div class="hero-info">
          <h2>ADRIAN JANKA</h2>
          <div class="contact-info">
            <p>SAY HI</p>
            <p>adi.janka@bluewin.ch</p>
            <p>@adrian_janka</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Themenblöcke -->
    <AboutMe />
    <Skills />
    <AnalogImages />
    <GraphicDesign />
    <Projects />
    <Videos />
    <Contact />
  </div>
</template>

<script setup>
// Komponenten importieren
import Navbar from '~/components/Navbar.vue';
import AboutMe from '~/components/AboutMe.vue';
import Skills from '~/components/Skills.vue';
import AnalogImages from '~/components/AnalogImages.vue';
import GraphicDesign from '~/components/GraphicDesign.vue';
import Projects from '~/components/Projects.vue';
import Videos from '~/components/Videos.vue';
import Contact from '~/components/Contact.vue';
</script>

<style scoped>
.hero {
  height: 100vh;
  background-image: url('/images/hero-background.jpg'); /* Platzhalter - du musst das richtige Bild einsetzen */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #f8e71c; /* Gelbe Linie wie in deinem Design */
}

.hero-content {
  padding: 2rem;
}

h1 {
  font-size: 6rem;
  color: #f8e71c; /* Gelb wie in deinem Design */
  margin-bottom: 2rem;
  text-align: center;
}

.hero-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
}

h2 {
  font-size: 1.5rem;
}

.contact-info {
  text-align: right;
}

.contact-info p {
  margin: 0.2rem 0;
}

@media (max-width: 768px) {
  h1 {
    font-size: 4rem;
  }
  
  .hero-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-info {
    text-align: left;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 3rem;
  }
}
</style>