import { createApp } from 'vue'
import Vant from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import '@/assets/css/iconfont.css'
import 'default-passive-events'
const app = createApp(App)
app.use(store).use(router).use(Vant).mount('#app')