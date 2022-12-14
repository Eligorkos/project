import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
import TabPanel from './tabs'
import "./login.css"

function Login(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    <Reklama/>
                    <div className="center">
                        <TabPanel/>
                    </div>
            </section>
        </div>
    ) 
}

export default Login;

