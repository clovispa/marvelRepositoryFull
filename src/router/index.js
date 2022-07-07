import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/marvel',
    name: 'marvel',
    component: () => import(/* webpackChunkName: "marvel" */ '../views/MarvelView.vue')
  },
  {
    path: '/location',
    name: 'location',
    component: () => import(/* webpackChunkName: "location" */ '../views/Location.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
