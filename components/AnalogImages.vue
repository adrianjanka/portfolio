<template>
  <section id="analog" class="section">
    <h2>Bilder Analog</h2>
    
    <div class="gallery">
      <div 
        class="gallery-item" 
        v-for="(image, index) in images" 
        :key="index"
        @click="openLightbox(index)"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
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
import { ref } from 'vue';
import ImageLightbox from './ImageLightbox.vue';

// Beispiel-Bilddaten
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
  }
]);

// Zustand für Lightbox
const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);

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