import React from 'react'

import '../assets/css/Footer.css';

const iconos = require.context('../assets/img/icons', true);

export default function Footer() {
  return (
    <footer id="footer">
    {/* columna 1 */}
      <div className="footer__colum1">
        <h5>loppstudios</h5>

        <nav>
          <ul className="nav__list">

            <li className="nav__list--item">
              <a>About</a>
            </li>

            <li className="nav__list--item">
              <a>Careers</a>
            </li>

            <li className="nav__list--item">
              <a>Events</a>
            </li>

            <li className="nav__list--item">
              <a>Products</a>
            </li>

            <li className="nav__list--item">
              <a>Support</a>
            </li>            
          </ul>

        </nav>
      </div>

    {/* columna 2 */}
      <div className="footer__colum2">
        <div className="iconos">

          <img className='iconos--item'
          src={iconos('./icon-facebook.svg')} alt=""/>
          <img className='iconos--item'
          src={iconos('./icon-twitter.svg')} alt=""/>
          <img className='iconos--item' 
          src={iconos('./icon-pinterest.svg')} alt=""/>
          <img className='iconos--item' 
          src={iconos('./icon-instagram.svg')} alt=""/>
          
        </div>

        <p> &copy;2021 Loopstudios. All rights reserved</p>
      </div>
    </footer>
  )
}
