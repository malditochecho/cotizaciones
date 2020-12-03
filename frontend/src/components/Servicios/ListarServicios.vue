<template>
  <div class="p-5">
    <h1>Servicios <CrearServicioModal /></h1>
    <b-table
      :id="listaServicios.id"
      bordered
      small
      head-variant="dark"
      hover
      :items="listaServicios"
      :fields="fields"
    >
      <template v-slot:cell(Acciones)="{ item }">
        <b-row>
          <b-col><EditarServicioModal :item="item"/></b-col>
          <b-col>
            <b-button @click="eliminarServicio(item)" variant="danger" block>
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
import CrearServicioModal from "@/components/Servicios/CrearServicioModal.vue";
import EditarServicioModal from "@/components/Servicios/EditarServicioModal.vue";

export default {
  components: {
    CrearServicioModal,
    EditarServicioModal,
  },
  data() {
    return {
      fields: ["id", "nombre", "descripcion", "valorMetroCuadrado", "Acciones"],
    };
  },
  computed: {
    ...mapState(["listaServicios", "modoEditando"]),
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
    eliminarServicio(servicio) {
      this.$store
        .dispatch("eliminarServicio", servicio.id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
