// init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfmdoV9Hh1BKf8qiClZW2QJ0nVvtsYWf4",
  authDomain: "week7-abhimanyu.firebaseapp.com",
  projectId: "week7-abhimanyu",
  storageBucket: "week7-abhimanyu.appspot.com",
  messagingSenderId: "1055195233032",
  appId: "1:1055195233032:web:c40b4aff6fa26a21c58abd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services to use throughout your app
export { auth, db };
