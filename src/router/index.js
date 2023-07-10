import Vue from 'vue'
import VueRouter from 'vue-router'
import Logeo from '../views/logeo.vue'
// import Perfil from '../views/perfil.vue'
import Cita from '../views/cita.vue'
import Main from '../views/main.vue'
import Perfil from '../views/perfil.vue'
import Reporte from '../views/reporte.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'loginn',
    component: Logeo
  },
  // {
  //   path: '/perfil',
  //   name: 'perfil',
  //   component: Perfil
  // },
  {
    path: '/cita',
    name: 'reservarCita',
    component: Cita
  },
  {
    path: '/perfil',
    name: 'perfilDentito',
    component: Perfil
  },

  {
    path: '/reporte',
    name: 'reporte',
    component: Reporte
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
