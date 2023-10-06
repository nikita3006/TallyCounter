// HomePage.js

import React from 'react';
import { useSelector } from 'react-redux';
import CounterList from './CounterList';
import Header from './Header';

const HomePage = () => {

  return (
    <div>
      {<CounterList />}
    </div>
  );
};

export default HomePage;
