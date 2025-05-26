import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the BookingForm heading', () => {
  const mockDispatch = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00'];

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  const headingElement = screen.getByLabelText(/choose date/i);
  expect(headingElement).toBeInTheDocument();
});
