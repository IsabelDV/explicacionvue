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
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    //Incrementa el valor del carrito asumiendo que ya esté
    INCREMENT_QUANTITY_PRODUCT(state, item){
      item.quantity++
    },
    //Añade un producto que ha recibido del acción al carrito
    ADD_PRODUCTS(state, product){
      state.cart.push({
        id: product.id,
        quantity: 1
      })
    },
    // Borra los elementos del carrito
    REMOVE_PRODUCT_FROM_CART(state, index){
      // Elimina un elemento del array desde el index
      state.cart.splice(index, 1);
    },
    // Resta el valor de inventario
    DECREMENT_PRODUCT_INVENTORY(state, product){
      product.inventory--
    },
    // Encuentra el producto y devuelve la cantidad al inventario
    INCREMENT_PRODUCT_INVENTORY(state, item) {
      const product = state.products.find(product => product.id === item.id);
      product.inventory += item.quantity;
    }
  },
  actions: {
     /*Llama a setProduct va a tener los productos de la api a través
     de la mutación, commit hace que se lance a la mutación para tener
     acceso a esta.*/
    getProducts({ commit }) {
      /*Resolve es para resolver la promesa (Promise) donde se llama
      a la API que contiene los datos de producto.*/
      return new Promise((resolve) => {
        api.getProducts(products =>{
          commit("SET_PRODUCTS", products)
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
        context.commit('INCREMENT_QUANTITY_PRODUCT', item)
      }else{
      // Si no es así, añadir el producto
        context.commit('ADD_PRODUCTS', product)
      }
      // Restar al inventario de ese producto
      context.commit('DECREMENT_PRODUCT_INVENTORY', product)
    },
    // Con el array de cart puede buscar (context) y el índice
    removeProductFromCart(context, index){
      console.log('He entrado')
      const item = context.state.cart[index];
      // Elimina el producto del carrito
      context.commit("REMOVE_PRODUCT_FROM_CART", index)
      // Restaura el inventario
      context.commit("INCREMENT_PRODUCT_INVENTORY", item)
    }
  },
  getters: {
    // Comprueba los productos que hay usando filter
    productsOnStock(state){
      return state.products.filter(product =>{
        //Devuelve los productos que tienen un valor de inventario mayor a 0
        return product.inventory > 0
      })
    },
    productsOnCart(state){
      // Usamos map para mandar una version "modificada" y no la original
      return state.cart.map(item => {
        const product = state.products.find(product => product.id === item.id)
        return {
          title: product.title,
          price: product.price,
          quantity: item.quantity
        }
      })
    }
  },
  modules: {
    /*Nombre que tu quieres que se llame el módulo: nombre del módulo*/
  }
})
