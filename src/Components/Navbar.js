import React from 'react';
import "./Navbar.css";
import cart from "../assets/download.png";
import info from "../assets/download (1).png";

function Navbar() {
    return (
        <div className='Navbar'>
            <nav className='nav'>
                <h1>Photobrix</h1>
                <div className='menu'>
                    <span className="menu__item"> 
                        <img src={cart} alt="cart" />
                        <a href="https://www.wildberries.ru/catalog/155355763/detail.aspx" rel="nofollow" target="_blank">Купить набор</a>
                    </span>

                    <span className="menu__item">
                        <img src={info} alt="cart" />
                        <a href="https://www.instagram.com/_olimjonov.o_/#" >Инструкция</a>
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
