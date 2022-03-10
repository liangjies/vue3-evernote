import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/search/Search.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeHeader',
      component: () => import('../components/HomeHeader.vue')
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
  ]
})
export default router