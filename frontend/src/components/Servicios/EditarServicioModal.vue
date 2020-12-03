<template>
  <div>
    <!-- <b-button :v-b-modal="item.index" variant="danger">Editar</b-button> -->
    <b-button @click="mostrarModal = true" variant="info" block
      >Editar</b-button
    >

    <b-modal
      :id="item.index"
      title="Editar servicio"
      v-model="mostrarModal"
      hide-footer
      header-bg-variant="info"
      header-text-variant="light"
      centered
      size="md"
    >
      <b-form @submit="submitFormulario(servicioEnEdicion)">
        <!-- Nombre empresa -->
        <b-form-group
          id="input-group-1"
          label="Nombre servicio"
          label-for="input-servicio"
        >
          <b-form-input
            id="input-servicio"
            v-model="servicioEnEdicion.nombre"
            type="text-area"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Descripcion"
          label-for="input-descripcion"
        >
          <b-form-textarea
            id="input-descripcion"
            v-model="servicioEnEdicion.descripcion"
            type="text"
            required
            maxlength="100"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Valor metro cuadrado"
          label-for="input-valorMetroCuadrado"
        >
          <b-form-input
            id="input-valorMetroCuadrado"
            v-model="servicioEnEdicion.valorMetroCuadrado"
            type="text"
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
      servicioEnEdicion: {},
    };
  },
  props: ["item"],
  computed: {
    // ...mapState(["servicioEnEdicion"]),
  },
  mounted: function() {
    this.copiarServicioEdicion(this.item);
  },
  methods: {
    copiarServicioEdicion(item) {
      this.servicioEnEdicion = item;
    },
    submitFormulario(servicioEnEdicion) {
      this.$store
        .dispatch("actualizarServicio", servicioEnEdicion)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
