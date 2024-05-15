import React, { useRef, useState, useEffect } from 'react';
import "./Step.css";
import info from '../assets/download (1).png';
import undo from '../assets/undo.png';
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';
import replace from '../assets/exchange.png';
import { NavLink, useNavigate } from 'react-router-dom';
import tutorial from "../assets/tutorialImg@2x.png";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Step() {
    const fileInputRef = useRef(null);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [selectedFile, setSelectedFile] = useState({ url: "", file: null });
    const [imageSize, setImageSize] = useState(100);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };




    const handleSendImage = () => {
        const formData = new FormData();
        formData.append('file', selectedFile.file);

        axios.post('https://api.photobrix.art/api/generate', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(({ data }) => {
            toast.success('Ma\'lumot muvaffaqiyatli yuborildi!');
            localStorage.setItem("images-data", JSON.stringify(data));
        }).catch(err => {
            console.log(err);
            toast.error('Ma\'lumot yuborishda xatolik yuz berdi!');
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileUploaded(true);
        setSelectedFile({
            url: URL.createObjectURL(file),
            file
        });
    };


    const handlePlusButtonClick = () => {
        setImageSize(imageSize + 15);
    };

    const handleMinusButtonClick = () => {
        setImageSize(imageSize - 15);
    };

    const navigate = useNavigate();

    return (
        <>
            <div className='Step' >
                <ToastContainer />
                <nav className='navbar'>
                    <h1>Photobrix</h1>
                    <button><span><img src={info} alt="..." /> Преобразованная фотография будет сохранена в личном кабинете</span></button>
                    <button onClick={() => navigate("/")}><span><img src={undo} alt="..." /> Назад</span></button>
                </nav>

                <div className="middle-card">
                    <div className="download-card" >
                        {fileUploaded && (
                            <img src={selectedFile.url} alt="..." style={{ width: imageSize + 'px', height: imageSize + 'px' }} />
                        )}
                    </div>
                    <div className="btns">
                        <button onClick={handleMinusButtonClick}><img src={minus} alt="..." /></button>
                        <button onClick={() => window.location.reload()}>
                            <img src={replace} alt="..." />
                        </button>

                        <button onClick={handlePlusButtonClick}><img src={plus} alt="..." /></button>
                    </div>
                    <div className="btn">
                        <button onClick={handleSendImage}><NavLink to="/Images" >Преобразовать</NavLink></button>
                    </div>
                </div>

                <div className="bottom-cardst">
                    <a href="#">Пользовательское соглашение</a>
                    <span>© Photobrix, 2023</span>
                </div>
            </div>

            {!fileUploaded && (
                <div className="files-card">
                    <div className="img-card">
                        <img src={tutorial} alt="..." />
                        <h2>Выбирайте крупные объекты на фото</h2>
                        <p>Лица и крупные объекты будут более <br />чёткими в собранной мозаике</p>
                        <button onClick={handleButtonClick}>Понятно</button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            )}

        </>
    );
}

export default Step;