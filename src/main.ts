import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
// px自动转化为rem以适配各种屏幕尺寸
import 'lib-flexible/flexible.js'

// svg 配置
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
const req = require.context('@/icons/svg', false, /\.svg$/)
req.keys().map(req)

const app = createApp(App)

app.component('SvgIcon', SvgIcon)
app.use(store)
app.use(router)
app.config.globalProperties.$axios = axios;

app.mount('#app')
