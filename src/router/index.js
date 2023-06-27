import Vue from 'vue'
import VueRouter from 'vue-router'
import Logeo from '../views/logeo.vue'
import Main from '../views/Main.vue'
import Cita from '../views/cita.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginn',
    component: Logeo
  },
  {
    path: '/perfil',
    name: 'main',
    component: Main
  },
  {
    path: '/cita',
    name: 'reservarCita',
    component: Cita
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
