
<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded shadow mt-6">
    <h2 class="text-xl font-bold mb-4">Crear Turno</h2>
    <form @submit.prevent="crearTurno">
      <div class="mb-4">
        <label class="block mb-1 font-semibold">Servicio</label>
        <select v-model="servicio_id" class="w-full border rounded px-2 py-1">
          <option v-for="s in servicios" :key="s.id" :value="s.id">{{ s.nombre }}</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Fecha</label>
        <input type="date" v-model="fecha" class="w-full border rounded px-2 py-1" required>
      </div>

      <div class="mb-4">
        <label class="block mb-1 font-semibold">Hora</label>
        <input type="time" v-model="hora" class="w-full border rounded px-2 py-1" required>
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Reservar
      </button>
    </form>
  </div>
</template>

<script>
import api from '../axios' // Ruta completa: turnos-vue/src/axios.js

export default {
  data() {
    return {
      servicios: [],
      servicio_id: null,
      fecha: '',
      hora: ''
    }
  },
  async mounted() {
    try {
      const res = await api.get('/servicios')
      this.servicios = res.data
      if(this.servicios.length > 0) this.servicio_id = this.servicios[0].id
    } catch (error) {
      console.error('Error al cargar servicios', error)
    }
  },
  methods: {
    async crearTurno() {
      try {
        await api.post('/turnos', {
          servicio_id: this.servicio_id,
          fecha: this.fecha,
          hora: this.hora
        })
        alert('Turno creado correctamente')
        this.fecha = ''
        this.hora = ''
      } catch (error) {
        console.error(error)
        alert('Error al crear turno')
      }
    }
  }
}
</script>
