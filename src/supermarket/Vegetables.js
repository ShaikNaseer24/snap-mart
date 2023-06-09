import React, { Component } from 'react'
import '../Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import imgp4 from '../images/imgp4.jpg';
import imgv2 from '../images/imgv2.jpg';
import imgv3 from '../images/imgv3.jpg';
import imgv4 from '../images/imgv4.jpg';
import { useCart } from "react-use-cart";
import {FcBookmark} from 'react-icons/fc';
import {FaShoppingCart} from 'react-icons/fa';
import { useState } from 'react';

export default function Vegetables({ addToCart, removeFromCart, incrementQuantity, decrementQuantity }) {
  const [itemCount, setItemCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  SwiperCore.use([Autoplay]);

  

  const openCartPage = () => {
    setShowCart(true);
  };

  const closeCartPage = () => {
    setShowCart(false);
  };

  return (
    <section className="products" id="products">
        <h1><hr></hr></h1>
      <h1 className="heading"class="text-center " >
      <FcBookmark size={50}/>
        {' '}
        <span> Vegetables</span>  <FcBookmark size={50}/>
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
                <img src={imgp4}alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh cabage</h3>
                <div className="price">₹ 30.99/ -- 45.99/-</div>
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
                <img src={imgv2} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh vegetables</h3>
                <div className="price">₹ 10.99/ -- 99.99/-</div>
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
                <img src={imgv3} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh vegetables</h3>
                <div className="price">₹ 10.99/ -- 99.99/-</div>
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
                <img src={imgv2} alt="" class="img-fluid img-thumbnail" />
                <h3>fresh vegetables</h3>
                <div className="price">₹ 40.99/ -- 99.99/-</div>
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
                <img src={imgv4} alt="" class="img-fluid img-thumbnail" />
                <h3>fresh vegetables</h3>
                <div className="price">₹ 20.99/ -- 99.99/-</div>
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
        {showCart ? (
          <div className="cart-page container text-center"  class="cartitems" >
                  
            <h2 className="bg-dark text-white">Cart</h2>
            {cartItems.length === 0 ? (
              <p className="bg-dark text-white">No items in cart</p>
            ) : (
              <div className="cart-items" >
                
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                      <div className="quantity">
                        <button 
                          className="quantity-btn bg-info "
                          onClick={() => decrementQuantity(item)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button className="quantity-btn bg-info " onClick={() => incrementQuantity(item)}>
                          +
                        </button>
                      </div>
                      <button   className="remove-btn bg-danger" onClick={() => removeFromCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button  className="close-btn bg-warning" onClick={closeCartPage}>
              Close Cart
            </button>
          </div>
        ) : (
          <div className="cart-icon" onClick={openCartPage}>
            <FaShoppingCart />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </div>
        )}
      </div>
      <div>
      </div>
      </section>
      )
      }