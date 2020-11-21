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
  obtenerClientes() {
    return apiClient.get("Cliente/");
  },
  obtenerCliente() {
    return apiClient.get("Cliente/:id/");
  },
  crearCliente(cliente) {
    return apiClient.post("Cliente/", cliente);
  },
  eliminarCliente() {
    return apiClient.delete("Cliente/:id/");
  },

  // productos
  obtenerProductos() {
    return apiClient.get("Producto/");
  },
  obtenerProducto() {
    return apiClient.get("Producto/:id/");
  },
  crearProducto(producto) {
    return apiClient.post("Producto/", producto);
  },

  // servicios
  obtenerServicios() {
    return apiClient.get("Servicio/");
  },
  obtenerServicio() {
    return apiClient.get("Servicio/:id/");
  },
  crearServicio(servicio) {
    return apiClient.post("Servicio/", servicio);
  },
};
