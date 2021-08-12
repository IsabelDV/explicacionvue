<template>
  <div id="nav">
    <!--Los links de lás páginas en rutas se pueden poner de dos maneras,
    por el nombre que tenemos registrado o por el path que hemos especificado
    en el archivo index.js de router-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: 'Prueba'}">Prueba</router-link> |
    <router-link :to="{name: 'product'}">Productos</router-link>
  </div>
</template>

<script>

export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>