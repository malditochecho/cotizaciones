<template>
  <div class="p-5">
    <h1>Cotizaciones</h1>
    <b-table
      :id="cotizaciones.id"
      bordered
      small
      head-variant="dark"
      hover
      :items="cotizaciones"
      :fields="fields"
    >
      <template v-slot:cell(editar)="{ item }">
        <!-- nick es a la columna a la cual se va a aplicar, y item es un nombre q se va a usar para llamarlo en la sgte linea -->
        <b-button @click="editarCotizacion(item)">Ver</b-button>
        <!-- item es equivalente a un elemento de items -->
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListarCotizaciones",
  data() {
    return {
      cotizaciones: [],
      fields: [
        "id",
        "empresa.empresa",
        "servicio.nombre",
        "metrosCuadrados",
        "producto.producto",
        "cantidadProducto",
        { key: "editar", label: "" },
        { key: "eliminar", label: "" },
      ],
    };
  },
  mounted: function() {
    this.listarCotizaciones();
  },
  methods: {
    listarCotizaciones: function() {
      axios.get("http://localhost:8000/api/Cotizacion/").then(
        (response) => {
          this.cotizaciones = response.data;
          console.log("API ok!");
          console.log("Cotizaciones listados exitosamente.");
        },
        (error) => {
          console.log("API con error: ".concat(error));
        }
      );
    },
    eliminarCotizacion: function(item) {
      console.log("eliminando cotizacion " + item.empresa);
      axios
        .delete(item.url)
        .then((response) => console.log("Status: " + response.status))
        .catch((error) => console.log(error));
    },
    // editarCotizacion: function(item) {
    //   console.log("editando cotizacion " + item.empresa);
    //   this.;
    // },
  },
};
</script>

<style></style>
