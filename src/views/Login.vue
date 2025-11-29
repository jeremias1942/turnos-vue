<script setup>
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "vue-router";

const router = useRouter();

const loginGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);

    // Redirige al Dashboard después de iniciar sesión
    router.push("/dashboard");
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert("Hubo un error con Google Login.");
  }
};
</script>

<template>
  <div style="padding: 20px; text-align: center">
    <h1>Iniciar Sesión</h1>

    <button
      @click="loginGoogle"
      style="
        padding: 10px 20px;
        background: #4285f4;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
      "
    >
      Iniciar con Google
    </button>
  </div>
</template>
