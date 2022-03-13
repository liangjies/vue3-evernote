import { createRouter, createWebHistory } from 'vue-router'
import Search from '@/views/search/Search.vue'
import NoteList from '@/views/note/Note.vue'
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
    {
      path: '/NoteList',
      name: 'NoteList',
      component: NoteList
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/NoteDetail',
      name: 'NoteDetail',
      component: () => import('@/views/note/NoteDetail.vue')
    },
    {
      path: '/NoteEditor',
      name: 'NoteEditor',
      component: () => import('@/views/note/NoteEditor.vue')
    },
  ]
})
export default router