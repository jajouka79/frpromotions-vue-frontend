import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import FreedomFestPage from './pages/FreedomFestPage.vue'

const routes = [
  { 
    path: '/', 
    component: HomePage, 
    name: 'Home' 
  },
  { 
    path: '/ff', 
    component: FreedomFestPage, 
    name: 'FreedomFest'
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router