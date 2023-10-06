// src/actions/counterActions.js

export const addCounter = (counterName) => ({
    type: 'ADD_COUNTER',
    payload: { name: counterName, value: 0 }, // You can set an initial value here
  });
  
  export const removeCounter = (counterId) => ({
    type: 'REMOVE_COUNTER',
    payload: counterId,
  });
  
  export const incrementCounter = (counterId) => ({
    type: 'INCREMENT_COUNTER',
    payload: counterId,
  });
  
  export const decrementCounter = (counterId) => ({
    type: 'DECREMENT_COUNTER',
    payload: counterId,
  });
  
  export const resetCounter = (counterId) => ({
    type: 'RESET_COUNTER',
    payload: counterId,
  });
  
  // Add any other actions you need
  