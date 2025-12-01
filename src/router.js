import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import CrearTurno from "./views/CrearTurno.vue";
import MisTurnos from "./views/MisTurnos.vue";

const routes = [
  { path: "/", name: "login", component: Login },

  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/crear-turno",
    name: "crear-turno",
    component: CrearTurno,
    meta: { requiresAuth: true },
  },
  {
    path: "/mis-turnos",
    name: "mis-turnos",
    component: MisTurnos,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔒 PROTECCIÓN DE RUTAS
router.beforeEach((to, from, next) => {
  const logged = localStorage.getItem("user");

  if (to.meta.requiresAuth && !logged) {
    return next({ name: "login" });
  }

  next();
});

export default router;
