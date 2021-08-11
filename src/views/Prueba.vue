<template>
  <div class="prueba">
    <h1>Esto es una página de películas</h1>
    <!--El bucle FOR se especifica con Vue poniendo v-for donde te recorre todos
    los datos que se encuentran en movies (que es un array) que se lo devolvemos
    por data en la exportación por defecto más abajo. :key se asegurará de que
    refleje lo que se debe representar en ese índice en particular-->
    <Movie v-for="(movie, index) in movies"
           :key="index"
           :title="movie.title"
           :image="movie.image"
    >
    </Movie>
  </div>
</template>

<script>
/* Importamos el componente Movie para podernos traer tanto los props
* como la estructura de template que dispone el componente */
import Movie from '@/components/Movie.vue'

export default {
  name: "Prueba",
  components: {
    Movie
  },
  data() {
    return {
      movies: [
        {
          title: "Regreso al Futuro",
          image: "http://es.web.img3.acsta.net/pictures/14/04/03/13/45/034916.jpg",
        },
        {
          title: "Matrix",
          image: "http://t0.gstatic.com/images?q=tbn:ANd9GcQq3pIz-aKgkmYX1dJ-EL-AlHSPcOO7wdqRIJ5gJy9qNinXpmle",
        },
        {
          title: "Interestellar",
          image: "http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
        },
      ]
    };
  }
}
</script>

<style scoped>

</style>