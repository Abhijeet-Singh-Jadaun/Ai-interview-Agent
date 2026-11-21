
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewiq-c3d67.firebaseapp.com",
  projectId: "interviewiq-c3d67",
  storageBucket: "interviewiq-c3d67.firebasestorage.app",
  messagingSenderId: "401734946720",
  appId: "1:401734946720:web:257835dbf4ed70b3d69ec5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}