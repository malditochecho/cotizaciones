<template>
  <div>
    <b-row>
      <b-col
        xs="12"
        sm="10"
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
        xl="4"
        offset-xl="4"
      >
        <CrearProducto />
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
        <ListarProductos />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CrearProducto from "@/components/Productos/CrearProducto.vue";
import ListarProductos from "@/components/Productos/ListarProductos.vue";

export default {
  name: "MantenedorProductos",
  components: {
    CrearProducto,
    ListarProductos,
  },
};
</script>

<style>
body {
  background-color: GhostWhite;
}
</style>
