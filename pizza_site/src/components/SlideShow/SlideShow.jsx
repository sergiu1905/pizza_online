import './SlideShow.css';
import { useState, useEffect } from 'react';
import img1 from '../pictures/1.webp';
import img2 from '../pictures/2.webp';
import img4 from '../pictures/4.webp';
import img5 from '../pictures/5.webp';
import img6 from '../pictures/6.webp';
export default function SlideShow() {
  const images = [img1, img2, img4, img5, img6];
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) =>
        prevImg === images.length - 1 ? 0 : prevImg + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImg, images.length]);
  const nextSlide = () => {
    setCurrentImg((prevImg) =>
      prevImg === images.length - 1 ? 0 : prevImg + 1
    );
  };
  const prevSlide = () => {
    setCurrentImg((prevImg) =>
      prevImg === 0 ? images.length - 1 : prevImg - 1
    );
  };
  return (
    <div className="slideshow-container">
      <button className="previous" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[currentImg]} alt="" />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
