<template>
  <div class="p-5">
    <h1>Productos <CrearProductoModal /></h1>
    <b-table
      :id="listaProductos.id"
      bordered
      small
      head-variant="dark"
      hover
      :items="listaProductos"
      :fields="fields"
    >
      <template v-slot:cell(Acciones)="{ item }">
        <b-row>
          <b-col><EditarProductoModal :item="item"/></b-col>
          <b-col>
            <b-button @click="eliminarProducto(item)" variant="danger" block>
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
import CrearProductoModal from "@/components/Productos/CrearProductoModal.vue";
import EditarProductoModal from "@/components/Productos/EditarProductoModal.vue";

export default {
  components: {
    CrearProductoModal,
    EditarProductoModal,
  },
  data() {
    return {
      fields: [
        "id",
        "producto",
        "marca",
        "fabricante",
        "valorUnidad",
        "Acciones",
        // "eliminar",
      ],
    };
  },
  computed: {
    ...mapState(["listaProductos", "modoEditando"]),
  },
  mounted: function() {
    this.obtenerTodosLosProductos();
  },
  methods: {
    obtenerTodosLosProductos() {
      this.$store
        .dispatch("obtenerTodosLosProductos")
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    eliminarProducto(producto) {
      this.$store
        .dispatch("eliminarProducto", producto.id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
