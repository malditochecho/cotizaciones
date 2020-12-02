import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clienteNuevo: {},
    listaCotizaciones: [],
    listaClientes: [],
    listaProductos: [],
    listaServicios: [],
    listaNombresClientes: [],
    objetoEnEdicionEnFormulario: {},
    modoEditando: {},
  },
  mutations: {
    // mutations de clientes
    OBTENER_TODOS_LOS_CLIENTES(state, clientes) {
      state.listaClientes = clientes.data;
    },
    GUARDAR_CLIENTE_NUEVO(state, cliente) {
      state.listaClientes.push(cliente);
    },
  },
  actions: {
    // actions de clientes
    obtenerTodosLosClientes({ commit }) {
      return EventService.obtenerTodosLosClientes().then((response) => {
        commit("OBTENER_TODOS_LOS_CLIENTES", response);
      });
    },
    guardarClienteNuevo({ commit }, cliente) {
      return EventService.guardarClienteNuevo(cliente).then((response) => {
        commit("GUARDAR_CLIENTE_NUEVO", response);
      });
    },
  },
  getters: {},
});
