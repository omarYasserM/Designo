// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpFToS3iK1yIFaAg4TrRumGeSsKY00Mow",
  authDomain: "appnote-b81c8.firebaseapp.com",
  projectId: "appnote-b81c8",
  storageBucket: "appnote-b81c8.appspot.com",
  messagingSenderId: "11359494632",
  appId: "1:11359494632:web:969e5af8c4dc97fc41445d",
  measurementId: "G-46PE0V83PQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
