// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkVoTcSaAxmmJnZ2IAecXvMAhZQ8cTk20",
  authDomain: "red-social-961c1.firebaseapp.com",
  projectId: "red-social-961c1",
  storageBucket: "red-social-961c1.appspot.com",
  messagingSenderId: "102064328668",
  appId: "1:102064328668:web:95ea4a355eb98d8e438919",
  measurementId: "G-59Y7JBD4QS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
