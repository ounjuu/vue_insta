import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'
import mitt from 'mitt'
import axios from 'axios'

let emitter = mitt()

const app = createApp(App)
// 전역
app.config.globalProperties.emitter = emitter
app.config.globalProperties.axios = axios

import store from './store.js'

app.use(createPinia())
app.use(router)
app.use(store).mount('#app')
