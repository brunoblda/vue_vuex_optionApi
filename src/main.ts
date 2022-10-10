import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

createApp(App).use(store).provide("$store", store).mount('#app')
