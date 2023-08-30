import './assets/style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import {router} from "@/router/router";

import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasHeart} from "@fortawesome/free-regular-svg-icons"

library.add(faHeart)
library.add(fasHeart)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')