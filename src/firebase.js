// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from 'firebase/auth'; // Import auth from the modular SDK
import { getDatabase } from 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIB2wVOHGMLYX9BtT54ODU_SPdQqCZgVM",
    authDomain: "tally-counter-a943b.firebaseapp.com",
    projectId: "tally-counter-a943b",
    storageBucket: "tally-counter-a943b.appspot.com",
    messagingSenderId: "771709649969",
    appId: "1:771709649969:web:e483297d473a2fda2e0110",
    databaseURL: 'https://tally-counter-a943b-default-rtdb.asia-southeast1.firebasedatabase.app/',
    measurementId: "G-1WM3XGM3M0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Create a GoogleAuthProvider instance

// Function to sign in with Google
const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Sign-in successful, user is now authenticated
    } catch (error) {
      // Handle sign-in error
      console.error('Sign-in with Google failed:', error);
    }
  };

const signUpWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        
        // If the user is new, set their display name to something meaningful
        if (user.additionalUserInfo.isNewUser) {
        await updateProfile(user, {
            displayName: 'Your Default Display Name'
        });
        }

        // Sign-up successful, user is now authenticated
    } catch (error) {
        // Handle sign-up error
        console.error('Sign-up with Google failed:', error);
    }
};
  
// Function to sign out
const signOutUser = async () => {
    try {
        await signOut(auth);
        // Sign-out successful
    } catch (error) {
        // Handle sign-out error
        console.error('Sign-out failed:', error);
    }
};
const database = getDatabase(app);

export { app, auth, provider, signInWithGoogle, signOutUser, signUpWithGoogle, database};