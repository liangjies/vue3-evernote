import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/router/permission'
import router from '@/router/index'
import "weui";

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')