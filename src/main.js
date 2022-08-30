import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'
import router from './router'

//创建应用实例对象
const app = createApp(App)
console.log("app相当于vue2的Vue",app)
app.use(store)
.use(router)
.mount('#app')

