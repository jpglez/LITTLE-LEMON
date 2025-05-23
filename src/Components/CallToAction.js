import React from 'react';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/booking');
  };

  return (
    <section className="cta-section">
      <div className="call-to-action">
        <h1>Experience the Taste of Tradition</h1>
        <p>Reserve your table now and enjoy our Mediterranean specialties in the heart of Chicago.</p>
        <button onClick={handleClick}>Book a Table</button>
      </div>
    </section>
  );
}

export default CallToAction;
