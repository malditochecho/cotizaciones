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
        <b-button @click="editarCliente(item)">Editar</b-button>
        <!-- item es equivalente a un elemento de items -->
      </template>

      <template v-slot:cell(eliminar)="{ item }">
        <b-button @click="eliminarCliente(item)">Eliminar</b-button>
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
    ...mapState(["listaClientes", "clienteNuevo"]),
  },
  mounted: function() {
    this.obtenerClientes();
  },
  methods: {
    obtenerClientes() {
      this.$store
        .dispatch("obtenerClientes")
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    eliminarCliente(cliente) {
      this.$store
        .dispatch("eliminarCliente", cliente.id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    editarCliente() {
      this.$store
        .dispatch("activarBotonClienteNuevo")
        .then(() => {
          console.log(this.$store.state.clienteNuevo);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
