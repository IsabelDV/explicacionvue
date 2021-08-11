import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from "@/components/NavBar";

Vue.config.productionTip = false

/** Esta es otra manera de importar un componente a una vista.
 * El primer parámetro es ID que es como se va a llamar el componente,
 * y el segundo parámetro es el componente **/
Vue.component('Navbar', NavBar)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
