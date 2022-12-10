import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'


function Cart(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    <Reklama/>
            </section>
        </div>
    ) 
}

export default Cart;