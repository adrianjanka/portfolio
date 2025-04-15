<template>
  <section id="about" class="section">
    <h2>Über mich / About me</h2>
    <div class="content">
      <div class="text">
        <p>
          Hi, ich bin Adrian Janka, ein leidenschaftlicher Designer mit Wurzeln in der Schweiz. Meine kreative Reise begann 
          mit meiner Faszination für visuelle Gestaltung und hat mich zu einem vielseitigen Designer gemacht, der sowohl in 
          der digitalen als auch in der analogen Welt zu Hause ist.
        </p>
        <p>
          Mein Ansatz in Design verbindet klare, funktionale Ästhetik mit konzeptioneller Tiefe. Ich glaube daran, dass gutes Design 
          nicht nur schön aussehen, sondern auch eine Geschichte erzählen und eine Verbindung herstellen sollte.
        </p>
        <p>
          Neben meiner Arbeit als Designer bin ich auch begeisterter Fotograf und experimentiere gerne mit verschiedenen 
          Medien und Techniken, um meine kreative Ausdrucksfähigkeit ständig weiterzuentwickeln.
        </p>
      </div>
      <!-- Profilbild -->
      <div class="image">
        <img src="https://placehold.co/500x500" alt="Adrian Janka" />
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
  background-color: var(--primary-color);
}

.content {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.text {
  flex: 1;
}

.text p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.image {
  flex: 1;
  max-width: 400px;
}

.image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .content {
    flex-direction: column-reverse;
  }
  
  .image {
    max-width: 100%;
    margin-bottom: 2rem;
  }
}
</style>