export default defineNuxtPlugin((nuxtApp) => {
    // Warte, bis das DOM geladen ist
    nuxtApp.hook('app:mounted', () => {
      // Alle internen Links auswählen
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          
          const targetId = link.getAttribute('href');
          
          // Wenn das Ziel "#" (Home) ist, scrolle zum Anfang
          if (targetId === '#') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            return;
          }
          
          // Ansonsten scrolle zum Zielelement
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const offsetPosition = targetElement.offsetTop - 100; // 100px Offset für die Navigation
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    });
  });