import ui from '@nuxt/ui/vue-plugin'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import './main.css'

const app = createApp(App)

const router = createRouter({
  routes: [],
  history: createWebHistory(),
})

app.use(router)
app.use(ui)
app.use(createPinia())

app.mount('#app')
