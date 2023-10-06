// PrivateRoute.js

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route
        {...rest}
        element={isAuthenticated ? <Element /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default PrivateRoute;
