<template>
  <div>
    <!-- <b-button :v-b-modal="item.index" variant="danger">Editar</b-button> -->
    <b-button @click="mostrarModal = true" variant="info" block
      >Editar</b-button
    >

    <b-modal
      :id="item.index"
      title="Editar Producto"
      v-model="mostrarModal"
      hide-footer
      header-bg-variant="info"
      header-text-variant="light"
      centered
      size="md"
    >
      <b-form @submit="submitFormulario(productoEnEdicion)">
        <!-- Nombre empresa -->
        <b-form-group
          id="input-group-1"
          label="Nombre Producto"
          label-for="input-cliente"
        >
          <b-form-input
            id="input-producto"
            v-model="productoEnEdicion.producto"
            type="text"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Marca"
          label-for="input-marca"
        >
          <b-form-input
            id="input-marca"
            v-model="productoEnEdicion.marca"
            type="text"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Fabricante"
          label-for="input-fabricante"
        >
          <b-form-input
            id="input-telefono"
            v-model="productoEnEdicion.fabricante"
            type="text"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Valor Unidad"
          label-for="input-valor"
        >
          <b-form-input
            id="input-correo"
            v-model="productoEnEdicion.valorUnidad"
            type="number"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- BOTONES -->
        <div class="d-flex justify-content-between">
          <b-button
            variant="info"
            type="submit"
            @click="mostrarModal = !mostrarModal"
            >Actualizar</b-button
          >
          <b-button type="submit">Cancelar</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {
      mostrarModal: false,
      productoEnEdicion: {},
    };
  },
  props: ["item"],
  computed: {
    // ...mapState(["clienteEnEdicion"]),
  },
  mounted: function() {
    this.copiarClienteEdicion(this.item);
  },
  methods: {
    copiarClienteEdicion(item) {
      this.productoEnEdicion = item;
    },
    submitFormulario(productoEnEdicion) {
      this.$store
        .dispatch("actualizarCliente", productoEnEdicion)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
