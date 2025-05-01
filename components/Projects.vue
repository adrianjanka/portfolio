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
        <img :src="$getImagePath(project.mainImage)" :alt="project.title" />
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

const { $getImagePath } = useNuxtApp();

// Projektdaten
const projects = [
  {
    title: 'Kultissimo',
    shortDescription: 'Plakatserie über Kultklassiker',
    description: 'Eine minimalistische Plakatserie, die ikonische Kultobjekte neu interpretiert. Mit reduziertem Design werden Klassiker wie Star Wars, Aromat oder der Adidas Samba stilvoll inszeniert und auf ihre Essenz reduziert – eine Hommage an zeitlose Symbole der Popkultur.',
    mainImage: '/images/projects/kult/logo.png',
    // additionalImages: [
    //   '/images/project-kultissimo-detail-1.jpg',
    //   '/images/project-kultissimo-detail-2.jpg',
    //   '/images/project-kultissimo-detail-3.jpg',
    // ],
    details: [
      { label: 'Jahr', value: '2024' },
      { label: 'Rolle', value: 'Designer & Projektleiter' },
      { label: 'Tools', value: 'Adobe InDesign, Illustrator, Photoshop' },
    ],
    link: 'https://www.adrianjanka.ch/kultissimo/' // Optional: Link zum Projekt oder weitere Infos
  },
  {
    title: 'Obersaxer Titsch',
    shortDescription: 'Obersaxer Wörterbuch Sammlung',
    description: 'Ein Projekt zur Bewahrung der kulturellen Identität von Obersaxen. Mit liebevoll gestalteten Illustrationen wird das fast vergessene Obersaxer Titsch dokumentiert und lebendig gehalten. Eine Hommage an die Sprache, Geschichten und Werte vergangener Generationen.',
    mainImage: '/images/projects/obersaxer/logo.png',
    // additionalImages: [
    //   '/images/project-obersaxer-detail-1.jpg',
    //   '/images/project-obersaxer-detail-2.jpg',
    // ],
    details: [
      { label: 'Jahr', value: '2025' },
      { label: 'Rolle', value: 'Entwickler & Designer' },
      { label: 'Tools', value: 'Adobe InDesign' },
    ],
    link: 'https://www.adrianjanka.ch/obersaxer-titsch/' // Optional: Link zum Projekt oder weitere Infos
  },
  {
    title: 'Gletsch Chalt',
    shortDescription: 'Illustration von Glace-Klassikern',
    description: 'Eine illustrative Hommage an die ikonischen Glace-Klassiker der Schweiz. Die Illustration interpretiert bekannte Sorten wie Rakete, Solero oder Magnum visuell neu und verbindet Retro-Ästhetik mit modernem Design. Entstanden ist eine verspielte und gleichzeitig stilvolle Sammlung, die Erinnerungen an Sommer, Freibäder und Kioske weckt.',
    mainImage: '/images/projects/gletsch/logo.png',
    // additionalImages: [
    //   '/images/project-gletsch-detail-1.jpg',
    //   '/images/project-gletsch-detail-2.jpg',
    // ],
    details: [
      { label: 'Jahr', value: '2021' },
      { label: 'Rolle', value: 'Designer' },
      { label: 'Tools', value: 'Adobe InDesign, Illustrator' },
    ],
    link: 'https://indd.adobe.com/view/3e809201-0e44-4267-91f3-c0b512693e0f'
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
  background-color: var(--primary-color);
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