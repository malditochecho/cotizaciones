import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// componente registrado globalmente
// se puede usar directamente en otros componentes (ej. App.vue)
import NavBar from "@/components/NavBar.vue";
Vue.component("NavBar", NavBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
