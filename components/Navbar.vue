<template>
  <nav :class="['navbar', { 'scrolled': scrolled }]">
    <div class="navbar-container">
      <div class="logo">
        <a href="#" @click.prevent="scrollToTop">
          <!-- SVG logo with dynamic color filter -->
          <svg width="35" height="35" viewBox="0 0 512 512" :style="logoStyle">
            <!-- This is a simplified version of your SVG - the actual path might need to be adjusted -->
            <path d="M256 10 C119 10 10 119 10 256 C10 393 119 502 256 502 C393 502 502 393 502 256 C502 119 393 10 256 10 Z" fill="currentColor" />
          </svg>

          <!-- <svg width="35" height="35" viewBox="0 0 512 512" :style="logoStyle">
            <g fill="currentColor" id="Ebene_1-2"><image fill="currentColor" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsSAAALEgHS3X78AAAcCElEQVR4nO3dz3Eex3ov4D4uVWFJ3R0WRpGOgMpA4wgkR2DcCI6cwXEERxl4HMElMxhGYCIDorAwlsLOWPku0BAhCvjw/ZmZt3ve56liqUCR+H4EPsz8umem+y//89//+L8FAEjlH6IDAADrUwAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAICEFAAASUgAAIKHvogMAkNanUsrnUsqX+vHf46LkowBArLvycAB89KV8PRg+9/HPpZS/LpwJ5nZdHt7nv/86O7/58vQP3N9eDOvHyk0BgNN9+ubjacfHv52d33wuR7q/vfitKAC07emo/vPZ+c0UmoYXKQDwMDr58uTjz6WU33Z9fHZ+8/Tj1Zyd33y+v724LqW8jXh9eOLVUT1tUwDYgm+n0X975eMvnR+oPhSz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"/></g></svg>
           -->

        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const scrolled = ref(false);
const currentColor = ref('');

const logoStyle = computed(() => {
  return {
    color: currentColor.value
  };
});

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
  
  // Initial color - with a delay to make sure Header component has set the CSS variable
  setTimeout(updateLogoColor, 100);
  
  // Set up interval to periodically check for color updates (as a backup)
  const intervalId = setInterval(updateLogoColor, 500);
  
  // Set up a MutationObserver as the primary method to detect changes
  const observer = new MutationObserver(() => {
    updateLogoColor();
  });
  
  // Observe the document root for style attribute changes
  observer.observe(document.documentElement, { 
    attributes: true,
    attributeFilter: ['style'] 
  });
  
  // Clean up interval on unmount
  onUnmounted(() => {
    clearInterval(intervalId);
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
</style>