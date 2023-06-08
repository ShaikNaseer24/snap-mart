import React from 'react'
import { FaShoppingCart} from 'react-icons/fa';

const CartButton = ({ cartItems, openCartPage }) => {
    return (
      <div className="cart-icon" onClick={openCartPage}>
        <FaShoppingCart />
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        <CartButton cartItems={cartItems} openCartPage={openCartPage} />
      </div>
    );
  };
  export default CartButton;