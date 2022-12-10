import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
import './help.css'
import { Link } from "react-router-dom";

function Help(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    <Reklama/>
            </section>
        </div>
    ) 
}

export default Help;