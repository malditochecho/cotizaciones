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
      <template #cell(editar)="item">
        <EditarClienteModal item="item"></EditarClienteModal>
      </template>

      <template v-slot:cell(eliminar)="{}">
        <b-button>Eliminar</b-button>
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
        "editar",
        "eliminar",
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
  },
};
</script>
