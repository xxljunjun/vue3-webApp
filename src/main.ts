
import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'

// 移动端适配
import 'amfe-flexible'
//创建应用实例对象
const app = createApp(App)


app.use(router).mount('#app')



//这些vant组件不能按需引入
// // Toast
// import { Toast } from 'vant';
// import 'vant/es/toast/style';

// // Dialog
// import { Dialog } from 'vant';
// import 'vant/es/dialog/style';

// // Notify
// import { Notify } from 'vant';
// import 'vant/es/notify/style';

// // ImagePreview
// import { ImagePreview } from 'vant';
// import 'vant/es/image-preview/style';
