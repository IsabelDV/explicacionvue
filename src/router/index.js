import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/prueba',
    name: 'Prueba',
    /*Podemos traernos el componente Prueba de dos formas, importandolo con
    * "import Prueba from '@/views/Prueba';" arriba y poniendo en la línea
    * de abajo component: Prueba , o como tenemos aquí abajo.*/
    component: () => import('../views/Prueba.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
