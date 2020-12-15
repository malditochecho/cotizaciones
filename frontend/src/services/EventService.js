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
  // COTIZACIONES

  //OBTIENE DATOS DE TABLA COTIZACION
  obtenerCotizaciones() {
    return apiClient.get("Cotiza/");
  },
  obtenerCotizacionesServiciosGET() {
    return apiClient.get("CotizaServiciosGET/");
  },
  obtenerCotizacionesServiciosPOST() {
    return apiClient.get("CotizaServiciosPOST/");
  },
  /**
   *  TABLA "MAESTRA"
   * @param {*} cotizacion indica objeto a insertar en la BD tabla cotizaciones_cotiza
   *   /api/Cotiza/
   * se debe registrar la empresa (cliente) a la que se hará la cotización
   */
  guardarCotizacionNuevo(cotizacion) {
    return apiClient.post("Cotiza/", cotizacion);
  },
  guardarCotizacionServiciosNuevo(cotizacioServicion) {
    return apiClient.post("CotizaServiciosPOST/", cotizacioServicion);
  }

};
