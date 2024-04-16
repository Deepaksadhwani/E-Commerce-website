// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvxV-KzJD5h2_F7XOq4dDRaoAJH3NPNFY",
  authDomain: "e-commerce-website-portal.firebaseapp.com",
  databaseURL: "https://e-commerce-website-portal-default-rtdb.firebaseio.com",
  projectId: "e-commerce-website-portal",
  storageBucket: "e-commerce-website-portal.appspot.com",
  messagingSenderId: "210747913893",
  appId: "1:210747913893:web:f23e732f012addc24dff4c",
  measurementId: "G-3RB9V3Z1DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);