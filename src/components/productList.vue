<template>
<div>
  <h1>Listado de coches</h1>
  <hr align="left">
  <ul>
    <li v-for="product in products" :key="product.id">
      <b>Coche: </b>{{ product.title }} |
      <b>Precio: </b>{{ product.price }} |
      <b>Inventario: </b>{{ product.inventory }}
      <button @click="addToCart(product)">Cart</button>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  name: "productList",
  async created() {
    try {
      await this.$store.dispatch("getProducts")
    } catch (error){
      console.error(error)
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addProducts", product)
    }
  },
  computed: {
    products() {
      return this.$store.getters.productsOnStock
    }
  }
};
</script>

<style scoped>
h1{
  text-align: left;
}
ul{
  text-align: left;
  list-style:none;
}
hr{
  max-width: 40%;
}
</style>