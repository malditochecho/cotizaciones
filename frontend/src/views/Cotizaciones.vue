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
        <ListarCotizaciones />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ListarCotizaciones from "@/components/Cotizaciones/ListarCotizaciones.vue";

export default {
  name: "Cotizaciones",
  components: {
    ListarCotizaciones,
  },
};
</script>

<style>
body {
  background-color: GhostWhite;
}
</style>
