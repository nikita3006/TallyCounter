import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, removeCounter, changeCounterName, setCounterValue } from '../actions/counterActions';
import './CounterItem.css';

const CounterItem = ({ counter }) => {
  const dispatch = useDispatch();
  const [counterValue, setCounterValueLocal] = useState(counter.value);
  const [counterName, setCounterName] = useState(counter.name);
  const [isEditingValue, setIsEditingValue] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  const handleIncrement = () => {
    dispatch(incrementCounter(counter.id));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(counter.id));
  };

  const handleReset = () => {
    dispatch(resetCounter(counter.id));
  };

  const handleRemove = () => {
    dispatch(removeCounter(counter.id));
  };

  const handleNameChange = () => {
    dispatch(changeCounterName(counter.id, counterName));
    setIsEditingName(false);
  };

  const handleValueChange = () => {
    dispatch(setCounterValue(counter.id, parseInt(counterValue)));
    setIsEditingValue(false);
  };

  return (
    <div className="counter-item">
      <h3 className="counter-name">
        {isEditingName ? (
          <input
            type="text"
            value={counterName}
            onChange={(e) => setCounterName(e.target.value)}
            onBlur={handleNameChange}
          />
        ) : (
          <span onClick={() => setIsEditingName(true)}>{counterName}</span>
        )}
      </h3>
      <p className="counter-value">
        {isEditingValue ? (
          <input
            type="number"
            value={counterValue}
            onChange={(e) => setCounterValueLocal(e.target.value)}
            onBlur={handleValueChange}
          />
        ) : (
          <span onClick={() => setIsEditingValue(true)}>{counterValue}</span>
        )}
      </p>
      <div className="button-container">
        <button className="increment-button" onClick={handleIncrement}>
          Increment
        </button>
        <button className="decrement-button" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
        <button className="remove-button" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CounterItem;
