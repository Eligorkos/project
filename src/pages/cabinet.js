import React from "react";
import Header from '../Header/HeaderCabinet'
import Reklama from '../Header/reklama'

function Cabinet(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    <Reklama/>
            </section>
        </div>
    ) 
}

export default Cabinet;