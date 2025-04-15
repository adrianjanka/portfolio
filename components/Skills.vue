<template>
    <section id="skills" class="section">
      <h2>Lebenslauf / Skills</h2>
      
      <div class="skills-container">
        <div class="skills-group">
          <h3>Personal Skills</h3>
          <ul>
            <li>Kreativität</li>
            <li>Teamfähigkeit</li>
            <li>Projektmanagement</li>
            <li>Problem-Lösung</li>
            <!-- Weitere Skills hier einfügen -->
          </ul>
        </div>
        
        <div class="skills-group">
          <h3>Software Skills</h3>
          <ul>
            <li>Adobe InDesign</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>HTML/CSS</li>
            <li>Vue.js / Nuxt.js</li>
            <!-- Weitere Skills hier einfügen -->
          </ul>
        </div>
      </div>
      
      <div class="resume">
        <h3>Lebenslauf</h3>
        <div class="resume-item">
          <div class="year">2020 - heute</div>
          <div class="description">
            <h4>Position / Firma</h4>
            <p>Beschreibung deiner Tätigkeit</p>
          </div>
        </div>
        
        <div class="resume-item">
          <div class="year">2018 - 2020</div>
          <div class="description">
            <h4>Position / Firma</h4>
            <p>Beschreibung deiner Tätigkeit</p>
          </div>
        </div>
        
        <!-- Weitere Lebenslaufeinträge hier einfügen -->
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
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .skills-container {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .skills-group {
    flex: 1;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 0.5rem 0;
    position: relative;
    padding-left: 1.5rem;
  }
  
  li::before {
    content: '•';
    color: #f8e71c;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: 0.3rem;
  }
  
  .resume-item {
    display: flex;
    margin-bottom: 1.5rem;
  }
  
  .year {
    width: 120px;
    font-weight: bold;
  }
  
  .description {
    flex: 1;
  }
  
  .description h4 {
    margin: 0 0 0.5rem 0;
  }
  
  .description p {
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .skills-container {
      flex-direction: column;
    }
    
    .resume-item {
      flex-direction: column;
    }
    
    .year {
      margin-bottom: 0.5rem;
    }
  }
  </style>