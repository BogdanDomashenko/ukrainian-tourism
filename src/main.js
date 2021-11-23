import { createApp } from 'vue'
import Root from './App.vue'
import VueScrollTo from 'vue-scrollto'

import { store } from './store'
import './assets/css/main.scss'


const app = createApp(Root)

app.use(VueScrollTo);
app.use(store);

app.mount('#app');

