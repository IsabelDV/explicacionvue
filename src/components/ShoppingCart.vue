<template>
<div>
  <h1>Carrito</h1>
  <hr align="right">
  <ul>
    <li v-for="(item, $index) in cartItems" :key="item.id">
      {{ item.title }} | <b>Cantidad:</b> {{ item.quantity }}
      <button @click="removeItem($index)">Delete</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "ShoppingCart",
  methods: {
    removeItem(index) {
      // Quita del carrito y restaura el valor de inventario
      console.log(this.$store)
      this.$store.dispatch('removeProductFromCart', index)
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters.productsOnCart
    }
  }
}
</script>

<style scoped>
h1{
  text-align: right;
}
ul{
  text-align: right;
  list-style:none;
}
hr{
  max-width: 40%;
}
</style>