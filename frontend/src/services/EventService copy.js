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
  // cotizaciones
  obtenerCotizaciones() {
    return apiClient.get("CotizacionGET/");
  },
  obtenerCotizacion(id) {
    return apiClient.get(`Cotizacion/${id}/`);
  },
  crearCotizacion(Cotizacion) {
    return apiClient.post("CotizacionPOST/", Cotizacion);
  },
  eliminarCotizacion(id) {
    return apiClient.delete(`Cotizacion/${id}/`);
  },
  actualizarCotizacion() {
    //
  },

  // clientes
  obtenerClientes() {
    return apiClient.get("Cliente/");
  },
  obtenerCliente(id) {
    return apiClient.get(`Cliente/${id}/`);
  },
  crearCliente(cliente) {
    return apiClient.post("Cliente/", cliente);
  },
  eliminarCliente(id) {
    return apiClient.delete(`Cliente/${id}/`);
  },
  actualizarCliente(id, cliente) {
    return apiClient.patch(`Cliente/${id}/`, cliente);
  },

  // productos
  obtenerProductos() {
    return apiClient.get("Producto/");
  },
  obtenerProducto(id) {
    return apiClient.get(`Producto/${id}/`);
  },
  crearProducto(producto) {
    return apiClient.post("Producto/", producto);
  },
  eliminarProducto(id) {
    return apiClient.delete(`Producto/${id}/`);
  },
  actualizarProducto() {
    //
  },

  // servicios
  obtenerServicios() {
    return apiClient.get("Servicio/");
  },
  obtenerServicio(id) {
    return apiClient.get(`Servicio/${id}/`);
  },
  crearServicio(servicio) {
    return apiClient.post("Servicio/", servicio);
  },
  eliminarServicio(id) {
    return apiClient.delete(`Servicio/${id}/`);
  },
  actualizarServicio() {
    //
  },
};
