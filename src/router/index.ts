import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/Home.vue'

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
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  }, {
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/Forget.vue')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search/Search.vue')
  }, {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/Chat/Chat.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
