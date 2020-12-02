<template>
  <div>
    <b-button v-b-modal.modal-tall variant="success">Editar</b-button>

    <b-modal hide-footer id="modal-tall" title="Nuevo cliente">
      <b-form @submit.prevent="submitFormulario(clienteNuevo)">
        <!-- Nombre empresa -->
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="clienteNuevo.empresa"
            type="text"
            required
            placeholder="Ingresa nombre del cliente"
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- BOTON GUARDAR -->
        <b-button variant="success" type="submit">Guardar</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["cliente"],
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
