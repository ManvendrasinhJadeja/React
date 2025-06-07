// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Database } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDue64pQbPeZ1EBYYAbspt8GvD9GE1Ukxs",
  authDomain: "project1-test-2f91e.firebaseapp.com",
  projectId: "project1-test-2f91e",
  storageBucket: "project1-test-2f91e.firebasestorage.app",
  messagingSenderId: "1042806182859",
  appId: "1:1042806182859:web:afb003cea7a316927d5c4e",
  databaseURL:"https://project1-test-2f91e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
