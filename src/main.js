import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import './style.css'

// Crie a instância do Pinia
const pinia = createPinia()

// Adicione o plugin de persistência ao Pinia
pinia.use(piniaPluginPersistedState)

// Crie a instância do Vue e passe o Pinia
const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
