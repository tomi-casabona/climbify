import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCURs3ZTOllBMYC2QbO0O4nwZ8d6ReFAHU",
  authDomain: "climbify-147d9.firebaseapp.com",
  projectId: "climbify-147d9",
  storageBucket: "climbify-147d9.appspot.com",
  messagingSenderId: "245557677145",
  appId: "1:245557677145:web:1db164e572084e7322f548",
  measurementId: "G-42S1HZXGKS",
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const analyticsFirebase = getAnalytics(appFirebase);
export const auth: Auth = getAuth(appFirebase); // Asignar tipo explícito a auth
export const db = getFirestore(appFirebase);