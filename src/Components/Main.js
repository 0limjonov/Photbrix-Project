import React from 'react'
import Navbar from "./Navbar"
import Header from './Header'
import Instruction from './Instruction'
import left from '../assets/left-1.png'
import left1 from '../assets/left-2.png'
import right from '../assets/right-1.png'
import right1 from '../assets/right-2.png'
import Footer from './Footer'


function Main() {
    return (
        <div className='Main'>
            <Navbar />
            <Header />
            <Instruction />
            <Footer/>

            <div className="left-image">
                <img src={left} alt="..." />
                <img src={left1} alt="..." />
            </div>

            <div className="right-image">
                <img src={right} alt="..." />
                <img src={right1} alt="..." />
            </div>
        </div>
    )
}

export default Main