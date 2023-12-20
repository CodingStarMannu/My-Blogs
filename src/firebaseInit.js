// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR4jFMC1MP0glEovVtMJ6A6AhD57wBO5Q",
  authDomain: "blogging-app-a9870.firebaseapp.com",
  projectId: "blogging-app-a9870",
  storageBucket: "blogging-app-a9870.appspot.com",
  messagingSenderId: "648167331931",
  appId: "1:648167331931:web:4662eccb8359d66562c77e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);