// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJpVtHuubQD6hf9do4Ff6v7IuftiG65EY",
    authDomain: "mi-promer-proyecto---coder.firebaseapp.com",
    projectId: "mi-promer-proyecto---coder",
    storageBucket: "mi-promer-proyecto---coder.firebasestorage.app",
    messagingSenderId: "286588379294",
    appId: "1:286588379294:web:90492038db8ecb07a85b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);