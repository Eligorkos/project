import React from "react";
import './reklama.css'
import Pumkin from '../Advert/Halloween/Halloween-PNG-Images-HD.png'
import Bat from '../Advert/Halloween/pngwing.com.png'
import Halloween from '../Advert/Halloween/halloween-logo.png'

function Reklama(){
    return(
        <div className="reclama">
            <img className="Pumkin" src={Pumkin} />
            <p className="rec">Скидки на хэллоуин 15%</p>
            <img className="Halloween" src={Halloween} />
            <img className="Bat" src={Bat} />
        </div>
    )
}


export default Reklama;