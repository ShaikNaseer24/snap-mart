import React, { useState } from 'react';

const LightboxGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <img src={image.thumbnail} alt={image.title} onClick={() => openLightbox(index)} />
        </div>
      ))}

      {selectedImage !== null && (
        <div className="lightbox">
          <div className="lightbox-content">
            <img src={images[selectedImage].src} alt={images[selectedImage].title} />
            <button className="close-button" onClick={closeLightbox}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;