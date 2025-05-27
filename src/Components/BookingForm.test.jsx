import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  const mockAvailableTimes = ['17:00', '18:00'];
  const mockOnDateChange = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onDateChange={mockOnDateChange}
        submitForm={mockSubmitForm}
      />
    );
  });

  test('renders the date input', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeInTheDocument();
  });

  test('renders all required HTML5 validations', () => {
    expect(screen.getByLabelText(/choose date/i)).toBeRequired();
    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
    expect(screen.getByLabelText(/number of guests/i)).toBeRequired();
    expect(screen.getByLabelText(/occasion/i)).toBeRequired();

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('calls submitForm with correct values when form is valid', () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-06-01' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '18:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '4' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2025-06-01',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
    });
  });

  test('does not call submitForm if form is not filled out', () => {
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });
});
