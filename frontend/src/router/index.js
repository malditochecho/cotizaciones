import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Clientes from "../views/Clientes.vue";
// import Cotizaciones from "../views/Cotizaciones.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cotizaciones",
    name: "Cotizaciones",
    component: () => import("../views/Cotizaciones.vue"),
  },
  {
    path: "/clientes",
    name: "MantenedorClientes",
    component: () => import("../views/MantenedorClientes.vue"),
  },
  {
    path: "/productos",
    name: "MantenedorProductos",
    component: () => import("../views/MantenedorProductos.vue"),
  },
  {
    path: "/servicios",
    name: "MantenedorServicios",
    component: () => import("../views/MantenedorServicios.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
