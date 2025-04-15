<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        
        <div v-if="project" class="modal-body">
          <h2>{{ project.title }}</h2>
          
          <div class="modal-grid">
            <div class="modal-images">
              <img :src="project.mainImage" :alt="project.title" class="main-image" />
              
              <div v-if="project.additionalImages?.length" class="additional-images">
                <img 
                  v-for="(image, index) in project.additionalImages" 
                  :key="index" 
                  :src="image" 
                  :alt="`${project.title} - Bild ${index + 1}`"
                  @click="setMainImage(image)"
                />
              </div>
            </div>
            
            <div class="modal-info">
              <div class="project-description">
                <p>{{ project.description }}</p>
              </div>
              
              <div v-if="project.details" class="project-details">
                <h3>Details</h3>
                <ul>
                  <li v-for="(detail, index) in project.details" :key="index">
                    <strong>{{ detail.label }}:</strong> {{ detail.value }}
                  </li>
                </ul>
              </div>
              
              <div v-if="project.link" class="project-link">
                <a :href="project.link" target="_blank" rel="noopener noreferrer">Projekt ansehen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false
    },
    project: {
      type: Object,
      default: null
    }
  });
  
  const emit = defineEmits(['close']);
  
  const closeModal = () => {
    emit('close');
  };
  
  const mainImage = ref('');
  
  watch(() => props.project, (newProject) => {
    if (newProject) {
      mainImage.value = newProject.mainImage;
    }
  }, { immediate: true });
  
  const setMainImage = (image) => {
    mainImage.value = image;
  };
  
  // Event-Listener zum Schließen des Modals mit Escape-Taste
  onMounted(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && props.isOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });
  });
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    padding: 2rem;
    overflow-y: auto;
  }
  
  .modal-content {
    background-color: white;
    width: 100%;
    max-width: 1000px;
    max-height: 90vh;
    border-radius: 8px;
    overflow-y: auto;
    position: relative;
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
  }
  
  .modal-body {
    padding: 2rem;
  }
  
  .modal-body h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
  .modal-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
  }
  
  .main-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  .additional-images {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .additional-images img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .additional-images img:hover {
    transform: scale(1.05);
  }
  
  .project-description {
    margin-bottom: 1.5rem;
  }
  
  .project-details h3 {
    margin-bottom: 0.5rem;
  }
  
  .project-details ul {
    list-style: none;
    padding: 0;
  }
  
  .project-details li {
    margin-bottom: 0.5rem;
  }
  
  .project-link {
    margin-top: 2rem;
  }
  
  .project-link a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-color);
    color: var(--text-color);
    font-weight: 500;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .project-link a:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    .modal-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>