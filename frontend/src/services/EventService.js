import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // clientes
  obtenerTodosLosClientes() {
    return apiClient.get("Cliente/");
  },
  guardarClienteNuevo(cliente) {
    return apiClient.post("Cliente/", cliente);
  },
  // obtenerCliente(id) {
  //   return apiClient.get(`Cliente/${id}/`);
  // },
  // crearCliente(cliente) {
  //   return apiClient.post("Cliente/", cliente);
  // },
  // eliminarCliente(id) {
  //   return apiClient.delete(`Cliente/${id}/`);
  // },
  // actualizarCliente(id, cliente) {
  //   return apiClient.patch(`Cliente/${id}/`, cliente);
  // },
};
