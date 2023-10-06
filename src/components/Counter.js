// src/components/Counter.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from '../actions/counterActions';

const Counter = ({ id, name, value }) => {
  const [counterValue, setCounterValue] = useState(value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
    dispatch(incrementCounter(id));
  };

  const handleDecrement = () => {
    setCounterValue(counterValue - 1);
    dispatch(decrementCounter(id));
  };

  const handleReset = () => {
    setCounterValue(0);
    dispatch(resetCounter(id));
  };

  return (
    <div className="counter">
      <h3>{name}</h3>
      <p>Count: {counterValue}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      {/* Add input field for counter label */}
    </div>
  );
};

export default Counter;
