import React, { useState } from 'react'

import '../assets/css/Item.css';


export default function Item(props) {

  return (
    <section className="cardBody">

      <div className='cardBody__content'>
        <img className='cardBody__content--img'
          src={props.portada} alt=""/>

        <p className='cardBody__content--p'>
          {props.title}
        </p>
      </div>

    </section>

  )
}
