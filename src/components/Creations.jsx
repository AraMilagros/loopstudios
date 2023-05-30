import React, { useState, useEffect } from 'react'

import Item from './Item';
import creationsJson from '../assets/json/creations.json';
import '../assets/css/Creations.css';

const desktopImage = require.context('../assets/img/desktop', true);
const mobileImage = require.context('../assets/img/mobile', true);

export default function Creations() {

    const [bandera, setBandera] = useState(false);


    useEffect(() => {
        (screen.width < 1021) ? setBandera(true) : setBandera(false)
    }, [])

    return (
        <main className='content'>

            {/* <div className='title'> */}
            <h2 className='content--h2 title'>OUR CREATIONS</h2>

            <button className='content--btn button'>SEE ALL</button>
            {/* </div> */}

            {/* <div className="creations-item item"> */}
                {
                    creationsJson.map((item, i) => {
                        return (
                            <Item key={i}
                                portada={bandera ? mobileImage(item.img) : desktopImage(item.img)}
                                title={item.title}
                               
                                />
                                
                        )
                    })

                }
            {/* </div> */}
        </main>

    )
}
