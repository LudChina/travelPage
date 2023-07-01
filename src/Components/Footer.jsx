import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
  return (
    <div className='footer_container'>
      <section className="footer_subscription">
        <p className="footer_subscription_heading">
            Unete a nuestro newsletter para recibir novedades
        </p>
        <p className="footer_subscription_text">
        <div className="input_areas">
            <form>
                <input type="email" name="email" placeholder="Ingresa tu email" className="footer_input" />
                <Button buttonStyle='btn__outline'>SUSCRIBETE</Button>
            </form>
        </div>    
        </p>
      </section>
      <div className="footer_links">
        <div className="footer_links_wrapper">
            <div className="footer_link_items">
                <h2>Sobre Nostros</h2>
                <Link to='/registro'>Conócenos</Link>
                <Link to='experiencias'>Experiencias</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
