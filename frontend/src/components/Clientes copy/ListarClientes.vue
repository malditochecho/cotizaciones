<template>
  <div class="p-5">
    <h1>Clientes</h1>
    <b-table
      :id="listaClientes.id"
      bordered
      small
      head-variant="dark"
      hover
      :items="listaClientes"
      :fields="fields"
    >
      <template v-slot:cell(editar)="{ item }">
        <!-- nick es a la columna a la cual se va a aplicar, y item es un nombre q se va a usar para llamarlo en la sgte linea -->
        <b-button :disabled="modoEditando" @click="editarCliente(item)"
          >Editar</b-button
        >
        <!-- item es equivalente a un elemento de items -->
      </template>

      <template v-slot:cell(eliminar)="{ item }">
        <b-button :disabled="modoEditando" @click="eliminarCliente(item)"
          >Eliminar</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      fields: [
        "id",
        "empresa",
        "contacto",
        "telefonoContacto",
        "correoContacto",
        "editar",
        "eliminar",
      ],
    };
  },
  computed: {
    ...mapState([
      "listaClientes",
      "actualizaCliente",
      "objetoEnEdicionEnFormulario",
      "modoEditando",
    ]),
  },
  mounted: function() {},
  methods: {
    eliminarCliente(cliente) {
      this.$store
        .dispatch("eliminarCliente", cliente.id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    editarCliente(item) {
      // activar modo edicion
      this.$store
        .dispatch("permutarEdicion")
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });

      // reemplaza el formulario actual con el item del cliente a editar
      console.log(item);
      this.$store
        .dispatch("reemplazarFormulario", item)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
