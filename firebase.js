// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNeLRRdrPW7_VtuuvqHXH_9Dwcp5vnAcI",
  authDomain: "instagram-v2-d190a.firebaseapp.com",
  projectId: "instagram-v2-d190a",
  storageBucket: "instagram-v2-d190a.appspot.com",
  messagingSenderId: "7679505076",
  appId: "1:7679505076:web:cda9433777450a71f95de1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
