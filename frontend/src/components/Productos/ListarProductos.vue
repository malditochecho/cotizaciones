<template>
  <div class="p-5">
    <h1>Productos</h1>
    <b-table
      :id="productos.id"
      bordered
      small
      head-variant="dark"
      hover
      :items="productos"
      :fields="fields"
    >
      <template v-slot:cell(editar)="{ item }">
        <!-- nick es a la columna a la cual se va a aplicar, y item es un nombre q se va a usar para llamarlo en la sgte linea -->
        <b-button @click="editarProductos(item)">Editar</b-button>
        <!-- item es equivalente a un elemento de items -->
      </template>

      <!-- A virtual composite column -->
      <template v-slot:cell(eliminar)="{ item }">
        <b-button @click="eliminarProducto(item)">Eliminar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListarProductos",
  data() {
    return {
      productos: [],
      fields: [
        "id",
        "producto",
        "marca",
        "fabricante",
        "valorUnidad",
        { key: "editar", label: "" },
        { key: "eliminar", label: "" },
      ],
    };
  },
  mounted: function() {
    this.listarProductos();
  },
  methods: {
    listarProductos: function() {
      axios.get("http://localhost:8000/api/Producto/").then(
        (response) => {
          this.productos = response.data;
          console.log("API ok!");
          console.log("Productos listados exitosamente.");
        },
        (error) => {
          console.log("API con error: ".concat(error));
        }
      );
    },
    eliminarProductos: function(item) {
      console.log("eliminando producto " + item.nombre);
      axios
        .delete(item.url)
        .then((response) => console.log("Status: " + response.status))
        .catch((error) => console.log(error));
    },
    // editarProductos: function(item) {
    //   console.log("editando producto " + item.empresa);
    //   this.;
    // },
  },
};
</script>

<style></style>
