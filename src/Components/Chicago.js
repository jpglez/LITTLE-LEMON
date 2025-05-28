//import Homepage from './Homepage';
import React from 'react';
import homeImg from '../assets/images/home.jpg'
function Chicago() {
  return (
    <div className="chicago">
    <main>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>
        We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
      </p>
      <img src={homeImg} alt="Home" className='Chicago-image'/>
    </main>
    </div>
  );
}

export default Chicago;
