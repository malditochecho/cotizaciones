<template>
  <div>
    <detalle-cliente id="id" />
  </div>
</template>

<script>
import DetalleCliente from "@/components/Clientes/DetalleCliente.vue";

export default {
  name: "DetalleCliente",
  props: ["id"],
  data() {
    return {};
  },
  components: {
    DetalleCliente,
  },
};
</script>

<style>
body {
  background-color: GhostWhite;
}
</style>
