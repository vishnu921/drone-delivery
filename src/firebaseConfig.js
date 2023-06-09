
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmdevyo-ZrbxtrZWUZAT5GM0-vZU_aZhk",
  authDomain: "drone-delivery-af1d5.firebaseapp.com",
  projectId: "drone-delivery-af1d5",
  storageBucket: "drone-delivery-af1d5.appspot.com",
  messagingSenderId: "515044385956",
  appId: "1:515044385956:web:ad3916b661b90c94feb231"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)