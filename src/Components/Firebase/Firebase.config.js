// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRU2XmSLkCZqK4r8tjRlvxfxTjM5oFxQQ",
    authDomain: "hotelbooking-client.firebaseapp.com",
    projectId: "hotelbooking-client",
    storageBucket: "hotelbooking-client.appspot.com",
    messagingSenderId: "992069257849",
    appId: "1:992069257849:web:ccc3ce986581815937e2a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;