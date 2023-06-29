import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Mira estos increibles destinos</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/img5.jpg"
                    text="Explora el Mundo"
                    label='Aventura'
                    path='/destinos'
                    />
                     <CardItem 
                    src="images/img1.jpg"
                    text="Comparte con otros viajeros"
                    label='Experiencias'
                    path='/experiencias'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/img3.jpg"
                    text="La magia de Capadocia"
                    label='Aventura'
                    path='/destinos'
                    />
                     <CardItem 
                    src="images/img4.jpg"
                    text="Vacaciones de Invierno"
                    label='Deportes'
                    path='/destinos'
                    />
                    <CardItem 
                    src="images/img2.jpg"
                    text="Vivir viajando"
                    label='Experiencias'
                    path='/experiencias'
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
