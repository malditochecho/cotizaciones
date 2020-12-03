<template>
  <div>
    <!-- <b-button :v-b-modal="item.index" variant="danger">Editar</b-button> -->
    <b-button @click="mostrarModal = true" variant="info" block
      >Editar</b-button
    >

    <b-modal
      :id="item.index"
      title="Editar cliente"
      v-model="mostrarModal"
      hide-footer
      header-bg-variant="info"
      header-text-variant="light"
      centered
      size="md"
    >
      <b-form @submit="submitFormulario(clienteEnEdicion)">
        <!-- Nombre empresa -->
        <b-form-group
          id="input-group-1"
          label="Nombre empresa"
          label-for="input-cliente"
        >
          <b-form-input
            id="input-cliente"
            v-model="clienteEnEdicion.empresa"
            type="text"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Contacto"
          label-for="input-contacto"
        >
          <b-form-input
            id="input-contacto"
            v-model="clienteEnEdicion.contacto"
            type="text"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Telefono"
          label-for="input-telefono"
        >
          <b-form-input
            id="input-telefono"
            v-model="clienteEnEdicion.telefonoContacto"
            type="text"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Correo"
          label-for="input-correo"
        >
          <b-form-input
            id="input-correo"
            v-model="clienteEnEdicion.correoContacto"
            type="text"
            required
            maxlength="100"
          ></b-form-input>
        </b-form-group>

        <!-- BOTONES -->
        <div class="d-flex justify-content-between">
          <b-button
            variant="info"
            type="submit"
            @click="mostrarModal = !mostrarModal"
            >Actualizar</b-button
          >
          <b-button type="submit">Cancelar</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  data() {
    return {
      mostrarModal: false,
      clienteEnEdicion: {},
    };
  },
  props: ["item"],
  computed: {
    // ...mapState(["clienteEnEdicion"]),
  },
  mounted: function() {
    this.copiarClienteEdicion(this.item);
  },
  methods: {
    copiarClienteEdicion(item) {
      this.clienteEnEdicion = item;
    },
    submitFormulario(clienteEnEdicion) {
      this.$store
        .dispatch("actualizarCliente", clienteEnEdicion)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
