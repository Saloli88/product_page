import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductPage.vue')
  },
  {
    path: '/form/:id',
    props: true,
    name: 'form',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
