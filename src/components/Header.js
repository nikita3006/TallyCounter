// Header.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../firebase'; // Implement this function to sign out

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = async () => {
    try {
      await signOutUser(); // Implement this function to sign the user out
      // Dispatch action to reset authentication status in Redux
    } catch (error) {
      // Handle sign-out error
      console.error('Sign-out failed:', error);
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>{user ? `Welcome, ${user.displayName}` : 'Welcome'}</li>
          {user && (
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
