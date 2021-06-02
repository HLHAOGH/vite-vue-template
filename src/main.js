import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'dayjs/locale/zh-cn'
import '@/style/index.css'
import '@/api/preset'
import router from '@/route/index'
import store from '@/store/index'

// 注册全局属性 app.config.globalProperties.$api = api

const app = createApp(App)
app.use(ElementPlus)
app.use(router);
app.use(store);
app.mount('#app')
