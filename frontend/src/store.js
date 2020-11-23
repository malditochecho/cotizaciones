import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clienteNuevo: false,
    listaCotizaciones: [],
    listaClientes: [],
    listaProductos: [],
    listaServicios: [],
    cliente: {},
    nombre: "Mati",
  },
  mutations: {
    // mutations de cotizaciones
    OBTENER_COTIZACIONES(state, cotizaciones) {
      state.listaCotizaciones = cotizaciones;
    },

    // mutations de clientes
    OBTENER_CLIENTES(state, clientes) {
      state.listaClientes = clientes;
    },
    GUARDAR_CLIENTE(state, cliente) {
      state.listaClientes.push(cliente);
    },
    ELIMINAR_CLIENTE(state, id) {
      const index = state.listaClientes.findIndex(
        (cliente) => cliente.id == id
      );
      state.listaClientes.splice(index, 1);
    },
    DISABLE_BUTON(state) {
      state.clienteNuevo = true;
    },
    ENABLE_BUTON(state) {
      state.clienteNuevo = false;
    },
  },
  actions: {
    // actions de cotizaciones
    // obtenerCotizaciones({ commit }) {
    //   return EventService.obtenerCotizaciones().then((response) => {
    //     commit("OBTENER_COTIZACIONES", response.data);
    //   });
    // },
    obtenerCotizaciones({ commit }) {
      return EventService.obtenerCotizaciones().then((response) => {
        commit("OBTENER_COTIZACIONES", response.data);
      });
    },

    // actions de clientes
    obtenerClientes({ commit }) {
      return EventService.obtenerClientes().then((response) => {
        commit("OBTENER_CLIENTES", response.data);
      });
    },
    guardarCliente({ commit }, cliente) {
      return EventService.crearCliente(cliente).then((response) => {
        commit("GUARDAR_CLIENTE", response.data);
        console.log(response.data);
      });
    },
    eliminarCliente({ commit }, cliente) {
      return EventService.eliminarCliente(cliente).then(() => {
        commit("ELIMINAR_CLIENTE", cliente);
      });
    },
    activarBotonClienteNuevo({ commit }) {
      commit("DISABLE_BUTON");
    },
    desactivarBotonClienteNuevo({ commit }) {
      commit("ENABLE_BUTON");
    },

    // actions de servicios
    // actions de productos
  },
  getters: {
    obtenerCliente: (state) => (id) => {
      return state.listaClientes.find((cliente) => cliente.id === id);
    },
  },
});
