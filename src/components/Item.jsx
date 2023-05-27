import React, { useState } from 'react'

import '../assets/css/Item.css';


export default function Item(props) {

  return (
    // <div className="cardBody"
    //  style={{
    //   background: `url(${props.portada})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat"
    //  }}
    // >
    
    //   <div className="cardBody__content">
    //     <p className="cardBody__content--p">
    //       {props.title}
    //     </p>
    //   </div>

    // </div>

    <section className='cardBody'>

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
