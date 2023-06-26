import React, {useState} from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  
  const [click, setClick] = useState(false)

  const handleClick = () => (!click);
  const closeMobileMenu = () => setClick(false)

  return (
   <>
     <nav className="navBar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRIP
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ?  'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/experiencias" className='nav-links' onClick={closeMobileMenu}>
                  Experiencias
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/destinos" className='nav-links' onClick={closeMobileMenu}>
                  Destinos
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/registro" className='nav-links-mobile' onClick={closeMobileMenu}>
                  Registro
                </Link>
              </li>
            </ul>
        </div>
     </nav>

   </>
  )
}

export default NavBar
