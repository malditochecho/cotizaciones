<template>
    <div>
        <p v-for="cliente in clientes" :key="cliente.id">{{ cliente.empresa }}</p>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'app',
    data () {
        return {
            clientes: [],
        }
    },
    mounted: function() {
        this.listarClientes()
    },
    methods: {
        listarClientes: function() {
            axios.get('http://127.0.0.1:8000/api/Cliente/')
                .then((response) => {
                    this.clientes = response.data;
                    console.log('API ok!')
                }, (error) => {
                    console.log('API con error: '.concat(error))
                })
        }
    },
}
</script>
<style>
    
</style>