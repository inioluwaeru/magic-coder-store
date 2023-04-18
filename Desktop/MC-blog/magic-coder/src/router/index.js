import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Fullnews from '../views/Fullnews.vue'
import Allposts from '../views/Allposts.vue'


const routes = [
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
    path: '/allposts',
    name: 'allposts',
    component: Allposts
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    props: true
  },
  {
    path: '/posts/:id',
    name: 'fullnews',
    component: Fullnews,
    props: true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
