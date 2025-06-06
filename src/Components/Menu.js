// src/Components/Menu.js or src/Pages/Menu.js
import React from 'react';
import bruschettaImg from '../assets/images/bruschetta.svg'
import lemonImg from '../assets/images/lemon.jpg'
import saladImg from '../assets/images/salad.jpg'

function Menu() {
  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      <section className="menu-section">
        <h2>Appetizers</h2>
        <div className="menu-item bruschetta">
            <img src={bruschettaImg} alt="Bruschetta" className= "bruschetta"/>
          <h3>Bruschetta</h3>
          <p>Grilled bread topped with fresh tomatoes, garlic, and olive oil.</p>
        </div>
      </section>

      <section className="menu-section">
        <h2>Main Course</h2>
        <div className="menu-item greek-salad">
            <img src={saladImg} alt="Salad" className= "salad"/>
          <h3>Greek Salad</h3>
          <p>Crisp lettuce, cucumbers, onions, olives, and feta cheese tossed in a lemon-oregano vinaigrette.</p>
        </div>
      </section>

      <section className="menu-section">
        <h2>Desserts</h2>
        <div className="menu-item lemon">
            <img src={lemonImg} alt="Lemon" className= "lemon"/>
          <h3>Lemon Dessert</h3>
          <p>A zesty lemon cake served with a citrus glaze and a dollop of whipped cream.</p>
        </div>
      </section>
    </div>
  );
}

export default Menu;
