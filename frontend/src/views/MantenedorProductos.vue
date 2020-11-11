<template>
  <div>
    <b-row>
      <b-col lg="6">
        <b-form @submit="onSubmit">
          <!-- Nombre empresa -->
          <b-form-group
            id="input-group-1"
            label="Nombre cliente:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="empresa"
              type="text"
              placeholder="Ingresa nombre del cliente"
            ></b-form-input>
          </b-form-group>

          <!-- Nombre empresa -->
          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="contacto"
              placeholder="Ingresa el email"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
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
