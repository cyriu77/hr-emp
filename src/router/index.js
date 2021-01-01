import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Categories.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/employees',
    name: 'employees',
    meta: {layout: 'main'},
    component: () => import('../views/Employees.vue')
  },
  {
    path: '/employee',
    name: 'employee',
    meta: {layout: 'main'},
    component: () => import('./../views/Employee.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
