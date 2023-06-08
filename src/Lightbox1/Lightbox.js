import React, { useState } from 'react';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import imgl1 from '../images/imgl1.jpg';
import imgl2 from '../images/imgl2.jpg';
import imgl3 from '../images/imgl3.jpg';
import imgl4 from '../images/imgl4.jpg';
import imgl5 from '../images/imgl5.jpg';
import imgl6 from '../images/imgl6.jpg';
import imgl7 from '../images/imgl7.jpg';
import imgl8 from '../images/imgl8.jpg';
import imgl9 from '../images/imgl9.jpg';
import imgl10 from '../images/imgl10.jpg';
import {FcBookmark} from 'react-icons/fc';
export default function Lightbox1() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const images = [
    { src: imgl1, title: 'Fresh Fruits' },
    { src: imgl10, title: 'Image 2' },
    { src: imgl3, title: 'Image 3' },
    { src: imgl4, title: 'Image 4' },
    { src: imgl5, title: 'Image ' },
    { src: imgl6, title: 'Image 4' },
    { src: imgl7, title: 'Image 4' },
    { src: imgl8, title: 'Image 4' },
    { src: imgl9, title: 'Image 4' },
    { src: imgl10, title: 'Image 4' },


  ];

  return (
    <div className="container">
        <h1><hr></hr></h1>
      <h1 className="heading" class="text-center ">
      <FcBookmark size={50}/>  
        {' '}
        <span> my Gallery </span>  <FcBookmark size={50}/>
      </h1><hr></hr>
      <div className="row">
        {images.map((image, index) => (
          <div
            key={index}
            className="col-md-4"
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} className="img-fluid rounded" alt={image.title} />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[imageIndex].src}
          nextSrc={images[(imageIndex + 1) % images.length].src}
          prevSrc={images[(imageIndex + images.length - 1) % images.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setImageIndex((imageIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setImageIndex((imageIndex + 1) % images.length)}
          imageTitle={images[imageIndex].title}
        />
      )}
    </div>
  );
}
