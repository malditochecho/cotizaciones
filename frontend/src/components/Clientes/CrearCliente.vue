<template>
  <div class="p-5">
    <h1>{{ clienteNuevo ? "Editando Cliente" : "Nuevo Cliente" }}</h1>
    <b-form @submit.prevent="guardarCliente">
      <!-- Nombre empresa -->
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="cliente.empresa"
          type="text"
          required
          placeholder="Ingresa nombre del cliente"
          maxlength="100"
        ></b-form-input>
      </b-form-group>

      <!-- Nombre empresa -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="cliente.contacto"
          placeholder="Ingresa el contacto"
          maxlength="100"
        ></b-form-input>
      </b-form-group>

      <!-- Email -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="cliente.correoContacto"
          placeholder="Ingresa el email"
          type="email"
          maxlength="100"
        ></b-form-input>
      </b-form-group>

      <!-- Telefono -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="cliente.telefonoContacto"
          placeholder="Ingresa el telefono"
          type="number"
          maxlength="11"
          minlength="8"
        ></b-form-input>
      </b-form-group>

      <b-button
        v-if="!clienteNuevo"
        :disabled="clienteNuevo"
        type="submit"
        variant="success"
        >Guardar</b-button
      >
      <b-button
        v-if="clienteNuevo"
        :disabled="!clienteNuevo"
        type="submit"
        variant="warning"
        >Editar</b-button
      >
      <b-button
        v-if="clienteNuevo"
        :disabled="!clienteNuevo"
        type="submit"
        variant="danger"
        @click="cancelarEdicion()"
        >Cancelar</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CrearCliente",
  data() {
    return {
      cliente: {
        empresa: "",
        contacto: "",
        telefonoContacto: "",
        correoContacto: "",
      },
    };
  },
  computed: {
    ...mapState(["clienteNuevo"]),
  },
  methods: {
    guardarCliente() {
      this.$store
        .dispatch("guardarCliente", this.cliente)
        .then(this.limpiarFormulario())
        .catch((err) => {
          console.log(err);
        });
    },
    limpiarFormulario() {
      this.cliente = {
        empresa: "",
        contacto: "",
        telefonoContacto: "",
        correoContacto: "",
      };
    },
    cancelarEdicion(){
      this.$store
      .dispatch("desactivarBotonClienteNuevo")
      .then(() => {
        console.log(this.$store.state.clienteNuevo)
      });
    }
  },
};
</script>

<style></style>
