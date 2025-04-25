<template>
    <section id="graphic-design" class="section">
      <h2>Graphic Design</h2>
      
      <div class="projects">
        <div class="project">
          <div class="project-image">
            <!-- <img src="https://placehold.co/800x450" alt="Wortmarke Projekt" /> -->
            <img src="/images/graphicdesign/Wortmarke.svg" alt="Wortmarke Projekt"/>
          </div>
          <div class="project-info">
            <h3>Wortmarke Balzer</h3>
            <p>Die Wortmarke stellt eine Gitarre dar und trägt den Namen meines Vaters – Balzer. Musik spielt in meinem Leben eine wichtige Rolle, und mit diesem Logo verbinde ich Kreativität, Familie und meine Leidenschaft fürs Gestalten. Schlicht, aber mit Bedeutung.</p>
          </div>
        </div>
        
        <div class="project">
          <div class="project-image">
            <img src="https://placehold.co/800x450" alt="BBO - Mein Leben Projekt" />
          </div>
          <div class="project-info">
            <h3>BBO - Mein Leben</h3>
            <p>Beschreibung des Projekts. Hier kannst du Informationen über dieses spezifische Projekt teilen.</p>
          </div>
        </div>
        
        <!-- Weitere Projekte können hier hinzugefügt werden -->
      </div>
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
    background-color: #f8e71c;
  }
  
  .projects {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  .project {
    display: flex;
    gap: 2rem;
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
  
  @media (max-width: 768px) {
    .project, .project:nth-child(even) {
      flex-direction: column;
    }
  }
  </style>