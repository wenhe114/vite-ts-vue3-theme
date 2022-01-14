import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from 'src/views/page/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: index
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
