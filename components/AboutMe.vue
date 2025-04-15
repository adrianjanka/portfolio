<template>
    <section id="about" class="section">
      <h2>Über mich / About me</h2>
      <div class="content">
        <div class="text">
          <p>
            Hier kannst du einen kurzen Text über dich einfügen. Erzähle etwas über deine Hintergründe,
            Interessen und was dich als Designer auszeichnet.
          </p>
          <p>
            Du kannst auch über deine Philosophie und deinen Designansatz sprechen.
          </p>
        </div>
        <!-- Optional: Bild von dir -->
        <div class="image">
          <img src="/images/about-placeholder.jpg" alt="Adrian Janka" />
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
  
  .content {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  
  .text {
    flex: 1;
  }
  
  .image {
    flex: 1;
  }
  
  .image img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
    }
  }
  </style>