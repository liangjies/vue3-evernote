import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeHeader',
      meta: {
        title: '登录 - 云笔记'
      },
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/avatar',
      name: 'AvatarSet',
      meta: {
        title: '设置 - 云笔记'
      },
      component: () => import('@/views/setting/component/AvatarSet.vue')
    },
    {
      path: '/Search',
      name: 'Search',
      meta: {
        title: '搜索 - 云笔记'
      },
      component: () => import('@/views/search/Search.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      meta: {
        title: '登录 - 云笔记'
      },
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/Note/:id*',
      name: 'NoteDetail',
      meta: {
        title: '笔记 - 云笔记'
      },
      component: () => import('@/views/note/NoteDetail.vue'),
    },
    {
      path: '/NoteTrash',
      name: 'NoteTrash',
      meta: {
        title: '废纸篓 - 云笔记'
      },
      component: () => import('@/views/trash/NoteTrash.vue')
    },
    {
      path: '/History',
      name: 'History',
      component: () => import('@/views/note/History.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/mobile/Home.vue')
    },
    {
      path: '/Test',
      name: 'Test',
      component: () => import('@/views/mobile/Test.vue')
    },
  ]
})
export default router