import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import TestView from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
