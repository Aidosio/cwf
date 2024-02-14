import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCA6VgQkfEy0Je4krC8u73Tk06DfI-a-20",
    authDomain: "cwf-chat-cf1bb.firebaseapp.com",
    projectId: "cwf-chat-cf1bb",
    storageBucket: "cwf-chat-cf1bb.appspot.com",
    messagingSenderId: "208227114712",
    appId: "1:208227114712:web:e88b55ef5d6227781201ad"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);

const provider = new GoogleAuthProvider();
export const signInWithGooglePopup = () => signInWithPopup(FIREBASE_AUTH, provider);
