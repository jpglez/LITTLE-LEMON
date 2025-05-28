// src/Pages/About.js
import React from 'react';
import restaurantImg from '../assets/images/restaurant.jpg'

function About() {
  return (
    <div className="about">
      <main>
        <h2>Our Story</h2>
        <h3>2004</h3>
        <p>
           Little Lemon was founded by two passionate chefs, Mario and Adrian, who dreamed of bringing the vibrant flavors of the Mediterranean to the heart of Chicago. Inspired by their grandmother’s recipes and a love for fresh ingredients, Little Lemon blends tradition with a modern twist in every dish.
        </p>
        <img src={restaurantImg} alt="Restaurant" className='About-image'/>
      </main>
    </div>
  );
}

export default About;
