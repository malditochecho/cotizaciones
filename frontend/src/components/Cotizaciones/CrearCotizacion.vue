<template>
  <div class="p-5">
    <h1>Nueva cotizacion</h1>
    <b-form @submit="guardarCotizacion">
      <!-- Seleccionar empresa -->
      <b-form-group
        id="input-group-1"
        label="Cliente"
        label-for="input-2"
        description=""
      >
        <b-form-select
          :v-model="listaClientes"
          :options="listaClientes.nombre"
        ></b-form-select>
      </b-form-group>

      <!-- Lista de servicios agregados -->
      <b-form-group id="input-group-2" label="Servicios" label-for="input-2">
        <b-table
          thead-class="d-none"
          :fields="fields"
          :items="serviciosSeleccionados"
          small
          bordered
        ></b-table>
        <template v-slot:cell(acciones)="{ item }">
          asdasd
          <b-button @click="removerServicio(item)">Remover</b-button>
        </template>
      </b-form-group>

      <b-button type="submit" variant="success">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: function() {
    return {
      fields: [
        {
          id: 0,
          key: "nombre",
          sortable: true,
          label: "Nombre",
        },
        {
          id: 1,
          key: "cantidad",
          sortable: true,
          label: "Cantidad",
        },
        {
          id: 2,
          key: "acciones",
        },
      ],
      serviciosSeleccionados: [
        {
          nombre: "mantencion",
          cantidad: 3,
        },
        {
          nombre: "aseo",
          cantidad: 2,
        },
      ],
    };
  },
  computed: {
    ...mapState([
      "listaCotizaciones",
      "listaClientes",
      "listaProductos",
      "listaServicios",
    ]),
    ...mapGetters([
      "listaNombreClientes",
      "listaNombreProductos",
      "listaNombreServicios",
    ]),
  },
  methods: {
    guardarCotizacion() {
      this.$store
        .dispatch("guardarCotizacion", {
          empresa: this.actualizaCliente.empresa,
          contacto: this.actualizaCliente.contacto,
          telefonoContacto: this.actualizaCliente.telefonoContacto,
          correoContacto: this.actualizaCliente.correoContacto,
        })
        .then(this.limpiarFormulario())
        .catch((err) => {
          console.log(err);
        });
    },
    removerServicio(servicio) {
      const index = this.serviciosSeleccionados.findIndex((element) => {
        element.id == servicio.id;
      });
      this.serviciosSeleccionados.forEach((element) => {
        if (element.id == servicio.id) {
          this.serviciosSeleccionados.splice(index, 1);
        }
      });
    },
  },
};
</script>

<style>
label {
  text-align: left;
}
</style>
