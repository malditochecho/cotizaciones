<template>
  <div class="p-5">
    <h1>Clientes</h1>
    <b-table
      bordered
      small
      head-variant="dark"
      hover
      :items="clientes"
      :fields="fields"
    >
      <template v-slot:cell(editar)="{ item }">
        <!-- nick es a la columna a la cual se va a aplicar, y item es un nombre q se va a usar para llamarlo en la sgte linea -->
        <b-button @click="editarCliente(item)">Editar</b-button>
        <!-- item es equivalente a un elemento de items -->
      </template>

      <!-- A virtual composite column -->
      <template v-slot:cell(eliminar)="{ item }">
        <b-button @click="eliminarCliente(item)">Eliminar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListarClientes",
  data() {
    return {
      clientes: [],
      fields: [
        "id",
        "empresa",
        "contacto",
        "correoContacto",
        "telefonoContacto",
        { key: "editar", label: "" },
        { key: "eliminar", label: "" },
      ],
    };
  },
  mounted: function() {
    this.listarClientes;
  },
  methods: {
    listarClientes: function() {
      axios.get("http://localhost:8000/api/Cliente/").then(
        (response) => {
          this.clientes = response.data;
          console.log("Clientes listados exitosamente.");
        },
        (error) => {
          console.log("API con error: ".concat(error));
        }
      );
    },
    eliminarCliente: function(item) {
      console.log("eliminando cliente " + item.empresa);
      axios
        .delete(item.url)
        .then((response) => console.log("Status: " + response.status))
        .catch((error) => console.log(error));
    },
    // editarCliente: function(item) {
    //   console.log("editando cliente " + item.empresa);
    //   this.;
    // },
  },
};
</script>

<style></style>
