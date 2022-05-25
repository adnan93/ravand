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
    path: '/Palayesh',
    name: 'Palayesh',
    component: () => import('../views/Palayesh.vue')
  },
  
  {
    path: '/Petrosheme',
    name: 'Petrosheme',
    component: () => import('../views/Petrosheme.vue')
  },

  {
    path: '/ZangerehFolad',
    name: 'ZangerehFolad',
    component: () => import('../views/ZangerehFolad.vue')
  },
  
  {
    path: '/GeranBaha',
    name: 'GeranBaha',
    component: () => import('../views/GeranBaha.vue')
  },

  

  {
    path: '/GhairAhani',
    name: 'GhairAhani',
    component: () => import('../views/GhairAhani.vue')
  },

  

  {
    path: '/Tala',
    name: 'Tala',
    component: () => import('../views/Tala.vue')
  },








]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
