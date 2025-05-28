import React, { useState } from 'react';
import bruschettaImg from '../assets/images/bruschetta.svg'
import lemonImg from '../assets/images/lemon.jpg'
import saladImg from '../assets/images/salad.jpg'

const menuItems = [
  { id: 1, name: "Bruschetta", price: 6.99, image: bruschettaImg },
  { id: 2, name: "Greek Salad", price: 8.49, image: saladImg },
  { id: 3, name: "Lemon Dessert", price: 5.99, image: lemonImg },
];

function OrderOnline() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="order-container">
      <div className="menu-section">
        <h2>Order Online</h2>
        <div className="menu-list">
          {menuItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button
                className={`add-btn ${item.name === "Bruschetta" ? "bruschetta-btn" : ""}`}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-section">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <div className="cart-summary">
        <h3>Total: ${getTotal()}</h3>
        <button disabled={cart.length === 0}>Checkout</button>
      </div>
      </div>
    </div>
  );
}

export default OrderOnline;
