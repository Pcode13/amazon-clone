// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Yw4G6y3zzq10Y_mM5zLH0b1nVXRgqzo",
  authDomain: "clone-e6200.firebaseapp.com",
  projectId: "clone-e6200",
  storageBucket: "clone-e6200.firebasestorage.app",
  messagingSenderId: "578001871980",
  appId: "1:578001871980:web:4366ed13421768ad4f2449",
  measurementId: "G-HVCDDPN5K9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
