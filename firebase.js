// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDvwqIlAQQ-ho6lxeqf_cDuWflICLqQPz8",
  authDomain: "smart-6ef93.firebaseapp.com",
  projectId: "smart-6ef93",
  storageBucket: "smart-6ef93.firebasestorage.app",
  messagingSenderId: "896975193684",
  appId: "1:896975193684:web:aa44bb4ba6f6655c2c8fc1",
  measurementId: "G-GS31R4H5Y2"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firebase Auth instance
const auth = getAuth(app);

export { auth };
