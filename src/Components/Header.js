import React from 'react'
import iconca from "../assets/detail-1.png"
import img from "../assets/Screenshot 2024-04-25 at 22.17.49.png"
import "./Header.css"
import clock from '../assets/clock.png'
import child from '../assets/child.png'
import brick from '../assets/brick.png'
import arrow from '../assets/arrow.png'
import detal from '../assets/detail-1.png'
import detal1 from '../assets/detail-3.png'
import detal2 from '../assets/detail-4.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='Header'>
            <div className="left-card">
                <h2>Лучший конструктор из ваших фото</h2>
                <p>Подарите массу эмоций себе и близким</p>
                <button><NavLink to="/Step" >Загрузить фото<img src={iconca} alt="..." /></NavLink></button>
                <span>Потяните, чтобы сравнить<br /> результат и оригинал</span>
            </div>

            <div className="right-card">
                <img src={img} alt="" />
                <img src={detal} alt="..." className='detal1' />
                <img src={detal1} alt="..." className='detal2' />
                <img src={detal2} alt="..." className='detal3' />
            </div>

            <div className="bottom-card">
                <span><img src={arrow} alt="..." /> 50 x 50</span>
                <span><img src={brick} alt="..." /> 3900 деталей</span>
                <span><img src={clock} alt="..." />10 часов сборки</span>
                <span><img src={child} alt="..." />14+</span>
            </div>
        </div>
    )
}

export default Header