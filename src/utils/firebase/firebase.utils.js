// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
     getAuth, 
    signInWithRedirect, 
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,

} from "firebase/auth";

import {
    getFirestore,
    getDoc,
    doc,
    setDoc,
} from "firebase/firestore";

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

export const db = getFirestore(); // singleton, only one instance of db in the app

/**
 * User authentication function 
 * Create userDoc if user does not exist in the database
 * @param {*} userAuth - google user authentication object that includes uid, email, displayName, etc.
 */
export const createUserDocFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid); // Three arguments, db, collection, document ID

    const userSnapShot = await getDoc(userDocRef); // Get the document snapshot
    console.log(userSnapShot.exists());
    if (!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName: displayName,
        email: email,
        createdAt: new Date(),
            });
        } catch (error) {
            console.error("Error creating user", error.message);
        }
    }

}


/**
 * 
 * @param {*} userId 
 * @param {*} moduleId 
 * @returns 
 */
export const getProgress = async (userId, moduleId) => {
    const userDocRef = doc(db, 'users',userId); // Three arguments, db, collection, document ID

    const userSnapShot = await getDoc(userDocRef); // Get the document snapshot
    console.log(userSnapShot.exists());
    if (userSnapShot.exists()){
        const progress = userSnapShot.data().progress;
        return progress;
    }

};

  

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);