<template>
  <div>
    <b-button v-b-modal.modal-crear variant="success">Nuevo</b-button>

    <b-modal
      id="modal-crear"
      title="Nuevo cliente"
      hide-footer
      header-bg-variant="success"
      header-text-variant="light"
      centered
    >
      <b-form @submit.prevent="submitFormulario(clienteNuevo)">
        <!-- Nombre empresa -->
        <b-form-group
          id="input-group-1"
          label-for="input-1"
          label="Nombre empresa"
        >
          <b-form-input
            id="input-1"
            v-model="clienteNuevo.empresa"
            type="text"
            required
            placeholder="Ej.: Salfa S.A."
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- Nombre contacto -->
        <b-form-group
          id="input-group-2"
          label-for="input-2"
          label="Nombre contacto"
        >
          <b-form-input
            id="input-2"
            v-model="clienteNuevo.contacto"
            placeholder="Ej.: Juan Perez"
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- Email -->
        <b-form-group
          id="input-group-2"
          label-for="input-2"
          label="Email contacto"
        >
          <b-form-input
            id="input-2"
            v-model="clienteNuevo.correoContacto"
            placeholder="Ej.: juan@salfa.cl"
            type="email"
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- Telefono -->
        <b-form-group
          id="input-group-2"
          label-for="input-2"
          label="Telefono contacto"
        >
          <b-form-input
            id="input-2"
            v-model="clienteNuevo.telefonoContacto"
            placeholder="Ej.: 56912345678"
            type="number"
            maxlength="11"
            minlength="8"
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
    ...mapState(["clienteNuevo"]),
  },
  methods: {
    submitFormulario(clienteNuevo) {
      this.$store.dispatch("guardarClienteNuevo", clienteNuevo).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style></style>
