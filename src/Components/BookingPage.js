import React from 'react';
import BookingForm from './BookingForm.js';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className="booking-page">
      <section className="booking-container">
        <h2>Reserve a Table</h2>
        <p>Use this page to book your table at Little Lemon.</p>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
    </div>
  );
}

export default BookingPage;
