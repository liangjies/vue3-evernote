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
      meta: {
        title: '搜索'
      },
      component: Search
    },
    {
      path: '/Login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/NoteDetail/:id',
      name: 'NoteDetail',
      meta: {
        title: '笔记'
      },
      component: () => import('@/views/note/NoteDetail.vue'),
    },
    {
      path: '/NoteEditor',
      name: 'NoteEditor',
      component: () => import('@/views/note/NoteEditor.vue')
    },
    {
      path: '/NoteTrash',
      name: 'NoteTrash',
      meta: {
        title: '废纸篓'
      },
      component: () => import('@/views/trash/NoteTrash.vue')
    },
    {
      path: '/History',
      name: 'History',
      component: () => import('@/views/note/History.vue')
    },
  ]
})
export default router