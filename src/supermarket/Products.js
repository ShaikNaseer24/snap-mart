import React, { useState } from 'react';
import '../Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
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
import { FcBookmark } from 'react-icons/fc';
import { FaShoppingCart } from 'react-icons/fa';

import Vegetables from './Vegetables';
import Dairy from './Dairy';
import Fruits from './Fruits';
import { useEffect } from 'react';
const CartButton = ({ cartItems, openCartPage }) => {
  return (
    <div className="cart-icon" onClick={openCartPage}>
      <FaShoppingCart />
      {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
    </div>
  );
};
export default function Products() {
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

  return (
    <div>
      <section className="products" id="products">
        <hr></hr>
        <h1 className="heading" class="text-center">
          <FcBookmark size={50} /> <span>Products</span>{' '}
          <FcBookmark size={50} />
        </h1>
        <hr></hr>
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
                  <img src={imgp1} alt="" class="img-fluid img-thumbnail" />
                  <h3>fresh orange</h3>
                  <div className="price">₹40.99/ -- 70.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      addToCart({
                        name: 'fresh orange',
                        price: '₹40.99/ -- 70.99/-',
                        image: imgp1,
                      })
                    }
                  >
                    add to cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={imgp2} alt="" class="img-fluid img-thumbnail" />
                  <h3>fresh onion</h3>
                  <div className="price">₹ 10.99/ -- 40.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      addToCart({
                        name: 'fresh onion',
                        price: '₹ 10.99/ -- 40.99/-',
                        image: imgp2,
                      })
                    }
                  >
                    add to cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={imgp3} alt="" class="img-fluid img-thumbnail" />
                  <h3>fresh meat</h3>
                  <div className="price">₹99.99/ -- 99.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      addToCart({
                        name: 'fresh meat',
                        price: '₹99.99/ -- 99.99/-',
                        image: imgp3,
                      })
                    }
                  >
                    add to cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={imgp4} alt="" class="img-fluid img-thumbnail" />
                  <h3>fresh cabbage</h3>
                  <div className="price">₹ 40.99/ -- 90.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      addToCart({
                        name: 'fresh cabbage',
                        price: '₹ 40.99/ -- 90.99/-',
                        image: imgp4,
                      })
                    }
                  >
                    add to cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={imgp5} alt="" class="img-fluid img-thumbnail" />
                  <h3>fresh grapes</h3>
                  <div className="price">₹40.99/ -- 70.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      addToCart({
                        name: 'fresh grapes',
                        price: '₹40.99/ -- 70.99/-',
                        image: imgp5,
                      })
                    }
                  >
                    add to cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={imgp6} alt="" class="img-fluid img-thumbnail" />
                  <h3>fresh mango</h3>
                  <div className="price">₹ 40.99/ -- 70.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      addToCart({
                        name: 'fresh mango',
                        price: '₹ 40.99/ -- 70.99/-',
                        image: imgp6,
                      })
                    }
                  >
                    add to cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={imgp7} alt="" class="img-fluid img-thumbnail" />
                  <h3>fresh avocado</h3>
                  <div className="price">₹ 50.99/ -- 80.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      addToCart({
                        name: 'fresh avocado',
                        price: '₹ 50.99/ -- 80.99/-',
                        image: imgp7,
                      })
                    }
                  >
                    add to cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={imgp8} alt="" class="img-fluid img-thumbnail" />
                  <h3>fresh broccoli</h3>
                  <div className="price">₹ 40.99/ -- 90.99/-</div>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                  </div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      addToCart({
                        name: 'fresh broccoli',
                        price: '₹ 40.99/ -- 90.99/-',
                        image: imgp8,
                      })
                    }
                  >
                    add to cart
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
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
       
      </section>
     
    </div>
  );
}






