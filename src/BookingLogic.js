/* global fetchAPI */

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); // API call
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date); // API call
    default:
      return state;
  }
};
