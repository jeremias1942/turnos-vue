import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import DashboardView from "./views/DashboardView.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/dashboard", component: DashboardView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
