import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Contact from '@/components/Contact.vue'
import Services from '@/components/Services.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  }


 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
