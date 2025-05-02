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
        <img :src="$getImagePath(image.src)" :alt="image.alt" />

        
      </div>
    </div>

    <div v-if="allImages.length > initialDisplayCount" class="load-more">
      <button @click="toggleShowMore" class="load-more-btn">
        {{ showingAll ? 'Weniger anzeigen' : 'Mehr anzeigen' }}
      </button>
    </div>

    <!-- Lightbox für Bilder -->
    <ImageLightbox
      :is-open="isLightboxOpen"
      :images="allImages.map(img => img.src)"
      :captions="allImages.map(img => img.caption)"
      :start-index="currentImageIndex"
      @close="closeLightbox"
    />
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ImageLightbox from './ImageLightbox.vue';

const { $getImagePath } = useNuxtApp();

// Zustand für Bilder
const allImages = ref([]);
const isLoading = ref(true);

// Zustand für Lightbox
const isLightboxOpen = ref(false);
const currentImageIndex = ref(0);

// Zustand für "Mehr anzeigen" Funktionalität
const initialDisplayCount = 9;
const showAll = ref(false);

// Hilfsfunktion zum extrahieren des Dateinamens ohne Erweiterung
const getFileName = (path) => {
  const fileName = path.split('/').pop();
  return fileName.split('.')[0];
};

// Bilder dynamisch laden
onMounted(async () => {
  try {

    allImages.value.push({ src: '/images/analog/postautodeck_1.jpeg', alt: 'Close-Up Postautodeck Chur', caption: 'Postautodeck Close-Up - Chur' })
    allImages.value.push({ src: '/images/analog/stein_2.jpeg', alt: 'Stein - Obersaxen', caption: 'Stein - Obersaxen' })
    allImages.value.push({ src: '/images/analog/wald.jpeg', alt: 'Verschneiter Wald', caption: 'Verschneiter Wald - Obersaxen, Wali' })
    allImages.value.push({ src: '/images/analog/sessellift.jpeg', alt: 'Sessellift Kartitscha', caption: 'Sessellift - Obersaxen, Kartitscha' })
    allImages.value.push({ src: '/images/analog/sessellift_stein.jpeg', alt: 'Sessellift Stein', caption: 'Sessellift - Obersaxen, Stein' })
    allImages.value.push({ src: '/images/analog/berg2.jpeg', alt: 'Berge im Engadin', caption: 'Berge - Engadin' })
    allImages.value.push({ src: '/images/analog/engadiner.jpeg', alt: 'Engadiner Skimarathon', caption: 'Engadiner Skimarathon' })
    allImages.value.push({ src: '/images/analog/lift.jpeg', alt: 'Liftmasten im Engadin', caption: 'Liftmasten - St.Moritz, Corvatsch' })
    allImages.value.push({ src: '/images/analog/achterbahn_2.jpeg', alt: 'Achterbahn im Europapark', caption: 'Achterbahn - Rust' })
    allImages.value.push({ src: '/images/analog/kran.jpeg', alt: 'Kran', caption: 'Kran - Chur' })
    allImages.value.push({ src: '/images/analog/stein_1.jpeg', alt: 'Stein - Obersaxen', caption: 'Stein - Obersaxen' })
    allImages.value.push({ src: '/images/analog/bodensee.jpeg', alt: 'Bodensee', caption: 'Bodensee - Lindau' })
    allImages.value.push({ src: '/images/analog/achterbahn.jpeg', alt: 'Achterbahn', caption: 'Achterbahn - Rust' })
    allImages.value.push({ src: '/images/analog/fernsehturm_2.jpeg', alt: 'Fernsehturm', caption: 'Fernsehturm - Berlin' })
    allImages.value.push({ src: '/images/analog/postautodeck_2.jpeg', alt: 'Postautodeck - Chur', caption: 'Postautodeck - Chur' })
    allImages.value.push({ src: '/images/analog/himmel.jpeg', alt: 'Himmel', caption: 'Himmel - Chur' })
    allImages.value.push({ src: '/images/analog/sesselliftmitsonne.jpeg', alt: 'Sessellift', caption: 'Sessellift - Obersaxen, Stein' })
    allImages.value.push({ src: '/images/analog/bodensee_2.jpeg', alt: 'Bodensee', caption: 'Bodensee - Lindau' })
    allImages.value.push({ src: '/images/analog/sezner.jpeg', alt: 'Sezner', caption: 'Sezner - Obersaxen' })
    allImages.value.push({ src: '/images/analog/halberkran.jpeg', alt: 'Kran', caption: 'Halber Kran - Chur' })
    allImages.value.push({ src: '/images/analog/rotesrathaus.jpeg', alt: 'Rotes Rathaus', caption: 'Rotes Rathaus - Berlin' })
    allImages.value.push({ src: '/images/analog/fernsehturm_closeup.jpeg', alt: 'Close-Up Fernsehturm', caption: 'Fernsehturm Close-Up - Berlin' })
    allImages.value.push({ src: '/images/analog/flaschen.jpeg', alt: 'Flaschen', caption: 'Abendstimmung - Basel' })
    allImages.value.push({ src: '/images/analog/landschaft.jpeg', alt: 'Landschaft', caption: 'Landschaft - Alt St.Johann' })
    allImages.value.push({ src: '/images/analog/kran_2.jpeg', alt: 'Kran', caption: 'Kran - Chur' })
    allImages.value.push({ src: '/images/analog/hochhaus.jpeg', alt: 'Hochhaus', caption: 'Hochhaus - Chur' })
    allImages.value.push({ src: '/images/analog/sonnenlicht.jpeg', alt: 'Sonnenlicht', caption: 'Sonnenlicht - Alt St.Johann' })
    allImages.value.push({ src: '/images/analog/landschaft_2.jpeg', alt: 'Landschaft', caption: 'Landschaft - Alt St.Johann' })
    allImages.value.push({ src: '/images/analog/strommasten.jpeg', alt: 'Strommasten', caption: 'Strommasten - Chur' })
    allImages.value.push({ src: '/images/analog/calanda.jpeg', alt: 'Calanda', caption: 'Calanda im Brunnen - Obersaxen, Wali' })
    allImages.value.push({ src: '/images/analog/innenhof.jpeg', alt: 'Innenhof', caption: 'Innenhof - Budapest' })
    allImages.value.push({ src: '/images/analog/tulpen.jpeg', alt: 'Knospen', caption: 'Knospen - Chur' })
    allImages.value.push({ src: '/images/analog/wellen.jpeg', alt: 'Wellen', caption: 'Wellen - Split' })
    allImages.value.push({ src: '/images/analog/abendrot.jpeg', alt: 'Abendrot', caption: 'Abendrot - Obersaxen, Sezner' })
    allImages.value.push({ src: '/images/analog/bahnhof.jpeg', alt: 'Bahnhof', caption: 'Bahnhof - Chur' })
    allImages.value.push({ src: '/images/analog/pradamaz.jpeg', alt: 'Ausblick', caption: 'Ausblick - Obersaxen, Pradamaz' })
    allImages.value.push({ src: '/images/analog/berg.jpeg', alt: 'Berg', caption: 'Berge - Arosa' })
    allImages.value.push({ src: '/images/analog/fischer.jpeg', alt: 'Fischer', caption: 'Fischer - Athen' })
    allImages.value.push({ src: '/images/analog/fenster.jpeg', alt: 'Fenster', caption: 'Fensterfront - Berlin' })
    allImages.value.push({ src: '/images/analog/akropolis_2.jpeg', alt: 'Akropolis', caption: 'Akropolis - Athen' })
    allImages.value.push({ src: '/images/analog/akropolis_3.jpeg', alt: 'Akropolis', caption: 'Akropolis - Athen' })
    allImages.value.push({ src: '/images/analog/fernsehturm.jpeg', alt: 'Fernsehturm', caption: 'Fernsehturm - Berlin' })
    allImages.value.push({ src: '/images/analog/akropolis.jpeg', alt: 'Akropolis', caption: 'Akropolis - Athen' })
    allImages.value.push({ src: '/images/analog/bergspitz.jpeg', alt: 'Bergspitz', caption: 'Bergspitz - Engadin' })
    allImages.value.push({ src: '/images/analog/sonnenschirm.jpeg', alt: 'Sonnenschirm', caption: 'Sonnenschirm - Athen' })
    allImages.value.push({ src: '/images/analog/meierhof_kartitscha.jpeg', alt: 'Sessellift', caption: 'Sessellift - Obersaxen, Kartitscha' })
    allImages.value.push({ src: '/images/analog/hotel_eden.jpeg', alt: 'Hotel Eden', caption: 'Hotel Eden - Ilanz' })
    allImages.value.push({ src: '/images/analog/sonnenuntergang.jpeg', alt: 'Sonnenuntergang', caption: 'Sonnenuntergang - Filisur' })
    allImages.value.push({ src: '/images/analog/riga.jpeg', alt: 'Freiheitsdenkmal', caption: 'Freiheitsdenkmal - Riga' })
    allImages.value.push({ src: '/images/analog/schwarz.jpeg', alt: 'Schwarz', caption: 'Abstrakt - Unbekannt' })
    allImages.value.push({ src: '/images/analog/fernsehturm_3.jpeg', alt: 'Fernsehturm', caption: 'Fernsehturm - Berlin' })

    isLoading.value = false;
  } catch (error) {
    console.error("Fehler beim Laden der Bilder:", error);
    isLoading.value = false;
  }
});

// Berechnete Eigenschaft für anzuzeigende Bilder
const displayedImages = computed(() => {
  return showAll.value ? allImages.value : allImages.value.slice(0, initialDisplayCount);
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