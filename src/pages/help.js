import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
import './help.css'
import SimpleAccordion from "./accrodionhelp";

function Help(){
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

export default Help;