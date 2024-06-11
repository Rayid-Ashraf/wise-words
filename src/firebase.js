// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC32df7F0VZj7eck1LEmc75KPr3Z9IMjZE",
    authDomain: "wisewords-5b2c6.firebaseapp.com",
    projectId: "wisewords-5b2c6",
    storageBucket: "wisewords-5b2c6.appspot.com",
    messagingSenderId: "1049989436032",
    appId: "1:1049989436032:web:ec85038ae4f08cc4228c65",
    measurementId: "G-G929EP6E5P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);