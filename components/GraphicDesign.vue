<template>
  <section id="graphic-design" class="section">
    <h2>Graphic Design</h2>
    
    <!-- Wortmarke Projekt -->
    <div class="project">
      <div class="project-image">
        <img :src="$getImagePath('/images/graphicdesign/Wortmarke.svg')" alt="Wortmarke Projekt"/>
      </div>
      <div class="project-info">
        <h3>Wortmarke Balzer</h3>
        <p>Die Wortmarke stellt eine Gitarre dar und trägt den Namen meines Vaters – Balzer. Musik spielt in meinem Leben eine wichtige Rolle, und mit diesem Logo verbinde ich Kreativität, Familie und meine Leidenschaft fürs Gestalten. Schlicht, aber mit Bedeutung.</p>
      </div>
    </div>
    
    <!-- BBO - Mein Leben Projekt mit drei Bildern -->
    <div class="project bbo-project">
      <div class="project-info">
        <h3>BBO - Mein Leben</h3>
        <p>Diese drei Plakate thematisieren die Bergbahnen Obersaxen Mundaun. In einer Kombination aus historischen Bildmotiven und markanter Typografie entstand eine dreiteilige Serie, die die ikonischen Sesselbahnen der Region ins Zentrum rückt. Die Gestaltung verbindet Nostalgie mit kraftvoller, moderner Anmutung.</p>
      </div>
      
      <div class="posters-grid">
        <div class="poster">
          <img :src="$getImagePath('/images/graphicdesign/bbo/meierhof_kartitscha.jpg')" width="600" alt="Meierhof - Kartitscha" />
        </div>
        <div class="poster">
          <img :src="$getImagePath('/images/graphicdesign/bbo/stein.jpg')" width="600" alt="Stein" />
        </div>
        <div class="poster">
          <img :src="$getImagePath('/images/graphicdesign/bbo/wali_stein.jpg')" width="600" alt="Wali - Stein" />
        </div>
      </div>
    </div>
    
    <!-- Weitere Projekte können hier hinzugefügt werden -->
  </section>
</template>

<style scoped>
.section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
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

.project {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
}

.project:nth-child(even) {
  flex-direction: row-reverse;
}

.project-image {
  flex: 1;
}

.project-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* BBO Projekt spezifisches Styling */
.bbo-project {
  flex-direction: column !important;
}

.posters-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.poster {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease;
}

.poster:hover {
  transform: translateY(-5px);
}

.poster img {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .posters-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .project, .project:nth-child(even) {
    flex-direction: column;
  }
  
  .posters-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .posters-grid {
    grid-template-columns: 1fr;
  }
}
</style>