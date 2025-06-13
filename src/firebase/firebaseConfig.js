// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3d6YTTB3L1qUPgtyvxhcaRT5zD2pMfTQ",
  authDomain: "my-firebase-login-18234.firebaseapp.com",
  projectId: "my-firebase-login-18234",
  storageBucket: "my-firebase-login-18234.firebasestorage.app",
  messagingSenderId: "463050607662",
  appId: "1:463050607662:web:2d93f014698aa2913923bf",
  measurementId: "G-0GMN66KGBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
