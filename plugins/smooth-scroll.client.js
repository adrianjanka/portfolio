export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-animation', {
    mounted(el, binding) {
      const animationClass = binding.value || 'animate-in';
      const animationType = el.classList.contains('fade-in') ? 'fade-in' : 
                            el.classList.contains('slide-left') ? 'slide-left' :
                            el.classList.contains('slide-right') ? 'slide-right' :
                            el.classList.contains('zoom-in') ? 'zoom-in' : '';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animation class when element is visible
            el.classList.add(animationClass);
            // Optional: unobserve after animation is triggered
            if (!binding.modifiers.repeat) {
              observer.unobserve(el);
            }
          } else if (binding.modifiers.repeat) {
            // Remove animation class when element is not visible (if repeat is enabled)
            el.classList.remove(animationClass);
          }
        });
      }, {
        threshold: binding.modifiers.threshold ? parseFloat(binding.arg || 0.1) : 0.1,
        rootMargin: binding.modifiers.margin ? binding.arg || '0px' : '0px'
      });
      
      observer.observe(el);
    },
    unmounted(el) {
      // Clean up observer when component is unmounted
      if (el._observer) {
        el._observer.disconnect();
      }
    }
  });
});