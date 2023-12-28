import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import "./utils/rem.js"
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './theme/mixins.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const store = createPinia()
app.use(store).use(ElementPlus).use(router).mount('#app')
