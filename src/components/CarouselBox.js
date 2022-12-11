import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import BagTools from '../assets/1_112.png'
import Arcs from '../assets/1_102.png'
import Dio from '../assets/1_211.png'
import Antro from '../assets/1_101.png'
import Oporn from '../assets/1_1013.png'
import Igla from '../assets/1_103.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselBox.css'
import { Link } from "react-router-dom";

export default class CarouselBox extends Component {
    render() {
        return (
            <div className='nano'><p>Популярные товары </p> 
            <Carousel>
                <Carousel.Item>
                    <div className='toolz'>
                        <Link to="/" className="">
                            <img className='png1'
                                src={BagTools}
                                alt='BagTools'
                            />
                        </Link>
                        <p>МАЛАЯ СУМКА С ИНСТРУМЕНТАМИ</p>
                    </div>
                    <div className='toolz'>
                        <Link to="/" className="">
                            <img className='png1'
                                src={Dio}
                                alt='BagTools'
                            />
                        </Link>  
                        <p>КВАДРАТНЫЙ ДИОПТРОГРАФ (МАРТИНА)</p>
                    </div>
                    <div className='toolz'>
                        <Link to="/" className="">
                            <img className='png1'
                                src={Arcs}
                                alt='BagTools'                               
                            />
                        </Link>  
                        <p>ИЗОГНУТЫЕ ИЗМЕРИТЕЛЬНЫЕ ДУГИ ДЛЯ АНТРОПОМЕТРА</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='toolz'>
                    <Link to="/" className="">
                        <img className='png1'
                            src={Antro}
                            alt='BagTools'                        
                        />
                    </Link>
                        <p>АНТРОПОМЕТР</p>
                    </div>
                    <div className='toolz'>
                        <Link to="/" className="">
                            <img className='png1'
                                src={Oporn}
                                alt='BagTools'                           
                            />
                        </Link>
                        <p>ОПОРНАЯ ПОДСТАВКА ДЛЯ АНТРОПОМЕТРА</p>
                    </div>
                    <div className='toolz'>
                        <Link to="/" className="">
                            <img className='png1'
                                src={Igla}
                                alt='BagTools'                                
                            />
                        </Link>
                        <p>ИГЛА ОРИКУЛЯРНОЙ ВЫСОТЫ</p>
                    </div>                   
                </Carousel.Item>
            </Carousel>  
            </div>
        )
    }
}