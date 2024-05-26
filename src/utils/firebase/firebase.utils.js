// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
     getAuth, 
    signInWithRedirect, 
    GoogleAuthProvider,
    signInWithPopup,

} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2P6c3gMPgUhL4gBRvNkrzQqYv_zXniHQ",
  authDomain: "cawi-toolkit.firebaseapp.com",
  projectId: "cawi-toolkit",
  storageBucket: "cawi-toolkit.appspot.com",
  messagingSenderId: "931579483280",
  appId: "1:931579483280:web:d499f0e96afd9edc95b415",
  measurementId: "G-T86SN2H880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); 
// A class that Google provides, somnetimes we want to generate more providers 
// Instruction for this specific provider

provider.setCustomParameters({ prompt: 'select_account' }); // Google config style that they want 
export const auth = getAuth(); // singleton, only one instance of auth in the app
export const signInWithGoogle = () => signInWithPopup(auth, provider);