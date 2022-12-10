import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import clock from '../assets/24-hours.png'
import Grouped from './splitbutton2'
import cart from '../assets/shopping-cart1.png'

function Header(){
    return (
        <header className="header"> 
            <div className="container">
                <nav>
                    <ul>
                        <div className="reg">
                            <Grouped/>
                        </div>
                        <Link to="/help">Как купить?</Link>
                        <Link to="/help">Помощь</Link>
                        <Link to="/catalog">Каталог</Link>
                        <Link to="/cart" className=""><img className="nav-logo" src={cart} /></Link>
                                
                            <div className="otstup2">                        
                                <Link to="/" className="otstup3">Археолог</Link>
                                <img className="nav-logo" src={clock} />
                            </div>
                        <Link to="/login">Вход</Link>
                        <Link to="/login">Регистрация</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;