import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clienteNuevo: {},
    servicioNuevo: {},
    productoNuevo: {},
    clienteEnEdicion: {},
    servicioEnEdicion: {},
    productoEnEdicion: {},
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
    ACTUALIZAR_CLIENTE(state, cliente) {
      const index = state.listaClientes.findIndex((element) => {
        element.id == cliente.id;
      });
      state.listaClientes.forEach((element) => {
        if (element.id == cliente.id) {
          state.listaClientes.splice(index, 1);
          state.listaClientes.push(cliente);
        }
      });
    },
    // mutations de servicios
    OBTENER_TODOS_LOS_SERVICIOS(state, servicios) {
      state.listaServicios = servicios.data;
    },
    GUARDAR_SERVICIO_NUEVO(state, servicio) {
      state.listaServicios.push(servicio);
    },
    ELIMINAR_SERVICIO(state, id) {
      const index = state.listaServicios.findIndex(
        (servicio) => servicio.id == id
      );
      state.listaServicios.splice(index, 1);
    },
    ACTUALIZAR_SERVICIO(state, servicio) {
      const index = state.listaServicios.findIndex((element) => {
        element.id == servicio.id;
      });
      state.listaServicios.forEach((element) => {
        if (element.id == servicio.id) {
          state.listaServicios.splice(index, 1);
          state.listaServicios.push(servicio);
        }
      });
    },
    // mutations de productos
    OBTENER_TODOS_LOS_PRODUCTOS(state, productos) {
      state.listaProductos = productos.data;
    },
    GUARDAR_PRODUCTO_NUEVO(state, producto) {
      state.listaProductos.push(producto);
    },
    ELIMINAR_PRODUCTO(state, id) {
      const index = state.listaProductos.findIndex(
        (producto) => producto.id == id
      );
      state.listaProductos.splice(index, 1);
    },
    ACTUALIZAR_PRODUCTO(state, producto) {
      const index = state.listaProductos.findIndex((element) => {
        element.id == producto.id;
      });
      state.listaProductos.forEach((element) => {
        if (element.id == producto.id) {
          state.listaProductos.splice(index, 1);
          state.listaProductos.push(producto);
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
    // actions de servicios
    obtenerTodosLosServicios({ commit }) {
      return EventService.obtenerTodosLosServicios().then((response) => {
        commit("OBTENER_TODOS_LOS_SERVICIOS", response);
      });
    },
    guardarServicioNuevo({ commit }, servicio) {
      return EventService.guardarServicioNuevo(servicio).then((response) => {
        commit("GUARDAR_SERVICIO_NUEVO", response);
      });
    },
    eliminarServicio({ commit }, servicio) {
      return EventService.eliminarServicio(servicio).then(() => {
        commit("ELIMINAR_SERVICIO", servicio);
      });
    },
    actualizarServicio({ commit }, servicio) {
      return EventService.actualizarServicio(servicio).then(() => {
        commit("ACTUALIZAR_SERVICIO", servicio);
      });
    },
    // actions de productos
    obtenerTodosLosProductos({ commit }) {
      return EventService.obtenerTodosLosProductos().then((response) => {
        commit("OBTENER_TODOS_LOS_PRODUCTOS", response);
      });
    },
    guardarProductoNuevo({ commit }, producto) {
      return EventService.guardarProductoNuevo(producto).then((response) => {
        commit("GUARDAR_PRODUCTO_NUEVO", response);
      });
    },
    eliminarProducto({ commit }, producto) {
      return EventService.eliminarProducto(producto).then(() => {
        commit("ELIMINAR_PRODUCTO", producto);
      });
    },
    actualizarProducto({ commit }, producto) {
      return EventService.actualizarProducto(producto).then(() => {
        commit("ACTUALIZAR_PRODUCTO", producto);
      });
    },
  },
  getters: {},
});
