import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import icon from 'rollup-datav-libs/src/components/Icon/index'
import Loading from 'rollup-datav-libs/src/components/Loading/index'
import Flybox from 'rollup-datav-libs/src/components/Flybox/index'
import Container from 'rollup-datav-libs/src/components/Container/index'

const app = createApp(App)
app.use(router)
app.use(icon)
app.use(Loading)
app.use(Flybox)
app.use(Container)
app.mount('#app')
