import React, {useState} from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
   <>
     <nav className="navBar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRIP
            </Link>
        </div>
     </nav>

   </>
  )
}

export default NavBar
