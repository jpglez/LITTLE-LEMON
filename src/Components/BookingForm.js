import React, { useState } from 'react';

function BookingForm({ availableTimes, onDateChange, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { date, time, guests, occasion };
    console.log('📤 Submitting form data:', formData);

    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    onDateChange(new Date(newDate));
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Reservation Form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-label="Reservation Date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Reservation Time"
      >
        <option value="">-- Select time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        min="1"
        max="10"
        required
        aria-label="Number of Guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-label="Occasion Type"
      >
        <option value="">-- Select occasion --</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Meeting">Meeting</option>
      </select>

      <button type="submit" aria-label="On Click">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
