<template>
  <div>
    <b-row>
      <b-col
        xs="12"
        sm="10"
        md="8"
        offset-md="2"
        lg="8"
        offset-lg="2"
        xl="6"
        offset-xl="3"
      >
        <CrearCotizacion />
      </b-col>
    </b-row>

    <hr />

    <b-row>
      <b-col
        xs="12"
        sm="10"
        md="8"
        offset-md="2"
        lg="8"
        offset-lg="2"
        xl="8"
        offset-xl="2"
      >
        <ListarCotizaciones />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CrearCotizacion from "@/components/Cotizaciones/CrearCotizacion.vue";
import ListarCotizaciones from "@/components/Cotizaciones/ListarCotizaciones.vue";

export default {
  name: "Cotizaciones",
  components: {
    CrearCotizacion,
    ListarCotizaciones,
  },
  mounted: function() {
    this.obtenerCotizaciones();
    this.obtenerClientes();
    this.obtenerProductos();
    this.obtenerServicios();
  },
  methods: {
    obtenerCotizaciones() {
      this.$store
        .dispatch("obtenerCotizaciones")
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    obtenerClientes() {
      this.$store
        .dispatch("obtenerTodosLosClientes")
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    obtenerProductos() {
      this.$store
        .dispatch("obtenerTodosLosProductos")
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    obtenerServicios() {
      this.$store
        .dispatch("obtenerTodosLosServicios")
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
body {
  background-color: GhostWhite;
}
</style>
