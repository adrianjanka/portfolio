<template>
  <nav :class="['navbar', { 'scrolled': scrolled }]">
    <div class="navbar-container">
      <div class="logo">
        <a href="#" @click.prevent="scrollToTop">
          <!-- SVG logo that uses the current --primary-color CSS variable -->
          <svg width="35" height="35" viewBox="0 0 100 100">
            <path d="M50 10 L90 90 L10 90 Z" :fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const scrolled = ref(false);
const currentColor = ref('');

const checkScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const updateLogoColor = () => {
  // Get the current primary color from CSS variables
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color').trim();
  currentColor.value = primaryColor;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
  
  // Initial color update
  updateLogoColor();
  
  // Set up a MutationObserver to detect changes to the CSS variables
  const observer = new MutationObserver(() => {
    updateLogoColor();
  });
  
  // Observe the document root for style attribute changes
  observer.observe(document.documentElement, { 
    attributes: true,
    attributeFilter: ['style'] 
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  /* background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem; */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
}

/* No need for the color property here as we're using the fill attribute in the SVG */
</style>