<template>
    <header class="hero" id="home">
      <div class="hero-content">
        <h1>Portfolio</h1>
        <div class="hero-info">
          <h2>ADRIAN JANKA</h2>
          <div class="contact-info">
            <p>SAY HI</p>
            <p>adi.janka@bluewin.ch</p>
            <p>@adrian_janka</p>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  // Header-Logik hier
  </script>
  
  <style scoped>
  .hero {
    height: 100vh;
    background-image: url('/api/placeholder/1920/1080');
    background-image: url('/public/images/hero-background.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  
  .hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: var(--primary-color);
  }
  
  .hero-content {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
  
  h1 {
    font-size: 6rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
  }
  
  .hero-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  .contact-info {
    text-align: right;
  }
  
  .contact-info p {
    margin: 0.2rem 0;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }
    
    .hero-info {
      flex-direction: column;
      gap: 1rem;
    }
    
    .contact-info {
      text-align: left;
    }
  }
  
  @media (max-width: 576px) {
    h1 {
      font-size: 3rem;
    }
  }
  </style>