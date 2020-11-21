import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clienteNuevo: false,
    listaClientes: [],
    listaProductos: [],
    listaServicios: [],
    cliente: {},
    nombre: "Mati",
  },
  mutations: {
    OBTENER_CLIENTES(state, response) {
      state.listaClientes = response;
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
  },
  actions: {
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
  },
  getters: {
    obtenerCliente: (state) => (id) => {
      return state.listaClientes.find((cliente) => cliente.id === id);
    },
  },
});
