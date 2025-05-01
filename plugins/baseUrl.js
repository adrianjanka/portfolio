// plugins/baseUrl.js
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    
    // Hilfsfunktion für Bildpfade
    function getImagePath(path) {
      // Entferne '/public' aus dem Pfad, falls vorhanden
      const cleanPath = path.replace('/public', '');
      
      // Stelle sicher, dass der Pfad mit '/' beginnt
      const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
      
      // Füge die baseURL hinzu (ohne doppelte Slashes)
      const baseUrl = config.public.baseUrl;
      const baseUrlWithoutTrailingSlash = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      
      return `${baseUrlWithoutTrailingSlash}${normalizedPath}`;
    }
  
    return {
      provide: {
        // Aktuelle baseURL
        baseUrl: config.public.baseUrl,
        // Hilfsfunktion für Bildpfade
        getImagePath
      }
    };
  });