<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="my-5">
        <b-col cols="8" offset-sm="3" sm="6">
          <CrearCliente />
        </b-col>
      </b-row>

      <hr />

      <b-row class="my-5">
        <b-col>
          <ListarClientes />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CrearCliente from "@/components/Clientes/CrearCliente.vue";
import ListarClientes from "@/components/Clientes/ListarClientes.vue";

export default {
  name: "app",
  components: {
    CrearCliente,
    ListarClientes,
  },
};
</script>

<style>
body {
  background-color: GhostWhite;
}
</style>
