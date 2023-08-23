// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// import firebase from "firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvZhu6LsVLDzTDdM284Ohz7NXgbZEpLSk",
  authDomain: "netflix-e167f.firebaseapp.com",
  projectId: "netflix-e167f",
  storageBucket: "netflix-e167f.appspot.com",
  messagingSenderId: "675108511501",
  appId: "1:675108511501:web:6044f02f161ade8d18da44",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
