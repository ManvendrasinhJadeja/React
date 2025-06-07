// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8Ewr6lC-uDA5HW3yVsV8G_r8iFh6Ba4g",
  authDomain: "fir-mainproject-e327c.firebaseapp.com",
  projectId: "fir-mainproject-e327c",
  storageBucket: "fir-mainproject-e327c.firebasestorage.app",
  messagingSenderId: "934434471204",
  appId: "1:934434471204:web:52aba3a71775ccd1d907b1"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);  
 export const auth =getAuth()
 export const googleProvider = new GoogleAuthProvider();