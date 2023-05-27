import React, {useState, useEffect} from 'react'

import Item from './Item';
import creationsJson from '../assets/json/creations.json';
import '../assets/css/Creations.css';

const desktopImage = require.context('../assets/img/desktop', true);
const mobileImage = require.context('../assets/img/mobile', true);

export default function Creations() {

    //     <script> 
    // if (screen.width < 1024) 
    //    document.write ("Pequeña") 
    // else 
    //    if (screen.width < 1280) 
    //       document.write ("Mediana") 
    //    else 
    //       document.write ("Grande") 
    // </script>
    // </p>
    // const [url, setUrl] = useState(desktopImage);
    const [bandera, setBandera] = useState(false);


    useEffect(()=>{
        (screen.width == 480 || screen.width < 480 || screen.width < 980 ) ? setBandera(true) : setBandera(false)
    }, [])
    // if (screen.width <= 480) {
    //     setUrl(mobileImage);
    //     setBandera(true);
    // } else {
    //     setUrl(desktopImage);
    //     setBandera(false);
    // }


    return (
        <section className='content'>
            {/* <div className='creationsTitle a'> */}
                <h2 className='content--h2 title'>OUR CREATIONS</h2>
                <button className='content--btn button'>SEE ALL</button>
            {/* </div> */}
            <div className="creations-item item">
                {
                    creationsJson.map((item, i) => {
                        return (
                            <Item key={i}
                                portada={bandera ? mobileImage(item.img) : desktopImage(item.img)}       
                                title={item.title} />
                        )
                    })
 
                }
            </div>
        </section>

    )
}
