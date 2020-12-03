<template>
  <div>
    <b-button v-b-modal.modal-crear variant="success">Nuevo</b-button>

    <b-modal
      id="modal-crear"
      title="Nuevo servicio"
      hide-footer
      header-bg-variant="success"
      header-text-variant="light"
      centered
    >
      <b-form @submit="submitFormulario(servicioNuevo)">
        <!-- Nombre servicio -->
        <b-form-group
          id="input-group-1"
          label-for="input-1"
          label="Nombre servicio"
        >
          <b-form-input
            id="input-1"
            v-model="servicioNuevo.nombre"
            type="text"
            required
            placeholder="Ej.: Mantencion multicapa"
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- Descripcion servicio -->
        <b-form-group
          id="input-group-1"
          label-for="input-1"
          label="Descripcion servicio"
        >
          <b-form-textarea
            id="input-1"
            v-model="servicioNuevo.descripcion"
            required
            placeholder="Ej.: Determinación tiempos de secado..."
          ></b-form-textarea>
        </b-form-group>

        <!-- Valor m2 -->
        <b-form-group
          id="input-group-1"
          label-for="input-1"
          label="Valor metro cuadrado"
        >
          <b-form-input
            id="input-1"
            v-model="servicioNuevo.valorMetroCuadrado"
            type="text"
            required
            placeholder="Ej.: 12990"
            maxlength="100"
          ></b-form-input>
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["servicioNuevo"]),
  },
  methods: {
    submitFormulario(servicioNuevo) {
      this.$store
        .dispatch("guardarServicioNuevo", servicioNuevo)
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
