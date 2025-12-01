// 🔥 Firebase Login Definitivo

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// ⚠️ PONÉ TU CONFIG ACA
const firebaseConfig = {
  apiKey: "AIzaSyCIy3N_XoZO_5S7ZRaaxogSt3svwvk3MkE",
  authDomain: "turnos-2d4c2.firebaseapp.com",
  projectId: "turnos-2d4c2",
  storageBucket: "turnos-2d4c2.firebasestorage.app",
  messagingSenderId: "856314969812",
  appId: "1:856314969812:web:8345f82c3f13964d000541"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // 👉 GUARDAR USUARIO PARA EL ROUTER
  localStorage.setItem("user", JSON.stringify({
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    photo: user.photoURL,
  }));

  return user;
}

export function logout() {
  localStorage.removeItem("user");
}
