// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './actions/counterReducer';

const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

export default store;
