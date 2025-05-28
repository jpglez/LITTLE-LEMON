// Main.js
import React, { useReducer, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Menu from './Components/Menu';
import Order from './Components/Order';
import Login from './Components/Login';
import BookingPage from './Components/BookingPage';
import ConfirmedBooking from './Components/ConfirmedBooking';
import { fetchAPI, submitAPI } from './api'; // ✅ IMPORT CORRECTO

// Reducer para manejar los tiempos disponibles
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimes = async () => {
      const times = await fetchAPI(selectedDate);
      dispatch({ type: 'UPDATE_TIMES', times });
    };
    fetchTimes();
  }, [selectedDate]);

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      alert('Something went wrong, please try again.');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchDateChange={setSelectedDate}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/" element={<Homepage />}/>
      </Routes>
    </main>
  );
}

export default Main;