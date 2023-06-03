import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoQLPyHZtUAbToCwxsUD6ZA1CwbgvzES4",
  authDomain: "priyank-portfolio-37c76.firebaseapp.com",
  projectId: "priyank-portfolio-37c76",
  storageBucket: "priyank-portfolio-37c76.appspot.com",
  messagingSenderId: "319663743865",
  appId: "1:319663743865:web:31fdecb3b92f504abf85a8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()