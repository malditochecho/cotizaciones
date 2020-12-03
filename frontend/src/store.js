import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clienteNuevo: {},
    clienteEnEdicion: {},
    listaCotizaciones: [],
    listaClientes: [],
    listaProductos: [],
    listaServicios: [],
    listaNombresClientes: [],
  },
  mutations: {
    // mutations de clientes
    OBTENER_TODOS_LOS_CLIENTES(state, clientes) {
      state.listaClientes = clientes.data;
    },
    GUARDAR_CLIENTE_NUEVO(state, cliente) {
      state.listaClientes.push(cliente);
    },
    ELIMINAR_CLIENTE(state, id) {
      const index = state.listaClientes.findIndex(
        (cliente) => cliente.id == id
      );
      state.listaClientes.splice(index, 1);
    },
    // ACTUALIZAR_CLIENTE(state, cliente) {
    //   const index = state.listaClientes.findIndex((element) => {
    //     element.id == cliente.id;
    //   });
    //   state.listaClientes.forEach((element) => {
    //     if (element.id == cliente.id) {
    //       state.listaClientes.splice(index, 1, cliente);
    //     }
    //   });
    // },
    ACTUALIZAR_CLIENTE(state, cliente) {
      const index = state.listaClientes.findIndex((element) => {
        element.id == cliente.id;
      });
      state.listaClientes.forEach((element) => {
        if (element.id == cliente.id) {
          this.$set(state.listaClientes, index, cliente);
        }
      });
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
    eliminarCliente({ commit }, cliente) {
      return EventService.eliminarCliente(cliente).then(() => {
        commit("ELIMINAR_CLIENTE", cliente);
      });
    },
    actualizarCliente({ commit }, cliente) {
      return EventService.actualizarCliente(cliente).then(() => {
        commit("ACTUALIZAR_CLIENTE", cliente);
      });
    },
  },
  getters: {},
});
