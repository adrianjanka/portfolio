<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  captions: {
    type: Array,
    default: () => []
  },
  startIndex: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['close']);

// Aktueller Bildindex
const currentIndex = ref(props.startIndex);

// Aktuelles Bild berechnen
const currentImage = computed(() => {
  return props.images[currentIndex.value] || '';
});

// Wenn sich der startIndex ändert, aktualisiere currentIndex
watch(() => props.startIndex, (newIndex) => {
  currentIndex.value = newIndex;
});

// Navigation
const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++;
  }
};

const setImage = (index) => {
  currentIndex.value = index;
};

// Lightbox schließen
const closeLightbox = () => {
  emit('close');
};

// Event-Listener für Tastaturnavigation
onMounted(() => {
  const handleKeyDown = (e) => {
    if (!props.isOpen) return;
    
    if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });
});
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.lightbox-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
}

.lightbox-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
}

.lightbox-image-container {
  position: relative;
  max-width: 80%;
  max-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.nav-button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 2rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.lightbox-caption {
  color: white;
  text-align: center;
  padding: 1rem 0;
}

.lightbox-thumbnails {
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
  overflow-x: auto;
  max-width: 80%;
  margin: 0 auto;
}

.thumbnail {
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.thumbnail.active {
  border-color: var(--primary-color);
  opacity: 1;
}

.thumbnail:hover {
  opacity: 1;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>