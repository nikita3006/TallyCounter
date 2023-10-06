// src/components/CounterList.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCounter,
  removeCounter,
  increment,
  decrement,
  reset,
} from '../actions/counterReducer';

const CounterList = () => {
  const [newCounterName, setNewCounterName] = useState('');
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counters);

  const handleAddCounter = () => {
    if (newCounterName.trim() !== '') {
      dispatch(addCounter(newCounterName));
    

    fetch('https://tally-counter-a943b-default-rtdb.asia-southeast1.firebasedatabase.app/counter.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({newCounterName}),
  })
    .then(response => response.json())
    .then(data => {
      // Handle success if needed
      console.log("Mail stored in Firebase:", data);
    })
    .catch(error => {
      // Handle error if needed
      console.error("Error storing mail in Firebase:", error);
    });

      setNewCounterName('');
    }
  };

  return (
    <div className="counter-list">
      <h2>Counters</h2>
      <div>
        <input
          type="text"
          placeholder="Counter Name"
          value={newCounterName}
          onChange={(e) => setNewCounterName(e.target.value)}
        />
        <button onClick={handleAddCounter}>Add Counter</button>
      </div>
      <div className="counters-container">
        {counters.map((counter) => (
          <div key={counter.id} className="counter">
            <h3>{counter.name}</h3>
            <p>Count: {counter.value}</p>
            <button onClick={() => dispatch(increment(counter.id))}>+</button>
            <button onClick={() => dispatch(decrement(counter.id))}>-</button>
            <button onClick={() => dispatch(reset(counter.id))}>Reset</button>
            <button onClick={() => dispatch(removeCounter(counter.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterList;
