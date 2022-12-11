import React from "react";
import Header from '../Header/Header'
import Reklama from '../Header/reklama'
import CarouselBox from "../components/CarouselBox";
import '../Advert/Main/Main.css'
import MultiActionAreaCard from "../components/CardOfTovar";

function Main(){
    return(
        <div className='wrapper'>
            <section className='section-header'>
                    <Header />
                    <Reklama/>
                    <CarouselBox/>
                    <div className="container2">
                        <div className="CardTov">
                            <MultiActionAreaCard/>
                        </div>
                    </div>
            </section>
        </div>
    ) 
}

export default Main;

