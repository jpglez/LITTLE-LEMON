import React from 'react';
import BookingForm from './BookingForm.js';

function BookingPage({ availableTimes, dispatchDateChange, submitForm }) {
  return (
    <div className="booking-page">
      <section className="booking-container">
        <h2>Reserve a Table</h2>
        <p>Use this page to book your table at Little Lemon.</p>
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={dispatchDateChange}
          submitForm={submitForm} // ✅ Pass the function here
        />
      </section>
    </div>
  );
}

export default BookingPage;
