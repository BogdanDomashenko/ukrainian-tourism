import { createApp } from 'vue'
import Root from './App.vue'
import './assets/css/main.scss'
import VueScrollTo from 'vue-scrollto'


const app = createApp(Root)
app.use(VueScrollTo);
app.mount('#app');