<template>
  <div class="login-container">
    <h2>Sistema de Turnos</h2>
    <button @click="loginGoogle">Ingresar con Google</button>
  </div>
</template>

<script setup>
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const loginGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    console.log("Usuario logueado:", result.user);

    // Después lo vamos a derivar según el rol (admin general, negocio, cliente)
    window.location.href = "/dashboard";
  } catch (err) {
    console.error("Error en login:", err)
  }
};
</script>

<style>
.login-container {
  margin-top: 60px;
  text-align: center;
}
</style>
