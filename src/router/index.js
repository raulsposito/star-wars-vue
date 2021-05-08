import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/naves",
    name: "Naves",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Naves.vue"),
  },
  {
    path: "/planetas",
    name: "Planetas",
    component: () =>
      import("../views/Planetas.vue"),
  },
  {
    path: "/personajes",
    name: "Personajes",
    component: () =>
      import("../views/Personajes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
