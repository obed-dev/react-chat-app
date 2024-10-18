// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiBpfkUiO9kQMCwKdr3fPi_WStnxoaeyQ",
  authDomain: "chat-app-ec5ab.firebaseapp.com",
  projectId: "chat-app-ec5ab",
  storageBucket: "chat-app-ec5ab.appspot.com",
  messagingSenderId: "276844968472",
  appId: "1:276844968472:web:a7df123051e044890d616d",
  measurementId: "G-R8VH6L986M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth( app );
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);