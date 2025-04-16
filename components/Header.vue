<template>
  <header class="hero" id="home" :style="{ backgroundImage: `url(${currentHeroImage})` }">
    <div class="hero-content">
      <h1 :style="{ color: currentColor, fontFamily: currentFont }">Portfolio</h1>
      <div class="hero-info">
        <h2>ADRIAN JANKA</h2>
        <div class="contact-info">
          <p>SAY HI</p>
          <p>adi.janka@bluewin.ch</p>
          <p>@adrian_janka</p>
        </div>
      </div>
    </div>
    <div class="logo-container">
      <img :src="currentLogo" alt="Logo" class="header-logo" />
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

// Vordefinierte Optionen
const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/api/placeholder/1920/1080?text=Hero+4',
  '/api/placeholder/1920/1080?text=Hero+5',
];

const logos = [
  '/images/logo1.png',
  '/api/placeholder/100/100?text=Logo+2',
  '/api/placeholder/100/100?text=Logo+3',
  '/api/placeholder/100/100?text=Logo+4',
  '/api/placeholder/100/100?text=Logo+5',
];

const fonts = [
  "'Inter', sans-serif",
  "'Playfair Display', serif",
  "'Montserrat', sans-serif",
  "'Roboto Slab', serif",
  "'Poppins', sans-serif",
];

const colors = [
  '#f8e71c', // Gelb (ursprünglich)
  '#FF6B6B', // Rot
  '#4ECDC4', // Türkis
  '#7D5BA6', // Lila
  '#50E3C2', // Mint
];

// State für aktuelle Elemente
const currentHeroImage = ref(heroImages[0]);
const currentLogo = ref(logos[0]);
const currentFont = ref(fonts[0]);
const currentColor = ref(colors[0]);

// Index für den aktuellen Animationsschritt
const currentStep = ref(0);
const totalSteps = 5;

// CSS-Variable für die Akzentfarbe aktualisieren
const updateAccentColor = (color) => {
  document.documentElement.style.setProperty('--primary-color', color);
};

// Zufälliges Element aus Array auswählen
const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

// Animation starten
onMounted(() => {
  let step = 0;
  const interval = setInterval(() => {
    currentHeroImage.value = getRandomElement(heroImages);
    currentLogo.value = getRandomElement(logos);
    currentFont.value = getRandomElement(fonts);
    currentColor.value = getRandomElement(colors);
    
    // Akzentfarbe aktualisieren
    updateAccentColor(currentColor.value);
    
    step++;
    if (step >= totalSteps) {
      clearInterval(interval);
    }
  }, 1000);
});
</script>

<style scoped>
.hero {
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: background-image 0.5s ease;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: var(--primary-color);
  transition: background-color 0.5s ease;
}

.hero-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

h1 {
  font-size: 6rem;
  margin-bottom: 2rem;
  transition: color 0.5s ease, font-family 0.5s ease;
}

.hero-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
}

.contact-info {
  text-align: right;
}

.contact-info p {
  margin: 0.2rem 0;
}

.logo-container {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.header-logo {
  width: 80px;
  height: 80px;
  transition: all 0.5s ease;
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