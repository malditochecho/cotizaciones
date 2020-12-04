<template>
  <div class="p-5">
    <h1>Cotizaciones</h1>
    <b-table
      :id="listaCotizaciones.id"
      bordered
      small
      head-variant="dark"
      hover
      :items="listaCotizaciones"
      :fields="fields"
    >
      <template v-slot:cell(editar)="{ item }">
        <b-button @click="editarCotizacion(item)">Editar</b-button>
      </template>

      <template v-slot:cell(eliminar)="{ item }">
        <b-button @click="eliminarCotizacion(item)">Eliminar</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ListarCotizaciones",
  data() {
    return {
      cotizaciones: [],
      fields: [
        "id",
        "empresa",
        "servicio",
        "metrosCuadrados",
        "producto",
        "cantidadProducto",
        { key: "editar", label: "" },
        { key: "eliminar", label: "" },
      ],
    };
  },
  computed: {
    ...mapState(["listaCotizaciones", "listaClientes"]),
  },
  mounted: function() {},
  methods: {
    eliminarCotizacion(cotizacion) {
      this.$store
        .dispatch("eliminarCotizacion", cotizacion.id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
