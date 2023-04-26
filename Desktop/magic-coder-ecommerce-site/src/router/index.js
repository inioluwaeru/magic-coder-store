import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import Prodetails from '../views/Prodetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/products/:id',
      name: 'prodetails',
      component: Prodetails,
      props: true
    },
  ]
})

export default router
