import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/account',
    name: 'account',
    // component: AccountView
    component: () => import('../views/AccountView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
