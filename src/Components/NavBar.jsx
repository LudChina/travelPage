import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Button } from './Button';
import '../Components/NavBar.css';

function NavBar() {
  
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => (!click);
  const closeMobileMenu = () => setClick(false)


  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=> {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
   <>
     <nav className="navBar">
        <div className="navbar_container">
            <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
                TRIP
            </Link>
            <div className="menu_icon" onClick={handleClick}>
              <i className={click ?  'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav_menu active' : 'nav_menu'}>
              <li className='nav_item'>
                <Link to="/" className='nav_links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav_item'>
                <Link to="/experiencias" className='nav_links' onClick={closeMobileMenu}>
                  Experiencias
                </Link>
              </li>
              <li className='nav_item'>
                <Link to="/destinos" className='nav_links' onClick={closeMobileMenu}>
                  Destinos
                </Link>
              </li>
              <li className='nav_item'>
                <Link to="/registro" className='nav_links_mobile' onClick={closeMobileMenu}>
                  Registro
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn__outline'>Registrarse</Button>}
        </div>
     </nav>

   </>
  )
}

export default NavBar
