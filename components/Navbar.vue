<template>
    <nav :class="['navbar', { 'scrolled': scrolled }]">
      <div class="navbar-container">
        <div class="logo">
          <a href="#" @click.prevent="scrollToTop">AJ</a>
        </div>
        
        <div class="nav-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul class="nav-links" :class="{ 'active': menuActive }">
          <li><a href="#about" @click="closeMenu">Über mich</a></li>
          <li><a href="#skills" @click="closeMenu">Skills</a></li>
          <li><a href="#analog" @click="closeMenu">Bilder</a></li>
          <li><a href="#graphic-design" @click="closeMenu">Graphic Design</a></li>
          <li><a href="#projects" @click="closeMenu">Projekte</a></li>
          <li><a href="#videos" @click="closeMenu">Videos</a></li>
          <li><a href="#contact" @click="closeMenu">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const scrolled = ref(false);
  const menuActive = ref(false);
  
  const checkScroll = () => {
    scrolled.value = window.scrollY > 50;
  };
  
  const toggleMenu = () => {
    menuActive.value = !menuActive.value;
  };
  
  const closeMenu = () => {
    menuActive.value = false;
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
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
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin-left: 2rem;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .scrolled .nav-links a {
    color: var(--text-color);
  }
  
  .nav-links a:hover {
    color: var(--primary-color);
  }
  
  .nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;
  }
  
  .nav-toggle span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    .nav-toggle {
      display: flex;
    }
    
    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background-color: white;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      transition: right 0.3s ease;
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .nav-links.active {
      right: 0;
    }
    
    .nav-links li {
      margin: 0;
    }
    
    .nav-links a {
      color: var(--text-color);
      font-size: 1.2rem;
    }
  }
  </style>