<template>
  <div class="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
    <div class="bg-white p-4 rounded shadow text-center" style="width: 350px;">
      <h1 class="h4 mb-4">Iniciar sesión</h1>

      <button @click="login" class="btn btn-danger w-100">
        Ingresar con Google
      </button>
    </div>
  </div>
</template>

<script>
import { loginWithGoogle } from "../firebase";

export default {
  name: "Login",
  methods: {
    async login() {
      try {
        await loginWithGoogle();
        this.$router.push("/home");
      } catch (error) {
        console.error("Error en login", error);
        alert("No se pudo iniciar sesión");
      }
    }
  }
};
</script>
