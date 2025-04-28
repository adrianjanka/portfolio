<template>
  <section id="videos" class="section">
    <h2>Videos</h2>
    
    <div class="videos-container">
      <div 
        v-for="(video, index) in videos" 
        :key="index"
        class="video"
      >
        <div class="video-wrapper" @click="playVideo(video)">
          <img :src="video.thumbnail" :alt="video.title + ' Thumbnail'" class="thumbnail" />
          <div class="play-button">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="white"/>
            </svg>
          </div>
        </div>
        <h3>{{ video.title }}</h3>
        <p>{{ video.description }}</p>
      </div>
    </div>
    
    <!-- Video-Modal -->
    <div v-if="activeVideo" class="video-modal" @click="closeVideo">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeVideo">&times;</button>
        <div class="video-container">
          <!-- Vimeo Embed -->
          <div v-if="isVimeoUrl(activeVideo.videoUrl)" class="video-player">
            <iframe
              :src="getVimeoEmbedUrl(activeVideo.videoUrl)"
              width="100%"
              height="100%"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          
          <!-- Lokales Video -->
          <div v-else class="video-player">
            <video controls autoplay width="100%" height="100%">
              <source :src="activeVideo.videoUrl" :type="getVideoType(activeVideo.videoUrl)">
              Dein Browser unterstützt das Video-Element nicht.
            </video>
          </div>
        </div>
        <h3>{{ activeVideo.title }}</h3>
        <p>{{ activeVideo.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Beispiel-Videodaten
const videos = ref([
  {
    title: 'Les Sables',
    description: 'In diesem Stop-Motion-Video wird die Herstellung von klassischen Sablés auf kreative Weise inszeniert. Schritt für Schritt entfaltet sich der Backprozess in liebevoll arrangierten Bildern – vom Teigkneten bis zum fertigen Gebäck.',
    thumbnail: '/video/thumb.jpg',
    // videoUrl: '/public/video/AdrianJankaStopMotion.mov' // Vimeo-URL oder lokaler Pfad wie '/videos/les-sables.mp4'
    videoUrl: 'https://vimeo.com/1079334533' // Beispiel-Vimeo-URL
  },
  // Weitere Videos können hier hinzugefügt werden
]);

// Zustand für das Video-Modal
const activeVideo = ref(null);

// Video abspielen (öffnet das Modal)
const playVideo = (video) => {
  activeVideo.value = video;
  document.body.style.overflow = 'hidden';
};

// Video schließen
const closeVideo = () => {
  activeVideo.value = null;
  document.body.style.overflow = '';
};

// Prüfen, ob es sich um eine Vimeo-URL handelt
const isVimeoUrl = (url) => {
  return url && url.includes('vimeo.com');
};

// Vimeo Embed URL generieren
const getVimeoEmbedUrl = (url) => {
  // Extrahiere die Vimeo-ID
  const vimeoId = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoId && vimeoId[1]) {
    return `https://player.vimeo.com/video/${vimeoId[1]}?autoplay=1`;
  }
  return '';
};

// Bestimmen des Video-Typs basierend auf der Dateierweiterung
const getVideoType = (url) => {
  if (url.endsWith('.mp4')) return 'video/mp4';
  if (url.endsWith('.webm')) return 'video/webm';
  if (url.endsWith('.ogg')) return 'video/ogg';
  return 'video/mp4'; // Standardwert
};

// Schließen mit Escape-Taste
onMounted(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && activeVideo.value) {
      closeVideo();
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });
});
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

.videos-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 1rem;
  cursor: pointer;
}

.thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.video-wrapper:hover .thumbnail {
  transform: scale(1.05);
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.video-wrapper:hover .play-button {
  background-color: rgba(248, 231, 28, 0.8);
}

.video-wrapper:hover .play-button svg path {
  fill: #333;
}

h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

/* Video-Modal Styles */
.video-modal {
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
  padding: 2rem;
}

.modal-content {
  background-color: #fff;
  max-width: 900px;
  width: 90%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  color: #fff;
}

.video-container {
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  background-color: #000;
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-content h3 {
  padding: 1rem 1rem 0.5rem 1rem;
}

.modal-content p {
  padding: 0 1rem 1rem 1rem;
}

@media (max-width: 768px) {
  .videos-container {
    grid-template-columns: 1fr;
  }
}
</style>