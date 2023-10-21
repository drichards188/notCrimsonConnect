// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtvJzUjNTCviwADQxGyheqtbxx7bkOhdY",
  authDomain: "cldgnjhackathon.firebaseapp.com",
  databaseURL: "https://cldgnjhackathon-default-rtdb.firebaseio.com",
  projectId: "cldgnjhackathon",
  storageBucket: "cldgnjhackathon.appspot.com",
  messagingSenderId: "660997313876",
  appId: "1:660997313876:web:2f76873c3b183a0982e4c1",
  measurementId: "G-WHK4GQJKBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = app.auth();
export { auth, firestore};