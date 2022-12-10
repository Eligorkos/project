import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
// import SwipeableTextMobileStepper from '../Advert/Main/carusel'

function Main(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    <Reklama/>
                    {/* <SwipeableTextMobileStepper/> */}
            </section>
        </div>
    ) 
}

export default Main;

