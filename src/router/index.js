import Vue from 'vue'
import VueRouter from 'vue-router'
import Liste from '../views/Liste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Liste',
    component: Liste
  },
  {
    path: '/carte',
    name: 'Carte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Carte.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
