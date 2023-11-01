import './assets/main.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/');
//app.use(createPinia())
app.use(router)

app.mount('#app')
