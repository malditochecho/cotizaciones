<template>
  <div class="p-5">
    <h1>Nuevo servicio</h1>
    <b-form @submit="onSubmit">
      <!-- Nombre servicio -->
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="nombre"
          type="text"
          required
          placeholder="Ingresa nombre del servicio"
        ></b-form-input>
      </b-form-group>

      <!-- Descripcion servicio -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="descripcion"
          placeholder="Ingresa la descripcion"
        ></b-form-input>
      </b-form-group>

      <!-- valorMetroCuadrado -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="valorMetroCuadrado"
          placeholder="Ingresa el valor del metro cuadrado"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CrearServicio",
  data() {
    return {
      servicios: [],
      nombre: "",
      descripcion: "",
      valorMetroCuadrado: "",
    };
  },
  methods: {
    onSubmit: function() {
      axios
        .post("http://127.0.0.1:8000/api/Servicio/", {
          nombre: this.nombre,
          descripcion: this.descripcion,
          valorMetroCuadrado: this.valorMetroCuadrado,
        })
        .then((response) => console.log(response.status))
        .catch(function(error) {
          console.log("Error: " + error);
        });
    },
  },
};
</script>

<style></style>
