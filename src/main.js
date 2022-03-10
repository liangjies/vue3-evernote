import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import router from '@/router/index'
import { createRouter, createWebHistory } from 'vue-router'
import Search from '@/views/search/Search.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomeHeader',
            component: () => import('@/components/HomeHeader.vue')
        },
        {
            path: '/Search',
            name: 'Search',
            component: Search
        },
    ]
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
