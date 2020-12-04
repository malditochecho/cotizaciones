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
  // obtenerCliente(id) {
  //   return apiClient.get(`Cliente/${id}/`);
  // },
  guardarClienteNuevo(cliente) {
    return apiClient.post("Cliente/", cliente);
  },
  eliminarCliente(id) {
    return apiClient.delete(`Cliente/${id}/`);
  },
  actualizarCliente(cliente) {
    return apiClient.patch(`Cliente/${cliente.id}/`, cliente);
  },
  // servicios
  obtenerTodosLosServicios() {
    return apiClient.get("Servicio/");
  },
  guardarServicioNuevo(servicio) {
    return apiClient.post("Servicio/", servicio);
  },
  eliminarServicio(id) {
    return apiClient.delete(`Servicio/${id}/`);
  },
  actualizarServicio(servicio) {
    return apiClient.patch(`Servicio/${servicio.id}/`, servicio);
  },
  // productos
  obtenerTodosLosProductos() {
    return apiClient.get("Producto/");
  },
  guardarProductoNuevo(producto) {
    return apiClient.post("Producto/", producto);
  },
  eliminarProducto(id) {
    return apiClient.delete(`Producto/${id}/`);
  },
  actualizarProducto(producto) {
    return apiClient.patch(`Producto/${producto.id}/`, producto);
  },
  // cotizaciones
  obtenerCotizaciones() {
    return apiClient.get("CotizacionGET/");
  },
};
