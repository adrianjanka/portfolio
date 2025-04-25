<template>
  <section id="projects" class="section">
    <h2>Projekte</h2>
    
    <div class="projects-grid">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="project-card"
        @click="openProjectModal(project)"
      >
        <img :src="project.mainImage" :alt="project.title" :width="project.imageWidth" />
        <div class="project-overlay">
          <h3>{{ project.title }}</h3>
          <p>{{ project.shortDescription }}</p>
        </div>
      </div>
    </div>
    
    <ProjectModal 
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectModal from './ProjectModal.vue';

// Projektdaten
const projects = [
  {
    title: 'Kultissimo',
    shortDescription: 'Kulturprojekt für...',
    description: 'Ausführliche Beschreibung des Kultissimo-Projekts. Hier kannst du Details über die Konzeption, Umsetzung und das Ergebnis teilen.',
    mainImage: '/images/project-kultissimo.jpg',
    additionalImages: [
      '/images/project-kultissimo-detail-1.jpg',
      '/images/project-kultissimo-detail-2.jpg',
      '/images/project-kultissimo-detail-3.jpg',
    ],
    details: [
      { label: 'Jahr', value: '2023' },
      { label: 'Rolle', value: 'Designer & Projektleiter' },
      { label: 'Tools', value: 'Adobe InDesign, Illustrator, Photoshop' },
    ],
    link: '#' // Optional: Link zum Projekt oder weitere Infos
  },
  {
    title: 'Obersaxer Titsch',
    shortDescription: 'Projekt über die Sprache in Obersaxen',
    description: 'Ausführliche Beschreibung des Obersaxer Titsch-Projekts. Hier kannst du Details über die Konzeption, Umsetzung und das Ergebnis teilen.',
    mainImage: '/images/projects/obersaxer/logo.svg',
    imageWidth: 60,
    additionalImages: [
      '/images/project-obersaxer-detail-1.jpg',
      '/images/project-obersaxer-detail-2.jpg',
    ],
    details: [
      { label: 'Jahr', value: '2022' },
      { label: 'Rolle', value: 'Designer' },
      { label: 'Tools', value: 'Adobe InDesign, Illustrator' },
    ],
    link: '#' // Optional: Link zum Projekt oder weitere Infos
  },
  {
    title: 'Gletsch Chalt',
    shortDescription: 'Projekt über...',
    description: 'Ausführliche Beschreibung des Gletsch Chalt-Projekts. Hier kannst du Details über die Konzeption, Umsetzung und das Ergebnis teilen.',
    mainImage: '/images/projects/gletsch/titelbild.jpg',
    additionalImages: [
      '/images/project-gletsch-detail-1.jpg',
      '/images/project-gletsch-detail-2.jpg',
    ],
    details: [
      { label: 'Jahr', value: '2021' },
      { label: 'Rolle', value: 'Designer & Fotograf' },
      { label: 'Tools', value: 'Adobe InDesign, Photoshop' },
    ]
  }
];

// State für Modal
const isModalOpen = ref(false);
const selectedProject = ref(null);

// Modal öffnen
const openProjectModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  // Body Scroll verhindern, wenn Modal offen ist
  document.body.style.overflow = 'hidden';
};

// Modal schließen
const closeModal = () => {
  isModalOpen.value = false;
  // Body Scroll wiederherstellen
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
  background-color: #f8e71c;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 300px;
  cursor: pointer;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay h3 {
  margin: 0 0 0.5rem 0;
}

.project-overlay p {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>