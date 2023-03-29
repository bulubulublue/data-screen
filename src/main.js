import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import VueEcharts from 'vue-echarts'
import 'echarts' //  全量加载
import Icon from 'rollup-datav-libs/src/components/Icon/index'
import Loading from 'rollup-datav-libs/src/components/Loading/index'
import Flybox from 'rollup-datav-libs/src/components/Flybox/index'
import Container from 'rollup-datav-libs/src/components/Container/index'
import Logo from 'rollup-datav-libs/src/components/Logo/index'
import CountTo from 'rollup-datav-libs/src/components/CountTo/index'
import BaseScrollList from 'rollup-datav-libs/src/components/BaseScrollList/index'
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(Icon)
app.use(Loading)
app.use(Flybox)
app.use(Container)
app.use(Logo)
app.use(CountTo)
app.use(BaseScrollList)

app.component(
  // 注册的名字
  'v-chart',
  VueEcharts
)

app.mount('#app')
