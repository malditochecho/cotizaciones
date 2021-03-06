import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Cotizaciones from "@/views/MantenedorCotizaciones.vue";
import Clientes from "@/views/MantenedorClientes.vue";
import Servicios from "@/views/MantenedorServicios.vue";
import Productos from "@/views/MantenedorProductos.vue";

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
    component: Cotizaciones,
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: Clientes,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  },
  {
    path: "/servicios",
    name: "Servicios",
    component: Servicios,
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
