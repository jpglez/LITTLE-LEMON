import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';

// Función para inicializar las horas disponibles
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

// Función reductora para actualizar las horas (más adelante puedes personalizarla por fecha)
const updateTimes = (state, action) => {
  // action.date podría usarse para lógica basada en la fecha
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
    </main>
  );
}

export default Main;
