import { initializeTimes, updateTimes } from './BookingLogic';

// ✅ Step 1: Mock the global fetchAPI
global.fetchAPI = jest.fn(); // Use Jest mock

describe('Booking API Logic', () => {

  beforeEach(() => {
    // Reset mocks before each test
    fetchAPI.mockReset();
  });

  test('initializeTimes returns available times from fetchAPI', () => {
    const mockTimes = ['17:00', '18:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes returns new times when dispatching UPDATE_TIMES', () => {
    const selectedDate = new Date('2025-05-30');
    const mockTimes = ['17:30', '18:30', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = updateTimes([], { type: 'UPDATE_TIMES', date: selectedDate });
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes returns same state if action type is unrecognized', () => {
    const initialState = ['17:00', '18:00'];
    const result = updateTimes(initialState, { type: 'UNKNOWN_ACTION' });
    expect(result).toEqual(initialState);
  });

});
