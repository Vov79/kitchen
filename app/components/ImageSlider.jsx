import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="preview__images-slider">
      <img
        className="preview__images-image-slider"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <button className="prev-arrow-slider" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="next-arrow-slider" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
