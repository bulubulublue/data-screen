import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Report from '../views/Report.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/report',
    name: 'report',
    component: Report,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
