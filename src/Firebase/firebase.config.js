// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf9Yute46fPs2dBN-0_Zf1zI7yGw76LUU",
  authDomain: "library-management-f9e4f.firebaseapp.com",
  projectId: "library-management-f9e4f",
  storageBucket: "library-management-f9e4f.appspot.com",
  messagingSenderId: "122715827179",
  appId: "1:122715827179:web:faa99e5c43db520ab087ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;