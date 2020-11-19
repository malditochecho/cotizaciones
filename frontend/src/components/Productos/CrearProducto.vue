<template>
  <div class="p-5">
    <h1>Nuevo producto</h1>
    <b-form @submit="onSubmit">
      <!-- Nombre producto -->
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="producto"
          type="text"
          required
          placeholder="Ingresa producto del producto"
        ></b-form-input>
      </b-form-group>

      <!-- Marca producto -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="marca"
          placeholder="Ingresa la marca"
        ></b-form-input>
      </b-form-group>

      <!-- Fabricante producto -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="fabricante"
          placeholder="Ingresa el fabricante"
        ></b-form-input>
      </b-form-group>

      <!-- Valor unidad del producto -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="valorUnidad"
          placeholder="Ingresa el valor unidad"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CrearProducto",
  data() {
    return {
      producto: "",
      marca: "",
      fabricante: "",
      valorUnidad: "",
    };
  },
  methods: {
    onSubmit: function() {
      axios
        .post("http://127.0.0.1:8000/api/Producto/", {
          producto: this.producto,
          marca: this.marca,
          fabricante: this.fabricante,
          valorUnidad: this.valorUnidad,
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
