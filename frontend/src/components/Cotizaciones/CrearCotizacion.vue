<template>
  <div class="p-5">
    <h1>Nueva cotizacion</h1>
    <b-form @submit="onSubmit">
      <!-- Nombre empresa -->
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        label="Cliente"
        description=""
      >
        <b-form-select
          v-model="clienteSeleccionado"
          :options="listaClientes"
        ></b-form-select>
      </b-form-group>

      <!-- Servicio -->
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        label="Servicio"
        description=""
      >
        <b-form-select
          v-model="servicioSeleccionado"
          :options="servicios"
        ></b-form-select>
      </b-form-group>

      <!-- Metros cuadrados -->
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        label="Metros cuadrados"
        description=""
      >
        <b-form-input v-model="metrosCuadrados"></b-form-input>
      </b-form-group>

      <!-- Productos seleccionados -->
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        label="Producto"
        description=""
      >
        <b-form-select
          v-model="productoSeleccionado"
          :options="productos"
        ></b-form-select>
      </b-form-group>

      <!-- Cantidad de producto -->
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        label="Cantidad de producto"
        description=""
      >
        <b-form-input v-model="metrosCuadrados"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState([
      "listaCotizaciones",
      "listaClientes",
      "listaProductos",
      "listaServicios",
    ]),
  },
};
</script>

<style>
label {
  text-align: left;
}
</style>
