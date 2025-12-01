import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Cambialo cuando subas tu backend
});

export default api;
