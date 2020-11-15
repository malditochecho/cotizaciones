<template>
  <div>
    <b-row>
      <b-col lg="6">
        <b-form @submit="onSubmit">
          <!-- Nombre empresa -->
          <b-form-group
            id="input-group-1"
            label="Nombre servicio:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="nombre"
              type="text"
              placeholder="Ingresa nombre del servicio"
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
              v-model="descripcion"
              type="text"
              placeholder="Ingrese una descripcion para el servicio"
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
              v-model="valorMetroCuadrado"
              type="text"
              placeholder="Ingrese valor del servicio por metro cuadrado (m2)"
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
      nombre: "",
      descripcion: "",
      valorMetroCuadrado: "",
    };
  },
  methods: {
    onSubmit: function () {
      axios
        .post("http://127.0.0.1:8000/api/Servicio/", {
          nombre: this.nombre,
          descripcion: this.descripcion,
          valorMetroCuadrado: this.valorMetroCuadrado,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
