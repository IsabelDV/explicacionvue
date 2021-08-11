<template>
  <div>
<!--Con la directiva v-bind enlazamos un atributo (h2, img)
    a una variable (image, title)-->
    <img width="100" v-bind:src="image" v-bind:alt="title"/>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
/*  Los props son parámetros del componente, en este caso se exportan hacia la vista donde
* se van a utilizar para que este los muestre y los recoja según hemos especificado arriba,
* que corresponden a un h2 y un img*/
  props: ["image", "title"],
  /* name es el nombre con el que estamos registrando el componente */
  name: "Movie"
}
</script>

<style scoped>

</style>