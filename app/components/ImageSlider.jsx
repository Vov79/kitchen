"use client"
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
    <div className="view_slider">
      <PhotoProvider>
        <div className="view-image_slider">
  {images.map((item, index) => (
    <PhotoView key={index} src={item}>
      {index < 5 ? <div className={`preview__images-item item_${index + 1}`}><img  src={item} alt="" /></div> : undefined}
    </PhotoView>
  ))}
  </div>
  </PhotoProvider>
    </div>
  );
};

export default ImageSlider;
