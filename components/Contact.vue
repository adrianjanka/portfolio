<template>
    <section id="contact" class="section">
      <h2>Kontakt</h2>
      
      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-item">
            <h3>E-Mail</h3>
            <p><a href="mailto:adi.janka@bluewin.ch">adi.janka@bluewin.ch</a></p>
          </div>
          
          <div class="contact-item">
            <h3>Instagram</h3>
            <p><a href="https://instagram.com/adrian_janka" target="_blank">@adrian_janka</a></p>
          </div>
          
          <!-- Weitere Kontaktmöglichkeiten hier einfügen -->
        </div>
      </div>
      
      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} Adrian Janka. Alle Rechte vorbehalten.</p>
      </footer>
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
  
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .contact-info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .contact-item {
    margin: 1rem;
    text-align: center;
  }
  
  .contact-item h3 {
    margin-bottom: 0.5rem;
  }
  
  .contact-item a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contact-item a:hover {
    color: #f8e71c;
  }
  
  .footer {
    margin-top: 4rem;
    text-align: center;
    color: #777;
    font-size: 0.9rem;
  }
  </style>