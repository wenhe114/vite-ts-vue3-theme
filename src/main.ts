import { createApp } from 'vue'
import App from './App.vue'
import route from "src/routers/index"

const app=createApp(App)
app.use(route)
app.mount('#app')
