import { createApp } from 'vue'
import App from './App.vue'
import route from 'src/routers/index'
import './style/index.less'

console.log(import.meta.env.VITE_APP_BASE_API)

const app = createApp(App)
app.use(route)
app.mount('#app')
