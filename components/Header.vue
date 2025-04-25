<template>
  <header class="hero" id="home" :style="{ backgroundImage: `url(${heroImage})` }">
    <div class="contact-info">
      <div class="contact-label">SAY HI</div>
      <div class="contact-links">
        <p><a class="mailto" href="mailto:adi.janka@bluewin.ch">adi.janka@bluewin.ch</a></p>
        <p><a class="mailto" target="_blank" href="https://www.instagram.com/adrian_janka">@adrian_janka</a></p>
      </div>
    </div>
    
    <div class="hero-content">
      <h1 :style="{ color: accentColor, fontFamily: currentFont }">Portfolio</h1>
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
  '/images/hero4.jpg',
  '/images/hero5.jpg'
];

const fonts = [
  "'Abril Fatface', cursive",
  "'Bodoni Moda', serif",
  "'Cinzel', serif",
  "'Yeseva One', cursive",
  "'Playfair Display', serif",
  "'Space Grotesk', sans-serif",
  "'Orbitron', sans-serif",
  "'Exo 2', sans-serif",
  "'Righteous', cursive",
  "'Blaka Hollow', cursive"
];

const colors = [
  '#f8e71c', // Gelb (ursprünglich)
  '#FF6B6B', // Rot
  '#4ECDC4', // Türkis
  '#7D5BA6', // Lila
  '#F5A623', // Orange
];

// State für statische Elemente (werden nur einmal gesetzt)
const heroImage = ref('');
const accentColor = ref('');

// State für animierte Elemente
const currentFont = ref(fonts[0]);
const fontIndex = ref(0);

// Zufälliges Element aus Array auswählen
const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

// CSS-Variablen für die Akzentfarbe aktualisieren
const updateAccentColor = (color) => {
  document.documentElement.style.setProperty('--primary-color', color);
};

// Schriftart-Animation
const animateFonts = () => {
  // Zum nächsten Font wechseln
  fontIndex.value = (fontIndex.value + 1) % fonts.length;
  currentFont.value = fonts[fontIndex.value];
  
  // Nächste Animation planen
  setTimeout(animateFonts, 1000); // Alle 1 Sekunde wechseln
};

onMounted(() => {
  // Einmalige Auswahl von Hintergrundbild und Farbe
  heroImage.value = getRandomElement(heroImages);
  accentColor.value = getRandomElement(colors);
  
  // Akzentfarbe aktualisieren
  updateAccentColor(accentColor.value);
  
  // Google Fonts laden
  document.head.insertAdjacentHTML(
  'beforeend',
  `<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:opsz@6..96&family=Cinzel&family=Playfair+Display&family=Yeseva+One&family=Space+Grotesk&family=Orbitron&family=Exo+2&family=Righteous&family=Blaka+Hollow&display=swap" rel="stylesheet">`
);
  
  // Schriftart-Animation starten (mit einer kurzen Verzögerung)
  setTimeout(animateFonts, 500);
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
}

.contact-info {
  position: absolute;
  top: 8rem;
  right: 2rem;
  color: white;
  z-index: 10;
  padding: 1.2rem;
  border-radius: 8px;
  text-align: right;
}

.contact-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  /* color: var(--primary-color); */
}

.contact-links p {
  margin: 0.3rem 0;
  text-align: right;
}

.mailto {
  color: white;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
}

.mailto:hover {
  text-decoration: underline;
  color: var(--primary-color);
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
  transition: font-family 1s ease;
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

/* Responsive Styles */
@media (max-width: 992px) {
  h1 {
    font-size: 5rem;
  }
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
    position: fixed;
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.8rem 1rem;
  }

  .contact-label {
    margin-bottom: 0;
  }
  
  .contact-links {
    display: flex;
    gap: 1.5rem;
  }

  .contact-links p {
    margin: 0;
    text-align: left;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 3rem;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: center;
    padding: 0.6rem 1rem;
  }
  
  .contact-label {
    margin-bottom: 0.3rem;
  }
  
  .contact-links {
    flex-direction: column;
    gap: 0.3rem;
    align-items: center;
  }
}
</style>