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
        xl="8"
        offset-xl="2"
      >
        <ListarServicios />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import CrearServicio from "@/components/Servicios/CrearServicio.vue";
import ListarServicios from "@/components/Servicios/ListarServicios.vue";

export default {
  name: "MantenedorServicios",
  components: {
    // CrearServicio,
    ListarServicios,
  },
  mounted: function() {
    this.obtenerTodosLosServicios();
  },
  methods: {
    obtenerTodosLosServicios() {
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
