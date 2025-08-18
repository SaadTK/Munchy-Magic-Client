// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6PNVhDn2qkbEXemATzte6zzq6d2L6UX0",
  authDomain: "munchy-magic.firebaseapp.com",
  projectId: "munchy-magic",
  storageBucket: "munchy-magic.firebasestorage.app",
  messagingSenderId: "743808887308",
  appId: "1:743808887308:web:02a00b5704d36b3e2bdc29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);