import React from 'react';
import '../Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import imgp1 from '../images/imgp1.jpg';
import imgp2 from '../images/imgp2.jpg';
import imgp3 from '../images/imgp3.jpg';
import imgp4 from '../images/imgp4.jpg';
import imgp5 from '../images/imgp5.jpg';
import imgp6 from '../images/imgp6.jpg';
import imgp7 from '../images/imgp7.jpg';
import imgp8 from '../images/imgp8.jpg';
import {FcBookmark} from 'react-icons/fc';
import Vegetables from './Vegetables';
import Dairy from './Dairy';
import Fruits from './Fruits';
import {useEffect } from "react";



export default function Products() {

  const [itemCount, setItemCount] = React.useState(1);
  SwiperCore.use([Autoplay]);
  return (<div>
    <section className="products" id="products">
      <hr></hr>
      <h1 className="heading" class="text-center">
      <FcBookmark size={50}/> Our
        {' '}
        <span>Products</span>  <FcBookmark size={50}/>
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
                <img src={imgp1}alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh orange</h3>
                <div className="price">₹40.99/ -- 70.99/-</div>
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
                <img src={imgp2} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh onion</h3>
                <div className="price">₹ 10.99/ -- 40.99/-</div>
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
                <img src={imgp3} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh meat</h3>
                <div className="price">₹99.99/ -- 99.99/-</div>
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
                <img src={imgp4} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh cabage</h3>
                <div className="price">₹ 40.99/ -- 90.99/-</div>
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

      <div className="products-slider">
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
                <img src={imgp5} alt="" class="img-fluid img-thumbnail" />
                <h3>fresh potato</h3>
                <div className="price">₹ 30.99/ -- 50.99/-</div>
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
                <img src={imgp6} alt=""class="img-fluid img-thumbnail"  />
                <h3>fresh avocado</h3>
                <div className="price">₹ 45.99/ -- 55.99/-</div>
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
                <img src={imgp7}alt="" class="img-fluid img-thumbnail" />
                <h3>fresh carrot</h3>
                <div className="price">₹40.99/ -- 80.99/-</div>
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
                <img src={imgp8} alt="" class="img-fluid img-thumbnail"  />
                <h3>green lemon</h3>
                <div className="price">₹29.99/ -- 49.99/-</div>
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
          <faStar/>
        </div>
      </div>
    </section>
    <div><Vegetables/><Dairy/><Fruits/></div></div>
  );
}