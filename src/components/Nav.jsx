import React, { useEffect, useState } from 'react'

import '../assets/css/Nav.css';

export default function Nav() {

  const [scrolling, setScrolling] = useState(false);


  // Esto permite que el menu deje de ser transparente y tome un background black
  window.addEventListener('scroll', () => {
    window.scrollY > 30 ? setScrolling(true) : setScrolling(false);

  })

  const desplegarMenu = () => {
    const btn = document.getElementById('nav__list-id');
    btn.classList.contains('desplegar') ? btn.classList.remove('desplegar') : btn.classList.add('desplegar');

    const topNav = document.getElementById('topNav-id');
    topNav.classList.contains('active') ? topNav.classList.remove('active') : topNav.classList.add('active');

  }
  return (

    <div className={scrolling ? 'topNav activeScroll' : 'topNav'} id="topNav-id">

      <h1>loopstudios</h1>

      <div className='contentNav'>
        <button className='topNav--button' id="navButton" onClick={desplegarMenu}>
          <svg className="svg" width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" /></g></svg>
        </button>

       <nav className='nav'>

          <ul className='nav__list' id="nav__list-id">
            <li className='nav__list--item'>
              <a>About</a>
            </li>
            <li className='nav__list--item'>
              <a>Careers</a>
            </li>
            <li className='nav__list--item'>
              <a>Events</a>
            </li>
            <li className='nav__list--item'>
              <a>Products</a>
            </li>
            <li className='nav__list--item'>
              <a>Support</a>
            </li>

          </ul>

        </nav>
      </div>


    </div>

  )
}
