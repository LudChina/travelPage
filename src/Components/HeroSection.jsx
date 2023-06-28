import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero_container'>
      <video src='/video/video_1.mp4' autoPlay loop muted />
      <h1>VIVE LA AVENTURA</h1>
      <p>¿Qué estás esperando?</p>
      <div className="hero_btns">
        <Button className="btn" buttonStyle='btn__outline' buttonSize='btn__large'>
            ¡EMPIEZA YA!
        </Button>
        <Button className="btn" buttonStyle='btn__primary' buttonSize='btn__large'>
            MIRA EL TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
