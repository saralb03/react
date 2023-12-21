// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq1UV0A9G6cWweZt_V7juv5IaudkNyX_Y",
  authDomain: "slb-37d62.firebaseapp.com",
  projectId: "slb-37d62",
  storageBucket: "slb-37d62.appspot.com",
  messagingSenderId: "419495444501",
  appId: "1:419495444501:web:63744ec58a1a2010ea8e1c"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();

