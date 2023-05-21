// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9gOetNNR6vCltoBxAcHwfUvKKXp7wU8I",
  authDomain: "wikit-xino.firebaseapp.com",
  projectId: "wikit-xino",
  storageBucket: "wikit-xino.appspot.com",
  messagingSenderId: "1006145371026",
  appId: "1:1006145371026:web:ede61cc6179d280c071f4b",
  measurementId: "G-E6RKPVEWST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);