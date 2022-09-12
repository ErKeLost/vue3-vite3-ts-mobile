import { createApp } from 'vue'
import 'uno.css'
import 'normalize.css'
import pinia from '@/store'
import router from '@/router'
import App from './App.vue'
createApp(App).use(router).use(pinia).mount('#app')
