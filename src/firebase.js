import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnrwyOTc7SLS78ulgjgKg2O6-LWwRal30",
  authDomain: "troll-2952b.firebaseapp.com",
  projectId: "troll-2952b",
  storageBucket: "troll-2952b.appspot.com",
  messagingSenderId: "750836535964",
  appId: "1:750836535964:web:5b18d5ffb8a87ea1e7d359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, db, timestamp };
