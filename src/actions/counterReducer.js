// src/reducers/counterReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const counterSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
        value: 0,
      });
    },
    removeCounter: (state, action) => {
      return state.filter((counter) => counter.id !== action.payload);
    },
    increment: (state, action) => {
      const counter = state.find((c) => c.id === action.payload);
      if (counter) {
        counter.value += 1;
      }
    },
    decrement: (state, action) => {
      const counter = state.find((c) => c.id === action.payload);
      if (counter && counter.value > 0) {
        counter.value -= 1;
      }
    },
    reset: (state, action) => {
      const counter = state.find((c) => c.id === action.payload);
      if (counter) {
        counter.value = 0;
      }
    },
  },
});

export const {
  addCounter,
  removeCounter,
  increment,
  decrement,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
