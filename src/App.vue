<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-light bg-light px-3 d-flex justify-content-between">
      <span class="navbar-brand mb-0 h1">Sistema de Turnos</span>

      <button 
        v-if="isLogged" 
        @click="logout" 
        class="btn btn-outline-danger btn-sm"
      >
        Cerrar sesión
      </button>
    </nav>

    <!-- CONTENIDO DE LA APP -->
    <router-view></router-view>
  </div>
</template>

<script>
import { logout } from "./firebase";

export default {
  computed: {
    isLogged() {
      return localStorage.getItem("user") !== null;
    }
  },
  methods: {
    logout() {
      logout();
      this.$router.push("/");
    }
  }
};
</script>

<style>
/* estilos globales opcionales */
</style>
