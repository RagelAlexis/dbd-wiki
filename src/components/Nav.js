import React from 'react'
import './Nav.css'

function Nav() {
  return (
   <nav className='navbar'>
        <div className='navbar__logo'>Logo</div>
        <ul className='navbar__links'>
            <li className='navbar__item'>
              <a href='/'  className="navbar__link">
                Accueil
              </a>
            </li>
            <li className='navbar__item'>
              <a href='/'  className="navbar__link">
                Survivants
              </a>
            </li>
            <li className='navbar__item'>
              <a href='/'  className="navbar__link">
                Tueurs
              </a>
            </li>
            <li className='navbar__item'>
              <a href='/'  className="navbar__link">
                Perks
              </a>
            </li>
            <li className='navbar__item'>
              <a href='/'  className="navbar__link">
                News dbd
              </a>
            </li>
            <li className='navbar__item'>
              <a href='/'  className="navbar__link">
                Contact
              </a>
            </li>
        </ul>
        <button className='navbar__burger'>
          <span className='buger-bar'></span>
        </button>
   </nav>
  )
}

export default Nav