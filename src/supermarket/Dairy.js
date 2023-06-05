import React, { Component } from 'react'
import { useState } from 'react';
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
import {FaShoppingCart} from 'react-icons/fa';
export default function Dairy() {
  const [itemCount, setItemCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  SwiperCore.use([Autoplay]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
    setCartItems(updatedItems);
  };

  const incrementQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedItems);
  };

  const decrementQuantity = (item) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedItems.filter((cartItem) => cartItem.quantity > 0));
  };

  const openCartPage = () => {
    setShowCart(true);
  };

  const closeCartPage = () => {
    setShowCart(false);
  };

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
                <button type="button" className="btn" onClick={() =>
                      addToCart({
                        name: 'fresh orange',
                        price: '₹40.99/ -- 70.99/-',
                        image: imgd13,
                      })
                    }>
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
                <button type="button" className="btn" onClick={() =>
                      addToCart({
                        name: 'fresh milk',
                        price: '₹40.99/ -- 70.99/-',
                        image: imgd13,
                      })
                    }>
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src={imgd3} alt="" class="img-fluid img-thumbnail"  />
                <h3>fresh Buttermilk</h3>
                <div className="price">₹ 40.99/ -- 100.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn"onClick={() =>
                      addToCart({
                        name: 'fresh buttermik',
                        price: '₹40.99/ -- 100.99/-',
                        image: imgd13,
                      })
                    }>
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
                <button type="button" className="btn"onClick={() =>
                      addToCart({
                        name: 'fresh icecreme',
                        price: '₹40.99/ -- 70.99/-',
                        image: imgd4,
                      })
                    }>
                  add to cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {showCart ? (
          <div className="cart-page">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                      <div className="quantity">
                        <button
                          className="quantity-btn"
                          onClick={() => decrementQuantity(item)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button className="quantity-btn" onClick={() => incrementQuantity(item)}>
                          +
                        </button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button className="close-btn" onClick={closeCartPage}>
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
      </section>
      )
      }
    