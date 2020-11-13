<template>
  <div>
    <b-row>
      <b-col lg="6">
        <b-form @submit="onSubmit">
          <!-- Nombre PRODUCTO -->
          <b-form-group
            id="input-group-1"
            label="Nombre del producto:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="producto"
              type="text"
              placeholder="Nombre del producto"
            ></b-form-input>
          </b-form-group>

          <!-- Nombre marca -->
          <b-form-group
            id="input-group-2"
            label="Nombre de la marca:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="marca"
              type="text"
              placeholder="Marca del producto"
            ></b-form-input>
          </b-form-group>

          <!-- Nombre del fabricante -->
          <b-form-group
            id="input-group-3"
            label="Nombre del fabricante:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="fabricante"
              type="text"
              placeholder="Nombre del fabricante"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Valor del producto:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="valorUnidad"
              type="number"
              placeholder="Valor del producto"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success">Guardar</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ManProductos",
  data() {
    return {
      clientes: [],
    //  empresa: "",
      producto: "",
      marca: "",
      fabricante: "",
      valorUnidad: 0,
    };
  },
  methods: {
    onSubmit: function () {
      axios
        .post("http://127.0.0.1:8000/api/Producto/", { producto: this.producto, marca: this.marca, fabricante: this.fabricante, valorUnidad: this.valorUnidad })
        .then((response)=> console.log(response.status))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
