<template>
  <div id="app">
    <nav>
      <router-link to="/">Numeros Primos</router-link> |
      <router-link to="/marvel">Personajes de Marvel</router-link> |
      <router-link to="/location">Localidad </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #4a93e0;
    }
  }
}

</style>
