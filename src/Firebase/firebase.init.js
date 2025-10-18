// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZZaWFvJflLzCFTdzYfMzjdmeOlqEMcDk",
    authDomain: "fir-fiterp.firebaseapp.com",
    projectId: "fir-fiterp",
    storageBucket: "fir-fiterp.firebasestorage.app",
    messagingSenderId: "45737252763",
    appId: "1:45737252763:web:8ac8e981f8dd3fe5dcf33e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);