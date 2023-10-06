// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import FrontPage from './components/FrontPage'; // Import the FrontPage component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/" element={<FrontPage />} /> {/* Add FrontPage route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
