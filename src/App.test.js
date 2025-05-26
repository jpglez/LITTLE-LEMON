import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders homepage or navigation text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navElement = screen.getByText(/reservar|booking|little lemon/i); // Ajusta el texto que realmente está en tu app
  expect(navElement).toBeInTheDocument();
});
