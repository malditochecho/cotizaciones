<template>
  <div class="p-5">
    <h1>Nuevo cliente</h1>
    <b-form @submit="onSubmit">
      <!-- Nombre empresa -->
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="empresa"
          type="text"
          required
          placeholder="Ingresa nombre del cliente"
        ></b-form-input>
      </b-form-group>

      <!-- Nombre empresa -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="contacto"
          placeholder="Ingresa el contacto"
        ></b-form-input>
      </b-form-group>

      <!-- Email -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="correoContacto"
          placeholder="Ingresa el email"
        ></b-form-input>
      </b-form-group>

      <!-- Telefono -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="telefonoContacto"
          placeholder="Ingresa el telefono"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CrearCliente",
  data() {
    return {
      clientes: [],
      empresa: "",
      contacto: "",
      telefonoContacto: "",
      correoContacto: "",
    };
  },
  methods: {
    onSubmit: function() {
      axios
        .post("http://127.0.0.1:8000/api/Cliente/", { empresa: this.empresa })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
