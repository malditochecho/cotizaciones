<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="dark">
      <!-- Logo -->
      <b-navbar-brand mx-auto href="http://127.0.0.1:8080/">
        <img
          src="https://orregohnos.cl/wp-content/uploads/2020/09/new-logo-bigger-01.png"
          width="110"
        />
      </b-navbar-brand>

      <!-- Burger button -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Navegacion del navbar -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto"></b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- Segunda navegacion del navbar, alineada a la derecha -->
        <b-navbar-nav class="ml-auto">
          <!-- Boton crear cotizacion -->
          <b-nav-item href="#">
            <b-button size="md" variant="success"
              ><router-link to="Cotizaciones">Cotizaciones</router-link>
            </b-button>
          </b-nav-item>

          <b-nav-item>
            <b-dropdown
              id="dropdown-1"
              text="Administrar"
              class="md"
              variant="warning"
            >
              <b-dropdown-item>
                <router-link to="Clientes">Clientes</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="Productos">Productos</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="Servicios">Servicios</router-link>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">Otros</b-dropdown-item>
            </b-dropdown>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
a {
  color: black;
}
</style>
