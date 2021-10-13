import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
 
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL)
})

router.beforeEach((to, _, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});

export default router
