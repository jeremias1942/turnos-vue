<template>
  <div class="dashboard">
    <h1>Panel</h1>

    <p>Sesión iniciada correctamente.</p>

    <h2>Bienvenido {{ user?.displayName }} </h2>
    <ul>
      <li><strong>Correo electrónico:</strong> {{ user?.email }}</li>
      <li><strong>Identificador de usuario:</strong> {{ user?.uid }}</li>
    </ul>

    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script setup>
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useRouter } from "vue-router"
import { ref } from "vue"

const router = useRouter()
const user = ref(null)

// Escuchar usuario logueado
onAuthStateChanged(auth, (u) => {
  if (u) {
    user.value = u
  } else {
    router.push("/login")
  }
})

// Cerrar sesión
const logout = async () => {
  await signOut(auth)
  router.push("/login")
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}
button {
  padding: 8px 16px;
  margin-top: 20px;
}
</style>
