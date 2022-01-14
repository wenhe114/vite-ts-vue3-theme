import { createApp } from 'vue'
import App from './App.vue'
import route from 'src/routers/index'
import './style/index.less'

const app = createApp(App)
app.use(route)
app.mount('#app')
