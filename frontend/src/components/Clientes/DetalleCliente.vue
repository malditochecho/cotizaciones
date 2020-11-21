<template>
  <div>
    <h1>Cliente {{ cliente }}</h1>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  name: "DetalleCliente",
  props: ["id"],
  data() {
    return {
      cliente: {},
    };
  },
  created() {
    EventService.obtenerCliente(this.id)
      .then((response) => {
        this.cliente = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>
