import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'

function Main(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                <div className='container'>
                    <Header />
                    <Reklama/>
                </div>
            </section>
        </div>
    ) 
}

export default Main;

