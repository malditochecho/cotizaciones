<template>
  <div>
    <b-button v-b-modal.modal-crear variant="success">Nuevo</b-button>

    <b-modal
      id="modal-crear"
      title="Nuevo Producto"
      hide-footer
      header-bg-variant="success"
      header-text-variant="light"
      centered
    >
      <b-form @submit="submitFormulario(productoNuevo)">
        <!-- Nombre Producto -->
        <b-form-group
          id="input-group-1"
          label-for="input-1"
          label="Nombre Producto"
        >
          <b-form-input
            id="input-1"
            v-model="productoNuevo.producto"
            type="text"
            required
            placeholder="Jotafloor"
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- Nombre Marca -->
        <b-form-group
          id="input-group-2"
          label-for="input-2"
          label="Nombre de la Marca del Producto"
        >
          <b-form-input
            id="input-2"
            v-model="productoNuevo.marca"
            placeholder="Ej.: Jotun"
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- Email -->
        <b-form-group
          id="input-group-2"
          label-for="input-2"
          label="Fabricante del Producto"
        >
          <b-form-input
            id="input-2"
            v-model="productoNuevo.fabricante"
            placeholder="Ej: Codelpa"
            type="text"
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- Valor Unidad -->
        <b-form-group
          id="input-group-2"
          label-for="input-2"
          label="Valor unidad"
        >
          <b-form-input
            id="input-2"
            v-model="productoNuevo.valorUnidad"
            placeholder="Ej.: 20000"
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
    ...mapState(["productoNuevo"]),
  },
  methods: {
    submitFormulario(productoNuevo) {
      this.$store.dispatch("guardarProductoNuevo", productoNuevo).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style></style>
