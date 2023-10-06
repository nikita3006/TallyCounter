// FrontPage.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithGoogle, signUpWithGoogle } from '../firebase'; // Import your authentication functions

const FrontPage = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle(); // Call your authentication function, e.g., signInWithGoogle
      // Redirect to the homepage on successful login using <Navigate />
      console.log("hello")
      navigate("/home")
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      await signUpWithGoogle(); // Call your authentication function, e.g., signUpWithGoogle
      // Redirect to the homepage on successful signup using <Navigate />
      navigate("/home")
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to Tally Counter App</h1>
      <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      <button onClick={handleSignUpWithGoogle}>Sign up with Google</button>
    </div>
  );
};

export default FrontPage;
