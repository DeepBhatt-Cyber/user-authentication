// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authproject-a2919.firebaseapp.com",
  projectId: "authproject-a2919",
  storageBucket: "authproject-a2919.firebasestorage.app",
  messagingSenderId: "179039289270",
  appId: "1:179039289270:web:8dc68f47b7cd6475154b17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

