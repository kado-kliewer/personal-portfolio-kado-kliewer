import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/Home.vue'
import PortfolioView from './components/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: PortfolioView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router