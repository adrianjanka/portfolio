<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout> 
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: #f5f5f5;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Dark Mode Styles */
.dark body {
  background-color: #121212;
  color: #f5f5f5;
}

.dark a {
  color: #8bb4fe;
}

.dark button {
  color: #f5f5f5;
}

/* Einfache Transition für alle Elemente */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
</style>