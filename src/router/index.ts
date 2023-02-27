import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }, {
    path: '/errPage',
    name: 'ErrPage',
    component: () => import('@/views/404.vue')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  }, {
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/Forget.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
