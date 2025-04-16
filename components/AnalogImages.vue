<template>
  <section id="analog" class="section">
    <h2>Bilder Analog</h2>
    
    <div class="gallery">
      <div 
        class="gallery-item" 
        v-for="(image, index) in displayedImages" 
        :key="index"
        @click="openLightbox(index)"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>

    <div v-if="images.length > initialDisplayCount" class="load-more">
      <button @click="toggleShowMore" class="load-more-btn">
        {{ showingAll ? 'Weniger anzeigen' : 'Mehr anzeigen' }}
      </button>
    </div>

    <!-- Lightbox für Bilder -->
    <ImageLightbox
      :is-open="isLightboxOpen"
      :images="images.map(img => img.src)"
      :captions="images.map(img => img.caption)"
      :start-index="currentImageIndex"
      @close="closeLightbox"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import ImageLightbox from './ImageLightbox.vue';

// Beispiel-Bilddaten mit mehr Bildern
const images = ref([
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 1',
    caption: 'Beschreibung für Bild 1'
  },
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 2',
    caption: 'Beschreibung für Bild 2' 
  },
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 3',
    caption: 'Beschreibung für Bild 3' 
  },
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 4',
    caption: 'Beschreibung für Bild 4' 
  },
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 5',
    caption: 'Beschreibung für Bild 5' 
  },
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 6',
    caption: 'Beschreibung für Bild 6' 
  },
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 7',
    caption: 'Beschreibung für Bild 7' 
  },
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 8',
    caption: 'Beschreibung für Bild 8' 
  },
  { 
    src: 'https://placehold.co/600x400', 
    alt: 'Analog Bild 9',
    caption: 'Beschreibung für Bild 9' 
  }
]);

// Zustand für Lightbox
const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);

// Zustand für "Mehr anzeigen" Funktionalität
const initialDisplayCount = 6;
const showAll = ref(false);

// Berechnete Eigenschaft für anzuzeigende Bilder
const displayedImages = computed(() => {
  return showAll.value ? images.value : images.value.slice(0, initialDisplayCount);
});

// Anzeigen Status berechnen
const showingAll = computed(() => showAll.value);

// Umschalten zwischen "Mehr anzeigen" und "Weniger anzeigen"
const toggleShowMore = () => {
  showAll.value = !showAll.value;
};

// Lightbox öffnen
const openLightbox = (index) => {
  currentImageIndex.value = index;
  isLightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

// Lightbox schließen
const closeLightbox = () => {
  isLightboxOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

.load-more {
  text-align: center;
  margin-top: 2rem;
}

.load-more-btn {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--text-color);
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background-color: var(--primary-color);
  color: var(--text-color);
}

@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>