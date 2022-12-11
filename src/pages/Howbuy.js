import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
import './help.css'
import SimpleAccordion from "./accordionbuy";

function Howbuy(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    <Reklama/>
                    <div className="accord">
                        <SimpleAccordion/>
                    </div>
            </section>
        </div>
    ) 
}

export default Howbuy;