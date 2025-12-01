<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded shadow mt-6">
    <h2 class="text-xl font-bold mb-4">Mis Turnos</h2>
    <ul>
      <li v-for="t in turnos" :key="t.id" class="border-b py-2 flex justify-between items-center">
        <span>{{ t.servicio.nombre }} - {{ t.fecha }} {{ t.hora }} - {{ t.estado }}</span>
        <button v-if="t.estado==='pendiente'" @click="cancelarTurno(t.id)" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
          Cancelar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../axios' // Ruta completa: turnos-vue/src/axios.js

export default {
  data() {
    return {
      turnos: []
    }
  },
  async mounted() {
    await this.cargarTurnos()
  },
  methods: {
    async cargarTurnos() {
      try {
        const res = await api.get('/turnos')
        this.turnos = res.data
      } catch (error) {
        console.error('Error al cargar turnos', error)
      }
    },
    async cancelarTurno(id) {
      if (!confirm('¿Desea cancelar este turno?')) return
      try {
        await api.delete(`/turnos/${id}`)
        this.cargarTurnos()
      } catch (error) {
        console.error(error)
        alert('Error al cancelar turno')
      }
    }
  }
}
</script>
