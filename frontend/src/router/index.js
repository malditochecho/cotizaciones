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
    component: Home
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: () =>
      import("../views/Clientes.vue")
  },
  {
    path: "/cotizaciones",
    name: "Cotizaciones",
        component: () =>
      import("../views/Cotizaciones.vue")
  },
  {
    path: "/about",
    name: "About",  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
