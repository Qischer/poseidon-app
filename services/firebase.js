// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGiIqL80Uw84e0JeAW-J0HSMqU1gH6J3I",
  authDomain: "poseidon-app-a7605.firebaseapp.com",
  projectId: "poseidon-app-a7605",
  storageBucket: "poseidon-app-a7605.appspot.com",
  messagingSenderId: "696977064948",
  appId: "1:696977064948:web:f13481b12689529acdefa1",
  measurementId: "G-Y14JDTPG95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};