
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNTgprGh54mL4xghiCGIYAL5yYWY4s330",
  authDomain: "carrentalcompany-9d8a3.firebaseapp.com",
  projectId: "carrentalcompany-9d8a3",
  storageBucket: "carrentalcompany-9d8a3.appspot.com",
  messagingSenderId: "869495149715",
  appId: "1:869495149715:web:f37ac6eb6d4faea7066966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}