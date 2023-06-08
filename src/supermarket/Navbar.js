import { FaShoppingCart } from 'react-icons/fa';
export default function Navbar({ cartItems }) {
    return (
        
      <nav>
        {/* Other navbar elements */}
        <div className="cart-link">
          <FaShoppingCart />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          {/* Render the cart items */}
          {cartItems.length > 0 && (
            <div className="cart-items-dropdown">
              {cartItems.map((item) => (
                <div key={item.name}>{/* Render the cart item details */}</div>
              ))}
            </div>
            
          )}
        </div>
      </nav>
      
    );
  }