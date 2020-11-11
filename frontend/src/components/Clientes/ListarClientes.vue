<template>
  <div class="p-5">
    <h1>Clientes</h1>
    <b-table striped hover :items="clientes" :fields="fields">
      <template v-slot:cell(url)="{ item }">
        <!-- nick es a la columna a la cual se va a aplicar, y item es un nombre q se va a usar para llamarlo en la sgte linea -->
        <b-link :href="item.url">Editar</b-link>
        <!-- item es equivalente a un elemento de items -->
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListarClientes",
  data() {
    return {
      clientes: [],
      fields: [
        "empresa",
        "contacto",
        "correoContacto",
        "telefonoContacto",
        "url",
      ],
    };
  },
  mounted: function() {
    this.listarClientes();
  },
  methods: {
    listarClientes: function() {
      axios.get("http://127.0.0.1:8000/api/Cliente/").then(
        (response) => {
          this.clientes = response.data;
          console.log("API ok!");
        },
        (error) => {
          console.log("API con error: ".concat(error));
        }
      );
    },
  },
};
</script>

<style></style>
