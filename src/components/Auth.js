// src/components/Auth.js

import React from 'react';
import { auth, provider } from '../firebase'; // Correct the import statement
import { signInWithPopup } from 'firebase/auth'; // Import auth from the modular SDK

const Auth = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error)
    })
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      {auth.currentUser ? (
        <div>
          <p>Welcome, {auth.currentUser.displayName}!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>You are not signed in.</p>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
