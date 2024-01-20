import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import 'dotenv/config';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGiIqL80Uw84e0JeAW-J0HSMqU1gH6J3I",
  authDomain: "poseidon-app-a7605.firebaseapp.com",
  projectId: "poseidon-app-a7605",
  storageBucket: "poseidon-app-a7605.appspot.com",
  messagingSenderId: "696977064948",
  appId: "1:696977064948:web:f13481b12689529acdefa1",
  measurementId: "G-Y14JDTPG95"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase