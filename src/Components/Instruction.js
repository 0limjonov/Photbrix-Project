import React from 'react'
import "./Instruction.css"
import img from "../assets/img-01.png"
import img1 from "../assets/img-02.png"
import img2 from "../assets/img-03.png"
import cart from "../assets/basket.png"
import rasm from "../assets/ic_img.png"
import { useNavigate } from 'react-router-dom'

function Instruction() {

    const navigate = useNavigate();

    return (
        <div className='Instruction'>
            <h1>Процесс подготовки схемы для сборки мозаики</h1>

            <div className="first-card">
                <img src={img} alt="" />
                <div className="info-card">
                    <h1>1</h1>
                    <h2>Загрузите фото</h2>
                    <p>Выберите в галерее фотографию, которую вы хотите собрать</p>
                    <button onClick={() => navigate("/Step")}><img src={rasm} alt="..." />Загрузить фото</button>
                </div>
            </div>


            <div className="first-card">
                <div className="info-card">
                    <h1>2</h1>
                    <h2>Выберите фрагмент</h2>
                    <p>Ограничьте рамкой фрагмент, который хотите собрать</p>
                </div>
                <img src={img1} alt="" />

            </div>

            <div className="first-card">
                <img src={img2} alt="" />
                <div className="info-card">
                    <h1>3</h1>
                    <h2>Собирайте мозайку</h2>
                    <p>Собирайте картину по сгенерированной схеме</p>
                    <button><img src={cart} alt="..." /><a href="https://www.wildberries.ru/catalog/155355763/detail.aspx" rel="nofollow" target="_blank">Купить набор</a></button>
                </div>
            </div>


            <div className="file-card">
                
            </div>
        </div>
    )
}

export default Instruction