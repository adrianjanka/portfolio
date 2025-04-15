<template>
    <section id="videos" class="section">
      <h2>Videos</h2>
      
      <div class="videos-container">
        <div class="video">
          <div class="video-wrapper">
            <!-- Platzhalter für ein Video - du müsstest hier den korrekten Embed-Code einfügen -->
            <img src="/images/video-les-sables.jpg" alt="Les Sables Video Thumbnail" class="thumbnail" />
            <div class="play-button">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
            </div>
          </div>
          <h3>Les Sables</h3>
          <p>Kurze Beschreibung des Videos.</p>
        </div>
        
        <div class="video">
          <div class="video-wrapper">
            <!-- Platzhalter für ein Video - du müsstest hier den korrekten Embed-Code einfügen -->
            <img src="/images/video-dublin.jpg" alt="Dublin Video Thumbnail" class="thumbnail" />
            <div class="play-button">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
            </div>
          </div>
          <h3>Dublin</h3>
          <p>Kurze Beschreibung des Videos.</p>
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
    background-color: #f8e71c;
  }
  
  .videos-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    height: 0;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
  
  @media (max-width: 768px) {
    .videos-container {
      grid-template-columns: 1fr;
    }
  }
  </style>