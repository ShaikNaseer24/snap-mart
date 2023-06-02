import React, { Component } from 'react'
import '../Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import imgd from '../images/imgd.jpg';
import imgd4 from '../images/imgd4.jpg';
import imgd13 from '../images/img13.jpg';
import imgd3 from '../images/imgd3.jpg';
import {FcBookmark} from 'react-icons/fc';
export default function Dairy() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="products" id="products">
         <h1><hr></hr></h1>
      <h1 className="heading" class="text-center ">
      <FcBookmark size={50}/>  
        {' '}
        <span> Dairy Products</span>  <FcBookmark size={50}/>
      </h1><hr></hr>
      <div className="products-slider slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 7500, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            <SwiperSlide>
              <div className="box">
                <img src={imgd}alt="" class="img-fluid img-thumbnail" />
                <h3>fresh Milk</h3>
                <div className="price">₹ 30.99/ -- 50.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn" >
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={imgd13} alt="" class="img-fluid img-thumbnail" />
                <h3>fresh Curd</h3>
                <div className="price">₹ 14.99/ -- 20.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={imgd13} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh Milk</h3>
                <div className="price">₹ 10.99/ -- 35.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={imgd3} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh Buttermilk</h3>
                <div className="price">₹ 400.99/ -- 1000.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={imgd4} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh icecreme</h3>
                <div className="price">₹ 40.99/ -- 100.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </section>
      )
      }
    