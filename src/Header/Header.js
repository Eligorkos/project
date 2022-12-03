import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import SplitButton from './SplitButton'
import clock from '../assets/24-hours.png'

function Header(){
    return (
        <header className="header"> 
            <nav>
                <ul>
                    <SplitButton />
                    <Link to="/help">Как купить?</Link>
                    <Link to="/help">Помощь</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/main">Археолог</Link>
                    <img className="nav-logo" src={clock} />
                    <Link to="/login">Вход</Link>
                    <Link to="/login">Регистрация</Link>
                </ul>
            </nav>
            
            
        </header>
    )
}

export default Header;