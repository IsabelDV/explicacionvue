import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/api/shop";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    incrementQuantityProduct(state, item){
      item.quantity++
    },
    addProducts(state, product){
      state.cart.push({
        id: product.id,
        quantity: 1
      })
    },
    decrementProductInventory(state, product){
      product.inventory--
    }
  },
  actions: {
    getProducts({ commit }) {
      return new Promise((resolve) => {
        api.getProducts(products =>{
          commit("setProducts", products)
          resolve()
        })
      })
    },
    addProducts(context, product){
      // Comprueba si el producto tiene inventario
      if(product.inventory === 0 ) return;
      // Comprueba si existe ya en el carrito
      const item = context.state.cart.find(item => item.id === product.id)
      if(item){
        // Si es así añadir uno más a la compra
        context.commit('incrementQuantityProduct', item)
      }else{
      // Si no es así, añadir el producto
        context.commit('addProducts', product)
      }
      // Restar al inventario de ese producto
      context.commit('decrementProductInventory', product)
    }
  },
  getters: {
    productsOnStock(state){
      return state.products.filter(product =>{
        return product.inventory > 0
      })
    }
  },
  modules: {
    /*Nombre que tu quieres que se llame el módulo: nombre del módulo*/
  }
})
