import React from 'react'
import {useState, useEffect} from 'react';
import { GiShoppingCart} from 'react-icons/gi';
export default function Cart1() {
    const [itemCount, setItemCount] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    
  
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
  


  return (
    <div>

          
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
         
          </div>
        ) : (
          <div className="cart-icon">
            <GiShoppingCart size={35}/>
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </div>
        )}
    </div>
  )
}
