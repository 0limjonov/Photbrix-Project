import React, { useState, useEffect } from 'react';
import "./Images.css"
import undo from '../assets/undo.png';
import { NavLink, useNavigate } from 'react-router-dom';


function Images() {
  const [imagesData, setImagesData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const data = JSON.parse(localStorage.getItem("images-data") || "[]");
      setImagesData(data.generateds || []);
      setSelectedImage(data.generateds && data.generateds.length > 0 ? data.generateds[0] : null);
    };
    fetchData();
  }, []);

  // const handleImageSelect = (url, index) => {
  //   setSelectedImage({ url: url.replace("http", "https"), index });
  // };

  const navigate = useNavigate();


  const handleImageSelect = (url, index) => {
    const imageData = { url: url.replace("http", "https"), index };
    setSelectedImage(imageData);
    localStorage.setItem("selected-img", JSON.stringify(imageData));
  };


  return (
    <div className="Images">

      <nav className='navbar-card'>
        <h1>Photobrix</h1>
        <button>Выберите вариант сборки, который вам нравится</button>
        <button onClick={() => navigate("/Step")}><span><img src={undo} alt="..." /> Назад</span></button>
      </nav>

      <div className="image-gallery">
        {imagesData.map(({ url }, index) => (
          <div
            key={index}
            className="grid__img"
            onClick={() => handleImageSelect(url, index)}
          >
            <img
              src={url.replace("http", "https")}
              alt={`Image ${index}`}
              className="image-select"
              onLoad={() => { }}
            />
          </div>
        ))}
        <button>
          <NavLink to="/Step3">Начать сборку</NavLink>
        </button>
      </div>


      <div className="footer">
        <a href="#">Пользовательское соглашение</a>
        <span>© Photobrix, 2023</span>
      </div>
    </div>
  );
}

export default Images;
