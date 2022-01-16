import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from 'src/views/common/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: index
  },
  {
    path: '/api',
    name: 'api',
    component: () => import('src/views/common/request.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('src/views/common/login.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
