import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIy3N_XoZO_5S7ZRaaxogSt3svwvk3MkE",
  authDomain: "turnos-2d4c2.firebaseapp.com",
  projectId: "turnos-2d4c2",
  storageBucket: "turnos-2d4c2.firebasestorage.app",
  messagingSenderId: "856314969812",
  appId: "1:856314969812:web:8345f82c3f13964d000541"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

// Función de login con Google
export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider)
}
