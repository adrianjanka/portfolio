<template>
  <header class="hero" id="home" :style="{ backgroundImage: `url(${currentHeroImage})` }">
    <div class="contact-info">
      <p>SAY HI</p>
      <p>adi.janka@bluewin.ch</p>
      <p>@adrian_janka</p>
    </div>
    
    <div class="hero-content">
      <h1 :style="{ color: currentColor, fontFamily: currentFont }">Portfolio</h1>
      <div class="hero-info">
        <h2>ADRIAN JANKA</h2>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Vordefinierte Optionen
const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/api/placeholder/1920/1080?text=Hero+4',
  '/api/placeholder/1920/1080?text=Hero+5',
];

const fonts = [
  "'Abril Fatface', cursive",
  "'Bodoni Moda', serif",
  "'Cinzel', serif",
  "'Yeseva One', cursive",
  "'Playfair Display', serif",
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
const currentFont = ref(fonts[0]);
const currentColor = ref(colors[0]);

// CSS-Variablen für die Akzentfarbe aktualisieren
const updateAccentColor = (color) => {
  document.documentElement.style.setProperty('--primary-color', color);
};

// Zufälliges Element aus Array auswählen, ohne das aktuelle zu wiederholen
const getRandomElement = (array, current) => {
  const filteredArray = array.filter(item => item !== current);
  const index = Math.floor(Math.random() * filteredArray.length);
  return filteredArray[index];
};

// Animation starten
onMounted(() => {
  let step = 0;
  
  // Direkt beim Start Schriftarten und Farben setzen
  document.head.insertAdjacentHTML(
    'beforeend',
    `<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:opsz@6..96&family=Cinzel&family=Playfair+Display&family=Yeseva+One&display=swap" rel="stylesheet">`
  );
  
  // Initialen Zustand setzen
  updateAccentColor(currentColor.value);
  
  const interval = setInterval(() => {
    // Neues Bild, Schriftart und Farbe auswählen (ohne Wiederholung)
    currentHeroImage.value = getRandomElement(heroImages, currentHeroImage.value);
    currentFont.value = getRandomElement(fonts, currentFont.value);
    currentColor.value = getRandomElement(colors, currentColor.value);
    
    // Akzentfarbe aktualisieren
    updateAccentColor(currentColor.value);
    
    step++;
    if (step >= 4) { // Nach 5 Schritten stoppen (Start + 4 Änderungen)
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

.contact-info {
  position: absolute;
  top: 2rem;
  right: 2rem;
  text-align: right;
  color: white;
  z-index: 10;
}

.contact-info p {
  margin: 0.2rem 0;
  font-weight: 500;
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
    left: 2rem;
    right: auto;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 3rem;
  }
}
</style>