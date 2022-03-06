import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'sidebar-active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HomeHeader',
      component: () => import('../components/HomeHeader.vue')
    }
  ]
})
export default router