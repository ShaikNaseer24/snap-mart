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
    { src: imgl1, title:'Snapmart - BANGALORE' },
    { src: imgl7, title: 'Snapmart - DELHI' },
    { src: imgl3, title: 'Snapmart - HYDERABAD' },
    { src: imgl4, title: 'Snapmart - GUJARAT' },
    { src: imgl5, title: 'Snapmart - NELLORE' },
    { src: imgl6, title: 'Snapmart - KOLKATA' },
    { src: imgl7, title: 'Snapmart - KOCHI' },
    { src: imgl8, title: 'Snapmart - PUNE' },
    { src: imgl9, title: 'Snapmart - KERALA' },
    { src: imgl10, title: 'Snapmart - SURATH' },


  ];

  return (
    <div className="container text-center sb-1">
        <h1><hr></hr></h1>
      <h1 className="heading" class="text-center ">
      <FcBookmark size={50}/>  
        {' '}
        <span> Gallery </span>  <FcBookmark size={50}/>
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
