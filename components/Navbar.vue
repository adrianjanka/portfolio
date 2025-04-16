<template>
  <nav :class="['navbar', { 'scrolled': scrolled }]">
    <div class="navbar-container">
      <div class="logo">
        <a href="#" @click.prevent="scrollToTop"><img width="35px" src="/public/images/Logo.png"></a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);

const checkScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
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
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
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
  color: var(--primary-color);
  text-decoration: none;
}
</style>