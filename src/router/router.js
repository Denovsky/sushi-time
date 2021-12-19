import Main from '@/pages/Main'
import News from '@/pages/Main'
import About from '@/pages/About'
import CatalogPage from '@/pages/CatalogPage'
import Cart from '@/pages/Cart'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/:id',
    component: CatalogPage
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/cart',
    component: Cart
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
