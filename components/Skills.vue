<template>
  <section id="skills" class="section">
    <h2>Lebenslauf / Skills</h2>
    
    <div class="skills-container">
      <div class="skills-group">
        <h3>Personal Skills</h3>
        <ul>
          <li>
            <Icon name="lucide:layout-grid" size="1.5rem" class="skill-icon" />
            <span>ordentlich / strukturiert</span>
          </li>
          <li>
            <Icon name="lucide:lightbulb" size="1.5rem" class="skill-icon" />
            <span>kreativ</span>
          </li>
          <li>
            <Icon name="lucide:users" size="1.5rem" class="skill-icon" />
            <span>teamfähig</span>
          </li>
          <li>
            <Icon name="lucide:laugh" size="1.5rem" class="skill-icon" />
            <span>lustig / spontan</span>
          </li>
          <li>
            <Icon name="lucide:puzzle" size="1.5rem" class="skill-icon" />
            <span>lösungsorientiert</span>
          </li>
          <li>
            <Icon name="lucide:binoculars" size="1.5rem" class="skill-icon" />
            <span>lernbereit / neugierig</span>
          </li>
          <li>
            <Icon name="lucide:earth" size="1.5rem" class="skill-icon" />
            <span>kulturell interessiert</span>
          </li>
        </ul>
      </div>
      
      <div class="skills-group">
        <h3>Software Skills</h3>
        <ul>
          <li>
            <Icon name="simple-icons:adobeindesign" size="1.5rem" class="skill-icon" />
            <span>Adobe InDesign</span>
          </li>
          <li>
            <Icon name="simple-icons:adobephotoshop" size="1.5rem" class="skill-icon" />
            <span>Adobe Photoshop</span>
          </li>
          <li>
            <Icon name="simple-icons:adobeillustrator" size="1.5rem" class="skill-icon" />
            <span>Adobe Illustrator</span>
          </li>
          <li>
            <Icon name="lucide:code" size="1.5rem" class="skill-icon" />
            <span>HTML/CSS</span>
          </li>
          <li>
            <Icon name="simple-icons:javascript" size="1.5rem" class="skill-icon" />
            <span>Javascript</span>
          </li>
          <li>
            <Icon name="simple-icons:php" size="1.5rem" class="skill-icon" />
            <span>PHP</span>
          </li>
          <li>
            <Icon name="simple-icons:figma" size="1.5rem" class="skill-icon" />
            <span>Figma</span>
          </li>
          <li>
            <Icon name="simple-icons:blender" size="1.5rem" class="skill-icon" />
            <span>Blender</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="resume">
      <h3>Lebenslauf</h3>
      <div class="resume-item">
        <div class="year">2023 – heute</div>
        <div class="description">
          <h4>Bachelorstudium Multimedia Production</h4>
          <p>FHGR</p>
        </div>
      </div>
      
      <div class="resume-item">
        <div class="year">2022 - 2023</div>
        <div class="description">
          <h4>Mediamatiker</h4>
          <p>exigo ag, Chur</p>
        </div>
      </div>

      <div class="resume-item">
        <div class="year">2021 – 2022</div>
        <div class="description">
          <h4>Gestalterische Berufsmaturität</h4>
          <p>GBC, Chur</p>
        </div>
      </div>

      <div class="resume-item">
        <div class="year">2020 - 2021</div>
        <div class="description">
          <h4>Mediamatiker</h4>
          <p>exigo ag, Chur</p>
        </div>
      </div>

      <div class="resume-item">
        <div class="year">2016 - 2020</div>
        <div class="description">
          <h4>Lehre als Mediamatiker</h4>
          <p>exigo ag, Chur</p>
        </div>
      </div>

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
  background-color: var(--primary-color);
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
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
}

.skill-icon {
  color: var(--primary-color);
  position: absolute;
  left: 0;
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