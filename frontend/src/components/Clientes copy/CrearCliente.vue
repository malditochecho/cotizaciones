<template>
  <div class="p-5">
    <h1>{{ modoEditando ? "Editando Cliente" : "Nuevo Cliente" }}</h1>
    <b-form @submit.prevent="submitFormulario()">
      <!-- Nombre empresa -->
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="objetoEnEdicionEnFormulario.empresa"
          type="text"
          required
          :disabled="modoEditando"
          placeholder="Ingresa nombre del cliente"
          maxlength="100"
        ></b-form-input>
      </b-form-group>

      <!-- Nombre contacto -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="objetoEnEdicionEnFormulario.contacto"
          placeholder="Ingresa el contacto"
          maxlength="100"
        ></b-form-input>
      </b-form-group>

      <!-- Email -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="objetoEnEdicionEnFormulario.correoContacto"
          placeholder="Ingresa el email"
          type="email"
          maxlength="100"
        ></b-form-input>
      </b-form-group>

      <!-- Telefono -->
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="objetoEnEdicionEnFormulario.telefonoContacto"
          placeholder="Ingresa el telefono"
          type="number"
          maxlength="11"
          minlength="8"
        ></b-form-input>
      </b-form-group>

      <!-- BOTON GUARDAR -->
      <b-button
        v-if="!modoEditando"
        :disabled="modoEditando"
        variant="success"
        type="submit"
        >Guardar</b-button
      >

      <!-- BOTON LIMPIAR -->
      <b-button
        class="ml-3"
        v-if="!modoEditando"
        :disabled="modoEditando"
        variant="warning"
        @click="limpiarFormulario()"
        >Limpiar</b-button
      >

      <!-- BOTON TEMPORAL ACTUALIZAR -->
      <b-button
        v-if="modoEditando"
        :disabled="!modoEditando"
        variant="success"
        type="submit"
        >Actualizar</b-button
      >
      <!-- BOTON TEMPORAL CANCELAR -->
      <b-button
        class="ml-3"
        v-if="modoEditando"
        :disabled="!modoEditando"
        variant="danger"
        @click="cancelarEdicion()"
        >Cancelar</b-button
      >
    </b-form>

    <p>{{ objetoEnEdicionEnFormulario }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "CrearCliente",
  computed: {
    ...mapGetters(["listaNombresClientes", "listaClientes"]),
    ...mapState(["modoEditando", "objetoEnEdicionEnFormulario"]),
  },
  methods: {
    submitFormulario() {
      if (
        this.listaNombresClientes.includes(
          this.objetoEnEdicionEnFormulario.empresa
        )
      ) {
        alert("El cliente YA existe");
        for (var i in listaClientes) {
          if (listaClientes[i]["empresa"] == formulario) {
            for (const key in nuevosDatos) {
              listaClientes[i][key] = nuevosDatos[key];
            }
            break;
          }
        }
        this.guardarCambiosFormulario();
        this.limpiarFormulario();
      } else {
        alert("NO existe. Cliente nuevo.");
        this.guardarClienteNuevo();
      }
    },
    guardarClienteNuevo() {
      this.$store
        .dispatch("guardarClienteNuevo", {
          empresa: this.objetoEnEdicionEnFormulario.empresa,
          contacto: this.objetoEnEdicionEnFormulario.contacto,
          telefonoContacto: this.objetoEnEdicionEnFormulario.telefonoContacto,
          correoContacto: this.objetoEnEdicionEnFormulario.correoContacto,
        })
        .then(this.limpiarFormulario())
        .catch((err) => {
          console.log(err);
        });
    },
    guardarCambiosFormulario() {
      this.$store
        .dispatch("actualizarCliente", this.objetoEnEdicionEnFormulario.id, {
          contacto: this.objetoEnEdicionEnFormulario.contacto,
          telefonoContacto: this.objetoEnEdicionEnFormulario.telefonoContacto,
          correoContacto: this.objetoEnEdicionEnFormulario.correoContacto,
        })
        .then(this.limpiarFormulario())
        .catch((err) => {
          console.log(err);
        });
    },
    cancelarEdicion() {
      this.$store.dispatch("permutarEdicion").then(() => {});
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.$store.dispatch("limpiarFormulario").then(() => {});
    },
  },
};
</script>

<style></style>
