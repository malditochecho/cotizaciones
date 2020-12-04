<template>
  <div class="p-5">
    <h1>Clientes <CrearClienteModal /></h1>
    <b-table
      :id="listaClientes.id"
      bordered
      small
      head-variant="dark"
      hover
      :items="listaClientes"
      :fields="fields"
    >
      <template v-slot:cell(Acciones)="{ item }">
        <b-row>
          <b-col><EditarClienteModal :item="item"/></b-col>
          <b-col>
            <b-button @click="eliminarCliente(item)" variant="danger" block>
              Eliminar
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CrearClienteModal from "@/components/Clientes/CrearClienteModal.vue";
import EditarClienteModal from "@/components/Clientes/EditarClienteModal.vue";

export default {
  components: {
    CrearClienteModal,
    EditarClienteModal,
  },
  data() {
    return {
      fields: [
        "id",
        "empresa",
        "contacto",
        "telefonoContacto",
        "correoContacto",
        "Acciones",
        // "eliminar",
      ],
    };
  },
  computed: {
    ...mapState(["listaClientes", "modoEditando"]),
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
    eliminarCliente(cliente) {
      this.$store
        .dispatch("eliminarCliente", cliente.id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
