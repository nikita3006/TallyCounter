// src/services/firestoreService.js

import { firestore } from '../firebase';

// Function to save counter data to Firestore
export const saveCounterData = (userId, counters) => {
  const userDocRef = firestore.collection('users').doc(userId);
  return userDocRef.set({ counters });
};

// Function to load counter data from Firestore
export const loadCounterData = (userId) => {
  const userDocRef = firestore.collection('users').doc(userId);
  return userDocRef.get().then((doc) => {
    if (doc.exists) {
      return doc.data().counters;
    } else {
      return [];
    }
  });
};
