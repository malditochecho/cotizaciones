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
        <ListarClientes />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import CrearCliente from "@/components/Clientes/CrearCliente.vue";
import ListarClientes from "@/components/Clientes/ListarClientes.vue";

export default {
  name: "MantenedorClientes",
  components: {
    // CrearCliente,
    ListarClientes,
  },
  mounted: function() {
    this.obtenerTodosLosClientes();
  },
  methods: {
    obtenerTodosLosClientes() {
      this.$store
        .dispatch("obtenerTodosLosClientes")
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
