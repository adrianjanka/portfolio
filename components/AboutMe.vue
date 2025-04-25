<template>
  <section id="about" class="section">
    <h2>Über mich / About me</h2>
    <div class="content">
      <div class="text">
        <p>
          <b>Tschau Moin,</b><br>
          Ich heisse Adrian Janka, bin 25 Jahre jung & wohne in Chur. Ich habe eine Ausbildung als Mediamatiker absolviert und bin aktuell Student im Studiengang Multimedia Production an der FH Graubünden.
        </p>
        <p>
          Ich liebe es, wenn Technik und Kreativität aufeinandertreffen – sei es bei der Gestaltung von Plakaten, beim Programmieren oder beim Fotografieren. Besonders spannend finde ich die Verbindung von modernen Medien mit kulturellen Themen – wie bei meinen Projekten <i>Kultissimo</i> und <i>Obersaxer Titsch</i>, die du auch hier auf der Seite entdecken kannst.
        </p>
        <p>
          Wenn ich nicht gerade am Laptop sitze oder mit der Kamera unterwegs bin, findest du mich auf der Skipiste, hinter der Trommel oder beim Entdecken neuer Kunst und Musik.
Ich mag es minimalistisch – aber mit Charakter. Bunte Farben? Ja, gern. Schwarz-Weiss? Ebenfalls. Hauptsache, es hat Stil.
        </p>
      </div>
      <!-- Profilbild -->
      <div class="image">
        <img src="/images/me.jpg" alt="Adrian Janka" />
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