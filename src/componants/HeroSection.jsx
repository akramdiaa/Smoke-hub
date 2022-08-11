import React from 'react';
import '../styling/HeroSection.css';
import '../styling/Button.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>UPGRADE YOUR SMOKING EXPERIENCE</h1>
      <p>What are you waiting for?</p>

        <button className='bttn'> GET STARTED</button>

    </div>
  );
}

export default HeroSection;
