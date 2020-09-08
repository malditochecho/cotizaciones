<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    
    <!-- Logo -->
    <b-navbar-brand mx-auto href="https://orregohnos.cl/">
      <img src="https://orregohnos.cl/wp-content/uploads/2020/01/logo_4.png" width="110">
    </b-navbar-brand>

    <!-- Burger button -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <!-- Navegacion del navbar -->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!-- Segunda navegacion del navbar, alineada a la derecha -->
      <b-navbar-nav class="ml-auto">

        <!-- Boton crear cotizacion -->
        <b-nav-item href="#">
          <b-button pill size="md" variant="success">Crear cotizacion</b-button>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>