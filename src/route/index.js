import { createRouter, createWebHistory } from 'vue-router'
 
export const constantRoutes = [
  {
    path: '/index',
    component: () => import('@/views/index.vue')
  }
]
 
const router = createRouter({
  routes: constantRoutes,
  history: createWebHistory()
})
 
export default router
