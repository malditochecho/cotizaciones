<template>
  <div class="p-5">
    <h1>Nueva cotizacion</h1>
    <b-form @submit="onSubmit">
      <!-- Nombre empresa -->
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-select
          v-model="clienteSeleccionado"
          :options="clientes"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-select
          v-model="servicioSeleccionado"
          :options="servicios"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-select
          v-model="productoSeleccionado"
          :options="productos"
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="success">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default {
  name: "CrearCliente",
  data() {
    return {
      clientes: [],
      servicios: [],
      productos: [],
      clienteSeleccionado: null,
      servicioSeleccionado: null,
      productoSeleccionado: null,
      empresa: "",
      contacto: "",
      telefonoContacto: "",
      correoContacto: "",
    };
  },
  mounted: function() {
    this.obtenerServicios();
    this.obtenerProductos();
    this.obtenerClientes();
  },
  methods: {
    onSubmit: function() {
      axios
        .post("http://localhost:8000/api/Cliente/", {
          empresa: this.empresa,
          contacto: this.contacto,
          telefonoContacto: this.telefonoContacto,
          correoContacto: this.correoContacto,
        })
        .then((response) => console.log(response.status))
        .catch(function(error) {
          console.log("Error: " + error);
        });
    },
    obtenerClientes: function() {
      axios.get("http://localhost:8000/api/Cliente/").then(
        (response) => {
          this.clientes.push({
            value: null,
            text: "Seleccione un cliente",
          });
          Object.entries(response.data).forEach(([key, value]) => {
            this.clientes.push({
              value: key,
              text: value.empresa,
            });
            console.log(key);
          });
          console.log("Clientes obtenidos exitosamente.");
        },
        (error) => {
          console.log("API con error: ".concat(error));
        }
      );
    },
    obtenerServicios: function() {
      axios.get("http://localhost:8000/api/Servicio/").then(
        (response) => {
          this.servicios.push({
            value: null,
            text: "Seleccione un servicio",
          });
          Object.entries(response.data).forEach(([key, value]) => {
            this.servicios.push({
              value: key,
              text: value.nombre,
            });
            console.log(key);
          });
          console.log("Servicios obtenidos exitosamente.");
        },
        (error) => {
          console.log("API con error: ".concat(error));
        }
      );
    },
    obtenerProductos: function() {
      axios.get("http://localhost:8000/api/Producto/").then(
        (response) => {
          this.productos.push({
            value: null,
            text: "Seleccione un producto",
          });
          Object.entries(response.data).forEach(([key, value]) => {
            this.productos.push({
              value: key,
              text: value.producto,
            });
            console.log(key);
          });
          console.log("Productos obtenidos exitosamente.");
        },
        (error) => {
          console.log("API con error: ".concat(error));
        }
      );
    },
  },
};
</script>

<style></style>
