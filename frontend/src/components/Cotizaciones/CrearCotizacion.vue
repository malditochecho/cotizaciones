<template>
  <div class="p-5">
    <h1>Nueva cotizacion</h1>
    <b-form @submit.prevent="guardarCotizacion">
      <!-- Seleccionar empresa -->
      <b-form-group
        id="input-group-1"
        label="Cliente"
        label-for="input-2"
        description=""
      >
        <b-form-select
          v-model="seleccionado"
          :options="nombresClientes"
          placeholder="Seleccione un cliente"
        ></b-form-select>
      </b-form-group>

      <!-- Lista de servicios agregados -->
      <b-form-group id="input-group-2" label="Servicios" label-for="input-2">
        <b-table
          :fields="fields"
          :items="serviciosSeleccionados"
          small
          bordered
        ></b-table>
        <template v-slot:cell(cantidad)>
          <!-- Cantnidad -->
          <b-input v-model="cantidadServicio"></b-input>
        </template>
      </b-form-group>

      <!-- boton agregar servicio -->
      <SeleccionarServicioModal />
      <br />

      <!-- boton guardar cotizacoin -->
      <b-button type="submit" variant="success">Guardar cotizacion</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SeleccionarServicioModal from "@/components/Cotizaciones/SeleccionarServicioModal.vue";

export default {
  data: function () {
    return {
      fields: ["id", "nombre", "cantidad"],
      seleccionado: null,
      cantidadServicio: null,
    };
  },
  components: {
    SeleccionarServicioModal,
  },
  computed: {
    ...mapState([
      "listaCotizaciones",
      "listaClientes",
      "listaProductos",
      "listaServicios",
      "serviciosSeleccionados",
    ]),
    ...mapGetters([
      "listaNombreClientes",
      "listaNombreProductos",
      "listaNombreServicios",
      "nombresClientes",
    ]),
  },
  mounted: function () {},
  methods: {
    guardarCotizacion() {
      //console.log("Metodo " + this.serviciosSeleccionados[0].nombre);
      this.$store
        .dispatch("guardarCotizacion", {
          'empresa': {
            
          }
        })
        .catch((err) => {
          console.log(err);
        });

      /* this.$store
        .dispatch("guardarCotizacion", {
          empresa: this.actualizaCliente.empresa,
          contacto: this.actualizaCliente.contacto,
          telefonoContacto: this.actualizaCliente.telefonoContacto,
          correoContacto: this.actualizaCliente.correoContacto,
        })
        .then(this.limpiarFormulario())
        .catch((err) => {
          console.log(err);
        }); */
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
