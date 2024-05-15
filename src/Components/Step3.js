import React, { useState, useEffect } from 'react';
import undo from "../assets/undo.png";
import { useNavigate } from 'react-router-dom';
import "./Step3.css"


function ImageComponent() {
    const navigate = useNavigate();
    const navigatee = useNavigate();
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'ka2HAKVVxIDk7psihgGZmtHw1JnZ8bmd',
                },
                redirect: 'follow',
            };

            const { url = null, index = null } = JSON.parse(
                localStorage['selected-img'] || '[]'
            );
            const data = JSON.parse(localStorage.getItem('images-data') || '[]');

            const [map = [], pixel_codes = {}] = [
                data?.generateds[index]?.map,
                data?.pixel_codes,
            ];

            try {
                const response = await fetch(url, requestOptions);
                const blob = await response.blob();
                const objectURL = URL.createObjectURL(blob);
                setImageUrl(objectURL);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="Step3">
            <nav className='navbarst-card'>
                <h1>Photobrix</h1>
                <button>Выберите вариант сборки, который вам нравится</button>
                <button onClick={() => navigate("/Images")}><span><img src={undo} alt="..." /> Назад</span></button>
            </nav>

            <div className='selected-image'>
                {imageUrl && <img src={imageUrl} alt="Fetched Image" />}
                <button onClick={() => navigate("/Step4")} >Перейти к схеме</button>
            </div>
            <div className="footerst">
                <a href="#">Пользовательское соглашение</a>
                <span>© Photobrix, 2023</span>
            </div>
        </div>
    );
}

export default ImageComponent;
