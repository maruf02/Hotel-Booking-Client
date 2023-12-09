// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// require('dotenv').config();
// Your web app's Firebase configuration
// console.log(process.env.API_KEY);
// console.log(import.meta.env.API_KEY)
// console.log(import.meta.env.API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyBDGgp8h3UX1Uz4ct787M4dGXpqE22RbJ0",
  authDomain: "hotelbook-system.firebaseapp.com",
  projectId: "hotelbook-system",
  storageBucket: "hotelbook-system.appspot.com",
  messagingSenderId: "868002457808",
  appId: "1:868002457808:web:7118297f7f616df9ac16d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
