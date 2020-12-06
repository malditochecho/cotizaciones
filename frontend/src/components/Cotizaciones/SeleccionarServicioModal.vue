<template>
  <div>
    <b-button v-b-modal.modal-crear variant="info">Agregar servicio </b-button>

    <b-modal
      id="modal-crear"
      title="Nuevo cliente"
      hide-footer
      header-bg-variant="success"
      header-text-variant="light"
      centered
    >
      <b-form @submit.prevent="submitFormulario">
        <!-- Lista servicios checkbox -->
        <b-form-group label="Seleccione los servicios:">
          <b-form-checkbox
            v-for="servicio in nombresServicios"
            v-model="serviciosSeleccionados"
            :key="servicio.value"
            :value="servicio.value"
            name="flavour-3a"
          >
            {{ servicio.text }}
          </b-form-checkbox>
        </b-form-group>

        <!-- BOTON GUARDAR -->
        <div class="d-flex justify-content-between">
          <b-button variant="success" type="submit">Guardar</b-button>
          <b-button type="submit">Cancelar</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      serviciosSeleccionados: [],
    };
  },
  computed: {
    ...mapState(["clienteNuevo"]),
    ...mapGetters(["nombresServicios"]),
  },
  methods: {
    submitFormulario() {
      this.$store
        .dispatch("seleccionarServicios", this.serviciosSeleccionados)
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
