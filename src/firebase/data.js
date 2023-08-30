// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVOoo6lAP6lTTlI0R6x2z41LpBa_QsEx0",
    authDomain: "kousyn-burgers.firebaseapp.com",
    projectId: "kousyn-burgers",
    storageBucket: "kousyn-burgers.appspot.com",
    messagingSenderId: "878971180545",
    appId: "1:878971180545:web:ed33fd835eeeeb15c19200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);