import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCN from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import '@/assets/js/iconfont';
import '@/style/common.css';
import '@/style/variables.scss'
import '@/api/preset'
import 'normalize.css'
import globalComp from '@/components/index'
import router from '@/route/index'
import store from '@/store/index'

// 注册全局属性 app.config.globalProperties.$api = api

createApp(App)
.use(ElementPlus, { locale: zhCN, size: 'small', zIndex: 3000 })
.use(router)
.use(store)
.use(globalComp)
.mount('#app')
