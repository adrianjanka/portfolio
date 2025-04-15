<template>
    <section id="analog" class="section">
      <h2>Bilder Analog</h2>
      
      <div class="gallery">
        <!-- Beispiel für Bildergalerie, die Bilder müssen ersetzt werden -->
        <div class="gallery-item" v-for="i in 6" :key="i">
          <img :src="`/images/analog-${i}.jpg`" :alt="`Analog Bild ${i}`" />
        </div>
      </div>
    </section>
  </template>
  
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
  
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .gallery-item {
    overflow: hidden;
    border-radius: 4px;
  }
  
  .gallery-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .gallery-item img:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    .gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 500px) {
    .gallery {
      grid-template-columns: 1fr;
    }
  }
  </style>