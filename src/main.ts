import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import "./utils/rem.js"
import ElementPlus from 'element-plus';

const app = createApp(App)

app.use(createPinia()).use(ElementPlus).use(router).mount('#app')
