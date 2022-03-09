import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/index'

// const clickoutside = {
//     mounted(el, binding) {
//         console.log("mounted")
//       function documentHandler(e) {
//         if (el.contains(e.target)) {
//           return false
//         }
//         if (binding.value) {
//           binding.value(e)
//         }
//       }
//       el.__vueClickOutside__ = documentHandler
//       document.addEventListener('click', documentHandler)
//     },
//     beforeUnmount(el) {
//         console.log("beforeUnmount")
//       // 取消事件监听
//       document.removeEventListener('click', el.__vueClickOutside__)
//       delete el.__vueClickOutside__
//     },
// }
  
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
//app.directive('clickoutside', clickoutside)
app.mount('#app')
