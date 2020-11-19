<template>
  <div class="p-5">
    <h1>Servicios</h1>
    <b-table
      :id="servicios.id"
      bordered
      small
      head-variant="dark"
      hover
      :items="servicios"
      :fields="fields"
    >
      <template v-slot:cell(editar)="{ item }">
        <!-- nick es a la columna a la cual se va a aplicar, y item es un nombre q se va a usar para llamarlo en la sgte linea -->
        <b-button @click="editarServicio(item)">Editar</b-button>
        <!-- item es equivalente a un elemento de items -->
      </template>

      <!-- A virtual composite column -->
      <template v-slot:cell(eliminar)="{ item }">
        <b-button @click="eliminarServicio(item)">Eliminar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListarServicios",
  data() {
    return {
      servicios: [],
      fields: [
        "id",
        "nombre",
        "descripcion",
        "valorMetroCuadrado",
        { key: "editar", label: "" },
        { key: "eliminar", label: "" },
      ],
    };
  },
  mounted: function() {
    this.listarServicios();
  },
  methods: {
    listarServicios: function() {
      axios.get("http://localhost:8000/api/Servicio/").then(
        (response) => {
          this.servicios = response.data;
          console.log("API ok!");
          console.log("Servicios listados exitosamente.");
        },
        (error) => {
          console.log("API con error: ".concat(error));
        }
      );
    },
    eliminarServicio: function(item) {
      console.log("eliminando servicio " + item.empresa);
      axios
        .delete(item.url)
        .then((response) => console.log("Status: " + response.status))
        .catch((error) => console.log(error));
    },
    // editarServicio: function(item) {
    //   console.log("editando servicio " + item.empresa);
    //   this.;
    // },
  },
};
</script>

<style></style>
